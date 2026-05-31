# อัปเดตแผน 1.1

ไฟล์ชุดนี้แก้เฉพาะแผน 1.1 โดยยึดโครง Part 1 เดิมเป็นต้นแบบ:

- ใช้ A-Frame + MindAR
- ใช้ปุ่ม Start Camera ก่อนเปิดกล้อง
- ใช้ targetFound / targetLost
- สร้าง AR text จาก JSON อัตโนมัติ
- รองรับ target 20 ภาพ
- ปรับให้กล้องเต็มจอ และไม่มีกล่อง scan overlay บังภาพ

## วิธีอัปโหลด

1. แตก ZIP
2. อัปโหลดโฟลเดอร์ `part1` และ `assets` ทับ repo เดิม
3. สร้างไฟล์ `assets/targets/part1-1.mind` จากภาพใน `assets/images/part1/1.1/targets/`
4. เปิดหน้า `part1/1.1/` แล้วกด Start Camera
