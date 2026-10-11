---
title: คู่มือ ChatGPT แบบใช้ภาพ
prev:
  text: Forms → Excel
  link: /exercises/02-forms-to-excel
next:
  text: ฝึก review และซ่อม error
  link: /exercises/04-chatgpt-design-and-troubleshooting
---

# คู่มือ ChatGPT: ให้ดูภาพ ถามสั้น แล้วตรวจผล

เหมือนเอารูปแผนที่ให้เพื่อนดู เราไม่ต้องบรรยายทุกเส้นทาง แต่ยังต้องบอกว่าจะไปไหน ใช้ screenshot หรือ photo เป็น context บอก goal สั้น ๆ แล้วตรวจว่า ChatGPT อ่านถูกก่อนนำคำแนะนำไปใช้

## วิธีใช้ห้าขั้น

1. **เตรียมภาพ:** เลือก screenshot ของ synthetic flow หรือ photo ของภาพวาด ภาพต้องอ่านชื่อขั้นตอนและลูกศรได้ สำหรับ error ให้เห็น action, expression และข้อความ error
2. **ตรวจภาพก่อนส่ง:** ตัด private URLs, ชื่อบัญชี, email, identifiers, credentials และข้อมูลลูกค้าออก Photo ไม่รวมคน, badge หรือกระดานงานอื่น ใช้เฉพาะ context ที่องค์กรอนุญาต
3. **แนบภาพและถามสั้น:** บอก goal และสิ่งที่อยากให้ช่วย หาก upload ไม่ได้ คัดลอก text backup ด้านล่างแทน
4. **ตรวจว่าอ่านตรง:** เปรียบเทียบ action names, ลำดับ, field และ expression กับภาพ ถ้าอ่านผิดให้แก้ความเข้าใจ ถ้าอ่านไม่ชัดใช้ close-up หรือคัดลอกเฉพาะข้อความที่เกี่ยวข้อง
5. **ทดสอบข้อเสนอหนึ่งจุด:** เทียบกับ configuration จริง แล้วตรวจ run ใหม่และผลปลายทาง ไม่ถือว่าคำตอบ ChatGPT ยืนยัน tenant, permissions หรือการซ่อมสำเร็จ

## ถามจากภาพ design

ใช้กับภาพ Forms → Excel ใน Exercise 4:

```text
เป้าหมายคือรับคำขอผ่าน Forms แล้วบันทึกลง Excel
ช่วยอธิบายขั้นตอนจากภาพ แล้วเสนอจุดที่ควรตรวจหนึ่งจุดและวิธีทดสอบ
ถ้าอ่านไม่ชัดหรือข้อมูลไม่พอ ให้ถามก่อน อย่าเดา
```

ภาพวาดช่วย review ลำดับและการส่งข้อมูล ส่วน screenshot ที่เห็นแค่ชื่อ actions ยังไม่แสดง settings ต้องเปิด field mapping ก่อนยืนยันว่าค่าถูก ถ้ายังไม่ build/run ให้เรียกผลว่า design review

## ถามจากภาพ error

```text
Compose นี้ควรแปลงข้อความตัวเลขเป็น integer แต่เกิด error ตามภาพ
ช่วยอธิบายสาเหตุ เสนอการแก้ที่เล็กที่สุด และวิธีทดสอบ
ถ้าข้อมูลไม่พอ ให้ถามก่อน
```

ภาพลำดับ flow อย่างเดียวไม่พอ เปิด action ที่ failed และ expression ที่เกี่ยวข้อง ข้อความ error อาจต่างกันตาม UI; ตรวจจากของจริง ไม่คาดว่าตรงกับภาพประกอบทุกคำ

## ถ้าอ่านภาพผิดหรือไม่ชัด

```text
ช่วยบอกก่อนว่าอ่านชื่อ action, ลำดับและค่าจากภาพได้ว่าอะไร
แยกสิ่งที่เห็นชัดจากสิ่งที่ยังอ่านไม่ออก แล้วถามเฉพาะข้อมูลที่ขาด
```

แก้ความเข้าใจด้วยคำสั้น ๆ หรือส่ง close-up ที่ลบข้อมูลส่วนตัวแล้ว เช่นภาพ settings หนึ่ง action ไม่ส่งทั้งหน้าจอเพิ่มโดยไม่ตรวจ privacy

## Text backup: design {#text-backup-design}

ใช้เมื่อ upload ไม่ได้ คัดลอกทั้งก้อนนี้ได้เลย ไม่ต้องกรอก placeholders:

```text
นี่เป็น Power Automate flow ฝึกด้วยข้อมูลสมมติ ไม่ใช่ระบบงานจริง
เป้าหมาย: รับคำขอผ่าน Forms แล้วบันทึกหนึ่งแถวใน Excel
ลำดับ: When a new response is submitted → Get response details → Add a row into a table
Workbook อยู่ใน OneDrive for Business; Table คือ RequestsTable
RequestId = Response Id จาก trigger
Title, Description, RequesterEmail, Category = คำตอบจาก Get response details
Status = ข้อความ Pending
ช่วยอธิบายขั้นตอน เสนอจุดที่ควรตรวจหนึ่งจุดและวิธีทดสอบ
ถ้าข้อมูลไม่พอให้ถามก่อน อย่าเดา ไม่เพิ่ม connector หรือเปลี่ยนสิทธิ์
```

## Text backup: error {#text-backup-error}

ใช้ตัวอย่างนี้ได้แม้ไม่มีภาพจริง ข้อความนี้เป็น sample context ไม่ใช่รายงาน run ของเรา:

```text
นี่เป็น sample ของ Power Automate สำหรับฝึก ไม่ใช่หลักฐาน run จริง
Flow: Manually trigger a flow → Compose
Expression ตัวอย่าง: int('not-a-number')
ค่าที่พยายามแปลงคือ not-a-number ซึ่งไม่ใช่ข้อความตัวเลข
ผลที่ต้องการ: แปลงข้อความตัวเลขเป็น integer
constant expression อาจถูกปฏิเสธตั้งแต่ Save; อย่าเดาว่ามี failed run แล้ว
ช่วยอธิบายสาเหตุ เสนอการแก้ที่เล็กที่สุด และวิธีทดสอบกับข้อความตัวเลข
ถ้าข้อมูลไม่พอให้ถามก่อน ไม่เพิ่ม connector หรือเปลี่ยนสิทธิ์
```

ถ้ามี error ของตัวเอง ให้ส่ง expression และข้อความ error ที่ sanitise แล้วเพิ่มเฉพาะเมื่อจำเป็น [ดาวน์โหลด text backup](/downloads/chatgpt-text-backup.txt) เพื่อเก็บไว้คัดลอก

## ถ้าเข้า ChatGPT ไม่ได้

ใช้ [ตัวอย่างประกอบ](./saved-examples.md) เพื่อฝึกตัดสินใจร่วมกับเพื่อน ระบุว่าเป็น authored example review ไม่ใช่การใช้ ChatGPT สด สามารถ build/test Power Automate ต่อได้หากบัญชีพร้อม

## ตรวจคำตอบก่อนทำตาม

| สิ่งที่ ChatGPT บอก | สิ่งที่เราตรวจ |
|---|---|
| ลำดับและชื่อ action | เทียบกับภาพ; แก้การอ่านผิดก่อน |
| Mapping ถูกแล้ว | ภาพเห็น fields และ source tokens จริงหรือยัง |
| เสนอ test | มี input, expected result และจุดตรวจหรือไม่ |
| ซ่อมสำเร็จแล้ว | ต้องมี run ใหม่และ output จริงก่อน |
| ต้องเพิ่มบริการหรือเปิดสิทธิ์ | ไม่ทำทันที; ตรวจ scope และถามผู้จัด |

ChatGPT ช่วยเสนอแนวทาง ไม่เห็น configuration ที่อยู่นอกภาพหรือสิทธิ์ของบัญชีเรา ใช้ Standard connectors และขอบเขตเดิม ภาพตัวอย่างที่แจกเป็นภาพสร้างเพื่อการสอน ไม่ใช่ screenshot จริงหรือหลักฐาน tenant readiness

[ฝึกใน Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md) · [ดาวน์โหลดภาพฝึก](../resources/downloads.md)

อ้างอิง: [OpenAI — Image inputs](https://learn.chatgpt.com/docs/image-inputs)
