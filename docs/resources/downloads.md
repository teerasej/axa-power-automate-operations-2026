# ดาวน์โหลดไฟล์ฝึก

| ไฟล์ | ใช้เมื่อไร |
|---|---|
| [operations-request-tracker.xlsx](/downloads/operations-request-tracker.xlsx) | Upload ไป OneDrive for Business ก่อนทำ Exercise 2 |
| [operations-request-tracker-reset.xlsx](/downloads/operations-request-tracker-reset.xlsx) | เริ่มฝึกใหม่ด้วย Table schema เดิม |
| [sample-requests.csv](/downloads/sample-requests.csv) | อ่านตัวอย่างคำขอสมมติ ไม่ต้อง import เข้า tracker |
| [learner-materials.zip](/downloads/learner-materials.zip) | เก็บสำเนา Markdown, ภาพและไฟล์ฝึกไว้อ่านต่อ |

Workbook มี worksheet `Requests`, table `RequestsTable` และ columns `RequestId`, `Title`, `Description`, `RequesterEmail`, `Category`, `Status` พร้อมแถวว่างเริ่มต้นหนึ่งแถว ไม่มีข้อมูลลูกค้าหรือ macro

## Reset โดยไม่ทำให้ flow ชี้ผิดไฟล์

1. หยุดการทดสอบและรอ runs ที่กำลังทำงานให้จบ ปิด workbook
2. ดาวน์โหลด reset workbook แล้ว Upload เป็นไฟล์ใหม่ใน folder ฝึกของตัวเอง
3. เปิด `Add a row into a table` ใน flow ใช้ picker เลือก reset workbook ใหม่ แล้วเลือก RequestsTable อีกครั้ง ตรวจ mapping หกคอลัมน์และ Save
4. ส่ง Form response ใหม่หนึ่งครั้ง ตรวจว่าไปลงไฟล์ใหม่จริง

การเปลี่ยนไฟล์ไม่ได้ลบ Forms responses หรือ Run history เดิม ไม่ใช้ Delete หรือ Replace ไฟล์เพื่อคาดว่า flow จะเปลี่ยน File reference ให้อัตโนมัติ

## อ่าน Markdown จาก ZIP

แตก ZIP แล้วเริ่มที่ README.md ใช้ Markdown viewer ที่รองรับ relative links; Mermaid ต้องใช้ viewer ที่รองรับด้วย ทางเว็บไซต์เป็นเวอร์ชันที่แสดง diagrams และ search ได้ครบ ไฟล์ workbook อยู่ใน folder downloads ใน ZIP
