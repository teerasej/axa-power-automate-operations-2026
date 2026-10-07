---
title: "Exercise 4 · ChatGPT ช่วยคิดและตรวจ error"
prev:
  text: คู่มือ ChatGPT
  link: /guidebook/
next:
  text: ตัวอย่างประกอบ
  link: /guidebook/saved-examples
---

# Exercise 4: ใช้ ChatGPT ช่วยออกแบบและตรวจข้อผิดพลาด

เราจะใช้ ChatGPT เหมือนเพื่อนร่วมงานที่ช่วยตั้งคำถามและเสนอทางเลือก แต่เรายังเป็นคนตรวจว่าแนวทางนั้นใช้กับ flow ของเราได้จริง ฝึกสองงาน: ทบทวน design และซ่อม action ที่ผิดแบบตั้งใจ

> **License:** Error practice ใช้ Built-in actions ของ Power Automate ไม่ใช้ Premium connector ต้องมีสิทธิ์สร้างและ run cloud flow ส่วน ChatGPT ใช้บัญชีที่องค์กรอนุญาต ไม่ต้องเลือก paid plan หรือ model ตามบทนี้ หากเข้าไม่ได้ ให้ใช้ [ตัวอย่างประกอบ](../guidebook/saved-examples.md) ซึ่งเป็นข้อความที่เตรียมไว้ ไม่ใช่ผลการใช้ ChatGPT จริงของผู้เรียน

## ก่อนเริ่ม

- เปิด Power Automate และ [ChatGPT](https://chatgpt.com) ด้วยบัญชีที่ได้รับอนุญาต
- อ่าน [วิธีให้ context และตรวจคำตอบ](../guidebook/index.md)
- ใช้ synthetic flow description เท่านั้น ไม่ส่ง mailbox จริง, tenant URLs, customer data, credentials หรือ screenshots ที่ยังไม่ลบข้อมูลส่วนตัว
- ส่วนซ่อม error สร้าง flow แยก ไม่แก้ tracker หรือ flow หลัก

## Practice 1: ขอ review ที่ตรงกับ flow

**เป้าหมาย:** ให้ ChatGPT ทบทวน data flow และเสนอ test cases ที่ตรวจผลได้

1. เปิด chat ใหม่ ใช้ description ของ flow ฝึก Forms → Excel หากยังสร้างไม่สำเร็จก็ใช้ description นี้ได้:

   ```text
   ช่วย review Power Automate flow ฝึกนี้เป็นภาษาไทย โดยเก็บชื่อ action และ UI label เป็น English

   เป้าหมาย: รับคำขอสมมติหนึ่งรายการจาก Microsoft Forms แล้วบันทึกหนึ่งแถวใน Excel Table
   ลำดับ: When a new response is submitted → Get response details → Add a row into a table
   Workbook อยู่ใน OneDrive for Business; Table ชื่อ RequestsTable
   Form questions: Task title, Description, Requester email, Category
   Excel mapping:
   RequestId = Response Id จาก trigger
   Title, Description, RequesterEmail, Category = คำตอบจาก Get response details
   Status = ข้อความ Pending

   ขอให้:
   1. อธิบายว่าค่าผ่านแต่ละขั้นอย่างไร
   2. ชี้หนึ่งจุดที่ควรตรวจเพื่อป้องกันการ map ผิด
   3. เสนอ test cases สองกรณีพร้อมผลที่คาดและจุดที่ดูหลักฐาน
   4. ถ้าข้อมูลไม่พอให้ถามก่อน อย่าเดา environment หรือสิทธิ์

   ขอบเขต: ใช้ synthetic data และ Standard connectors เท่านั้น ไม่เพิ่ม AI action, Premium connector หรือ production deployment ไม่เปลี่ยน flow อัตโนมัติ
   ```

2. อ่านคำตอบ เลือกข้อเสนอหนึ่งข้อ เช่นตรวจแหล่ง token หรือส่งสอง response ต่าง Category แล้วบอกเพื่อนว่าทำไมข้อเสนอนั้นสัมพันธ์กับ goal
3. ตรวจ action name และ token กับ designer ของเรา ถ้าคำตอบเสนอขั้นตอนที่ไม่มีใน flow หรือบริการที่ไม่ได้รับอนุญาต ให้ถามให้ปรับก่อน ไม่ทำตามทันที
4. ถ้ามี flow จาก Exercise 2 ให้ตรวจ mapping หรือทดสอบด้วย sample ตามข้อเสนอหนึ่งข้อ แล้วเทียบ Run history และ Excel หาก flow ยังไม่พร้อม ให้ระบุว่ากำลัง review design ยังไม่ได้พิสูจน์การทำงานจริง

### Quick check

อธิบายได้หนึ่งข้อเสนอที่ยอมรับหรือควรปรับ พร้อมจุดที่ใช้ตรวจหลักฐาน ไม่ถือว่าคำตอบจาก ChatGPT เป็นผลทดสอบ flow

## Practice 2: สร้าง sample action ที่ล้มเหลว

**เป้าหมาย:** ทำให้ Compose เกิด conversion error แบบควบคุม เพื่อฝึกอ่านหลักฐาน

1. Power Automate → **Create** → **Instant cloud flow** ตั้งชื่อ:

   ```text
   B2-ErrorPractice
   ```

2. เลือก **Manually trigger a flow** → **Create** เพิ่ม Built-in **Data Operation** action:

   ```text
   Compose
   ```

3. ใน **Inputs** เปิด **Expression** หรือ `/` → **Insert expression** ใส่:

   ```text
   int('not-a-number')
   ```

4. เลือก **Add** หรือ **Update** ตรวจว่าแสดง expression token ไม่ใช่ literal text ถ้ากรอกเป็น text ธรรมดา Compose จะส่งข้อความออกมาและไม่เกิด error ที่เราต้องการ
5. Save และ Test แบบ Manually แล้ว Run flow หนึ่งครั้ง เปิด run ที่ Failed เลือก Compose แล้วอ่าน error text ของ action
6. จดเฉพาะ action name, expression และข้อความที่เกี่ยวกับ conversion ลบ private identifiers ก่อนใช้เป็น context ไม่ต้องคัดลอก raw run URL หรือ JSON ทั้งหมด

### Quick check

ระบุได้ว่า Compose ล้มเหลวเมื่อแปลงข้อความที่ไม่ใช่ตัวเลขเป็น integer พร้อมชี้ expression และ error ของ run จริง

## Practice 3: ขอแนวทางซ่อมแล้วพิสูจน์ใหม่

**เป้าหมาย:** แก้ expression ตามสาเหตุและตรวจ output หลังแก้จริง

1. ส่ง prompt นี้ใน ChatGPT โดยเพิ่ม error text ที่ sanitise แล้วของตัวเองหลัง prompt ได้:

   ```text
   ช่วยวิเคราะห์ sample error ของ Power Automate เป็นภาษาไทย
   Flow: Manually trigger a flow → Compose
   Compose Inputs ใช้ Expression int('not-a-number')
   ผลที่คาด: แปลงข้อความตัวเลขเป็น integer
   ผลจริง: Compose Failed เพราะ input ไม่สามารถแปลงเป็น integer
   นี่เป็น controlled sample ใช้ข้อมูลสมมติ ไม่ใช่ flow ทำงานจริงขององค์กร

   ขอ likely cause, การแก้ที่เล็กที่สุด และวิธีทดสอบก่อน/หลังแก้
   ในตัวอย่างหลังแก้ ขอใช้ข้อความ '25' และผลที่คาดเป็น integer 25
   แยกสิ่งที่ทราบจาก description กับสิ่งที่ยังต้องดูใน Run history
   อย่าเพิ่ม connector, เปลี่ยนสิทธิ์ หรือบอกว่าซ่อมสำเร็จจนกว่าจะมีผล run จริง
   ```

2. ตรวจคำแนะนำกับ expression และ error เดิม ถ้าแนะนำให้เปลี่ยน input เป็นตัวเลข ให้ Edit Compose → Expression แล้วเปลี่ยนเป็น:

   ```text
   int('25')
   ```

3. เลือก **Add/Update** ตาม UI แล้ว Save และ Test ใหม่ อย่าแก้เฉพาะข้อความใน chat
4. เปิด run ใหม่ ตรวจว่า Compose เป็น Succeeded และ Outputs เป็นค่าจำนวนเต็ม 25 เปรียบเทียบกับ run แรกที่ Failed
5. อธิบายว่าจุดไหนเปลี่ยนและทำไม input ใหม่นี้แปลงได้ การรับข้อความอื่นในงานจริงยังต้องออกแบบ validation เพิ่ม ไม่สรุปว่าการเปลี่ยน sample นี้แก้ข้อมูลทุกแบบได้

### Quick check

มี run ก่อนแก้ที่ Failed และ run หลังแก้ที่ Compose ส่ง integer 25 พร้อมอธิบายสาเหตุและการแก้ได้

## ปิดกิจกรรม

เล่าให้เพื่อนฟังสามเรื่อง: goal ของ flow, ค่าที่ส่งระหว่าง actions และหลักฐานที่ใช้ยืนยันผล หลังวันนี้สามารถใช้คู่มือถาม ChatGPT ต่อด้วย context ของงานที่ได้รับอนุญาตได้เอง ตรวจข้อเสนอและผลการทำงานทุกครั้ง

อ้างอิง: [Workflow expression functions — int](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference#int), [Troubleshoot cloud flows](https://learn.microsoft.com/power-automate/guidance/coding-guidelines/troubleshoot-cloud-flows)
