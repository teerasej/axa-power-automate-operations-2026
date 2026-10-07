# รู้จักส่วนประกอบของ flow

ก่อนต่อ flow ลองคิดถึงร้านอาหาร: ลูกค้าสั่งอาหารเป็นเหตุเริ่มต้น พนักงานทำตามขั้นตอน ใบสั่งอาหารส่งข้อมูลระหว่างคน ส่วนแต่ละสถานีต้องใช้เครื่องมือที่ถูกต้อง

| คำ | ความหมาย | ตัวอย่างที่เราฝึก |
|---|---|---|
| Environment | พื้นที่ทำงานที่รวม flow และทรัพยากรของพื้นที่นั้น | เลือกพื้นที่ฝึกตามที่วิทยากรระบุ |
| Trigger | เหตุที่เริ่ม run หนึ่งครั้ง | กดปุ่ม หรือส่ง Form ใหม่ |
| Action | ขั้นตอนที่ flow ทำหลังเริ่ม | Send an email (V2), Add a row into a table |
| Connector | ช่องทางที่ Power Automate ใช้เรียกบริการ | Office 365 Outlook, Excel Online (Business) |
| Connection | การเชื่อมต่อด้วยบัญชีและสิทธิ์ของเรา | บัญชีที่อ่าน Form หรือเขียน workbook ได้ |
| Input | ค่าที่ส่งเข้ามาเมื่อเริ่มงาน | TaskTitle |
| Dynamic content | ค่าจาก trigger หรือ action ก่อนหน้า | คำตอบ Task title จาก Get response details |
| Run history | ประวัติการทำงานแต่ละครั้ง | เปิด run แล้วอ่าน Inputs และ Outputs |

Environment เหมือนห้องครัวที่เลือกใช้ Connector เหมือนช่องทางไปยังสถานีงาน และ Connection เหมือนบัตรประจำตัวที่บอกว่าเราเข้าถึงสถานีนั้นได้แค่ไหน วันนี้เลือกพื้นที่ที่จัดไว้ ไม่ต้องสร้าง environment ใหม่

## Cloud flow เริ่มได้สามแบบ

- **Instant cloud flow:** เริ่มเมื่อผู้ใช้กดปุ่ม เช่น Email flow แรก
- **Automated cloud flow:** เริ่มเมื่อเกิด event เช่น Forms response ใหม่
- **Scheduled cloud flow:** เริ่มตามเวลาที่กำหนด เช่น สรุปประจำวัน วันนี้รู้จักแนวคิดก่อน ไม่ต้องสร้าง flow เพิ่ม

## ข้อความธรรมดากับ Dynamic content

ถ้าพิมพ์ `TaskTitle` ใน Body ระบบจะส่งคำว่า TaskTitle ถ้าเลือก token `TaskTitle` ระบบจะส่งค่าที่กรอกตอน Run เหมือนช่องว่างในจดหมายที่ต้องใส่ข้อมูลจริงของแต่ละงาน

ค่าใช้ใน action ต้องมาจากขั้นตอนก่อนหน้าที่ให้ข้อมูลนั้นจริง เช่น `Response Id` มาจาก Forms trigger แต่คำตอบของแต่ละคำถามมาจาก `Get response details`

## ตรวจผลอย่างง่าย

หลัง test ให้ถามสองข้อ: **run ทำขั้นตอนที่คาดไว้หรือไม่?** และ **ข้อมูลที่ Inbox หรือ Excel ตรงกับ input หรือไม่?** ถ้าไม่ตรง เปิด action ดู Inputs/Outputs ก่อนแก้ไขหนึ่งจุดแล้วทดสอบใหม่

[เริ่ม Email flow](../exercises/01-foundation-email.md)

## เอกสารอ้างอิง

- [Cloud flow types](https://learn.microsoft.com/power-automate/overview-cloud)
- [Power Automate environments](https://learn.microsoft.com/power-automate/environments-overview)
- [Troubleshoot cloud flows](https://learn.microsoft.com/power-automate/guidance/coding-guidelines/troubleshoot-cloud-flows)
