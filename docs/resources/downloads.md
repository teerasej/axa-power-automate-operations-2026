# ดาวน์โหลดไฟล์ฝึก

| ไฟล์ | ใช้เมื่อไร |
|---|---|
| [operations-request-tracker.xlsx](/downloads/operations-request-tracker.xlsx) | Upload ไป OneDrive for Business ก่อนทำ Exercise 2 |
| [operations-request-tracker-reset.xlsx](/downloads/operations-request-tracker-reset.xlsx) | เริ่มฝึกใหม่ด้วย Table schema เดิม |
| [sample-requests.csv](/downloads/sample-requests.csv) | อ่านตัวอย่างคำขอสมมติ ไม่ต้อง import เข้า tracker |
| [forms-to-excel-training.png](/downloads/forms-to-excel-training.png) | ใช้เป็นภาพ context สำหรับ design review เมื่อไม่มีภาพของตัวเอง |
| [compose-error-training.png](/downloads/compose-error-training.png) | ใช้เป็นภาพ context สำหรับ error diagnosis เมื่อไม่มีภาพ error จริง |
| [chatgpt-text-backup.txt](/downloads/chatgpt-text-backup.txt) | คัดลอก sample description และคำถามสั้นเมื่อ upload ภาพไม่ได้ |
| [learner-materials.zip](/downloads/learner-materials.zip) | เก็บสำเนา Markdown, ภาพและไฟล์ฝึกไว้อ่านต่อ |

Workbook มี worksheet `Requests`, table `RequestsTable` และ columns `RequestId`, `Title`, `Description`, `RequesterEmail`, `Category`, `Status` พร้อมแถวว่างเริ่มต้นหนึ่งแถว ไม่มีข้อมูลลูกค้าหรือ macro

## ภาพสำหรับ Exercise 4

ภาพ PNG ทั้งสองสร้างด้วย AI เพื่อการสอน ไม่ใช่ screenshot จริงของ Power Automate และไม่ใช่หลักฐาน run หรือ tenant readiness ภาพ Forms → Excel แสดงลำดับและ mapping; ภาพ Compose แสดง expression และ error summary แบบประกอบ UI และ error จริงอาจต่างกัน รวมถึง constant expression ที่อาจถูกปฏิเสธตอน Save ให้ตรวจและทดสอบในบัญชีฝึกของตัวเองตาม [Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md)

เปิดไฟล์ภาพขนาดเต็มเพื่ออ่านข้อความ ถ้า upload ไม่ได้ ใช้ text backup; ถ้าเข้า ChatGPT ไม่ได้ ใช้ [ตัวอย่างประกอบ](../guidebook/saved-examples.md)

ถ้าคลิก PNG แล้ว browser เปิดภาพ ให้เลือก **Save image as** เพื่อเก็บเป็นไฟล์ หรือดาวน์โหลด ZIP ซึ่งรวม PNG และ text backup ไว้แล้ว

## Reset โดยไม่ทำให้ flow ชี้ผิดไฟล์

1. หยุดการทดสอบและรอ runs ที่กำลังทำงานให้จบ ปิด workbook
2. ดาวน์โหลด reset workbook แล้ว Upload เป็นไฟล์ใหม่ใน folder ฝึกของตัวเอง
3. เปิด `Add a row into a table` ใน flow ใช้ picker เลือก reset workbook ใหม่ แล้วเลือก RequestsTable อีกครั้ง ตรวจ mapping หกคอลัมน์และ Save
4. ส่ง Form response ใหม่หนึ่งครั้ง ตรวจว่าไปลงไฟล์ใหม่จริง

การเปลี่ยนไฟล์ไม่ได้ลบ Forms responses หรือ Run history เดิม ไม่ใช้ Delete หรือ Replace ไฟล์เพื่อคาดว่า flow จะเปลี่ยน File reference ให้อัตโนมัติ

## อ่าน Markdown จาก ZIP

แตก ZIP แล้วเริ่มที่ README.md ใช้ Markdown viewer ที่รองรับ relative links; Mermaid ต้องใช้ viewer ที่รองรับด้วย ทางเว็บไซต์เป็นเวอร์ชันที่แสดง diagrams และ search ได้ครบ ไฟล์ workbook อยู่ใน folder downloads ใน ZIP
