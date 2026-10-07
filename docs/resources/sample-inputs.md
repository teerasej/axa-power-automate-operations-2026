# ข้อมูลทดสอบสมมติ

ใช้ข้อมูลนี้ใน Form ของ Exercise 2 ช่อง Requester email ให้กรอกอีเมลฝึกของตัวเอง ส่วนคำตอบอื่นใช้ตามด้านล่าง ไม่ใช่ข้อมูลคำขอจริงของบริษัท

## Sample A {#sample-a}

- **Task title**

  ```text
  เตรียมสรุปคำขอสำหรับประชุมทีม
  ```

- **Description**

  ```text
  รวบรวมรายการงานสมมติสามรายการเพื่อใช้ประชุมฝึก
  ```

- **Requester email:** อีเมลฝึกของตัวเอง
- **Category:** เลือกตัวเลือก

  ```text
  Operations
  ```

## Sample B {#sample-b}

- **Task title**

  ```text
  ตรวจตารางค่าใช้จ่ายตัวอย่าง
  ```

- **Description**

  ```text
  ตรวจชื่อรายการและสถานะในไฟล์สมมติสำหรับการฝึก
  ```

- **Requester email:** อีเมลฝึกของตัวเอง
- **Category:** เลือกตัวเลือก

  ```text
  Finance
  ```

## ผลที่คาด

ใน RequestsTable มีสองแถวใหม่ที่ไม่ใช่แถวว่างเริ่มต้น RequestId ต่างกัน Title และ Category ตรงกับ sample A/B Status เป็น Pending ทั้งสองแถว ตัวเลข RequestId จริงขึ้นกับจำนวน responses ที่ Form เคยรับ ไม่ต้องเป็น 1 และ 2

ถ้าทำ Optional Email extension ให้ส่ง response ใหม่อีกครั้ง โดยเปลี่ยน Task title เป็น:

```text
ทดสอบ Email ยืนยันคำขอ
```

ใช้ Description และ Category จาก Sample A ได้ ผลที่คาดคือเพิ่มหนึ่งแถวและได้หนึ่ง Email ยืนยัน
