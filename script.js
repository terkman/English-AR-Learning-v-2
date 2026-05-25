/* English AR Learning — Global Script */
'use strict';

const Speech = {
  supported: 'speechSynthesis' in window,
  speak(text, rate = 0.88, pitch = 1) {
    if (!this.supported || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    utterance.pitch = pitch;
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang === 'en-US' && v.localService) || voices.find(v => v.lang && v.lang.startsWith('en'));
    if (englishVoice) utterance.voice = englishVoice;
    window.speechSynthesis.speak(utterance);
  },
  stop() { if (this.supported) window.speechSynthesis.cancel(); },
  warmup() { if (this.supported) window.speechSynthesis.getVoices(); }
};

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function vibrate(pattern = 40) {
  if ('vibrate' in navigator) navigator.vibrate(pattern);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button, a.btn, a.part-card').forEach(el => {
    el.style.touchAction = 'manipulation';
  });

  document.querySelectorAll('[data-speak]').forEach(btn => {
    btn.addEventListener('click', () => Speech.speak(btn.getAttribute('data-speak')));
  });

  document.querySelectorAll('[data-demo-output]').forEach(btn => {
    btn.addEventListener('click', () => {
      const output = document.querySelector(btn.getAttribute('data-demo-output'));
      if (!output) return;
      output.classList.toggle('visually-hidden');
      vibrate(30);
    });
  });
});
