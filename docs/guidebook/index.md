---
title: คู่มือ ChatGPT สำหรับ Power Automate
prev:
  text: Forms → Excel
  link: /exercises/02-forms-to-excel
next:
  text: ฝึก review และซ่อม error
  link: /exercises/04-chatgpt-design-and-troubleshooting
---

# คู่มือ ChatGPT: ช่วยคิด ช่วยถาม แล้วเราตรวจผล

ChatGPT ช่วยเรียบเรียง goal, เสนอ flow sequence และชี้จุดตรวจได้ แต่ไม่เห็น environment, connections หรือ Run history ของเราจากคำอธิบายเพียงอย่างเดียว คิดเหมือนถามเพื่อนทางโทรศัพท์: บอกอาการและสิ่งที่ลองแล้วให้ชัด เพื่อนจึงช่วยได้ตรงจุด

## วิธีใช้ห้าขั้น

1. **บอก goal:** งานเริ่มเมื่อไร ใครใช้ผล และผลที่ถูกต้องคืออะไร
2. **ให้ context:** ระบุ apps, action names, input/output ตัวอย่าง และข้อจำกัด ใช้ข้อมูลสมมติหรือ sanitise แล้ว
3. **ขอข้อเสนอเล็ก ๆ:** ขอคำถามที่ขาด, หนึ่ง next step และวิธี test แทนการขอให้แก้ทุกอย่างพร้อมกัน
4. **ตรวจคำตอบ:** เทียบ action names, field mapping และสิทธิ์กับของจริง แยก recommendation ออกจากสิ่งที่มีหลักฐาน
5. **ทดสอบ:** เปลี่ยนทีละจุด เปิด run ใหม่ ตรวจ Inputs/Outputs และผลปลายทาง

## Prompt สำหรับออกแบบ flow จาก goal

เปลี่ยนส่วนในวงเล็บให้เป็นข้อมูลสมมติหรือข้อมูลที่องค์กรอนุญาต ไม่ส่ง prompt ทั้งที่ยังมี placeholder

```text
ช่วยวางแผน Power Automate cloud flow เป็นภาษาไทย เก็บชื่อ product, action และ UI label เป็น English
Goal: [งานที่ต้องการทำให้เสร็จ]
เริ่มเมื่อ: [ผู้ใช้กดปุ่ม / event / เวลา]
Input ตัวอย่าง: [ข้อมูลสมมติ]
ผลที่คาด: [ผลที่ตรวจได้]
Apps และ connectors ที่อนุญาต: [รายการที่ยืนยันแล้ว]
คนที่ต้องตรวจหรือตัดสินใจ: [role ไม่ใช้ชื่อจริง]
ข้อจำกัด: [เช่นไม่มี Premium connectors, ห้ามส่งออกนอกบัญชีฝึก]

ถามข้อมูลที่จำเป็นแต่ยังขาดก่อน จากนั้นเสนอ flow sequence แบบสั้น
แยก Trigger, Actions และ Dynamic content ที่ส่งระหว่างขั้น
เสนอ normal case และ exception case พร้อม expected result และจุดตรวจ
ระบุสิ่งที่ต้องตรวจใน environment ไม่เดาสิทธิ์หรือความพร้อม และไม่เปลี่ยน flow อัตโนมัติ
```

## Prompt เมื่อ action เกิด error

เปิด Run history อ่าน action ที่ Failed ก่อน กรอกเฉพาะส่วนที่เกี่ยวข้อง ไม่มี access token, connection identifiers, tenant URL, อีเมลจริงหรือข้อมูลลูกค้า

```text
ช่วยวิเคราะห์ error ของ Power Automate เป็นภาษาไทย
Flow goal: [goal]
ลำดับก่อนถึง error: [Trigger → Action → Action]
Action ที่ Failed: [ชื่อ action]
Input หรือ expression ที่เกี่ยวข้อง: [ข้อมูลสมมติ / sanitised]
Error text ที่เกี่ยวข้อง: [ข้อความที่ลบข้อมูลส่วนตัวแล้ว]
Expected result: [ผลที่ควรได้]
Actual result: [ผลที่เห็น]
ลองแก้อะไรแล้ว: [สิ่งที่ลองและผล]

ขอ likely causes เรียงจากที่ควรตรวจง่ายก่อน แยกข้อสันนิษฐานจากหลักฐาน
เสนอการแก้หนึ่งจุดพร้อมเหตุผลและวิธีทดสอบใหม่
ถ้าข้อมูลไม่พอให้ถาม ไม่เดา field names, permissions หรือข้อมูลที่ไม่ได้ให้
ไม่แนะนำให้เปิดสิทธิ์สาธารณะหรือใช้ Premium connector เพื่อข้ามปัญหา
ไม่สรุปว่าแก้สำเร็จจนกว่าจะตรวจ run และ output ใหม่จริง
```

## Prompt เมื่อ run สำเร็จแต่ผลผิด

```text
Power Automate run นี้ Succeeded แต่ผลไม่ตรง goal ช่วยวางขั้นตอนตรวจเป็นภาษาไทย
Expected result: [ผลที่คาด]
Actual result: [ผลจริงที่ sanitise แล้ว]
Trigger input: [ตัวอย่างสมมติ]
Action sequence: [ชื่อ actions]
Field mapping ที่เกี่ยวข้อง: [token มาจากขั้นไหน ไปอยู่ช่องไหน]

เสนอจุดเปรียบเทียบ Inputs/Outputs ทีละขั้น ไม่ถือว่า Succeeded ยืนยันความถูกต้อง
เลือกหนึ่งจุดที่ควรตรวจเป็นอันดับแรกและบอกผลที่จะแยกสาเหตุได้
```

## คำถามต่อเมื่อคำตอบยังไม่ชัด

```text
ในคำแนะนำเมื่อกี้ ข้อไหนอ้างอิงจากข้อมูลที่ฉันให้ และข้อไหนเป็นสมมติฐาน?
เลือกการเปลี่ยนแปลงที่เล็กที่สุดหนึ่งจุด ระบุ action, field และผลที่คาดหลังทดสอบ
ถ้า UI หรือ action name ที่เสนอไม่ตรงกับที่ฉันเห็น ให้ถามก่อนเสนอขั้นต่อไป
```

## ตรวจคำตอบก่อนนำไปใช้

| สิ่งที่เห็นในคำตอบ | วิธีตัดสินใจ |
|---|---|
| อธิบายการส่งค่าได้ตรงกับ flow | เทียบชื่อ source action และ field ใน designer |
| เสนอ test case | ตรวจว่ามี input, expected result และจุดดูหลักฐาน |
| เดา action, column หรือสิทธิ์ | ขอให้ถามข้อมูลที่ขาด และตรวจเอกสาร/ผู้จัด |
| บอกว่าแก้แล้วโดยยังไม่มี run ใหม่ | ถือเป็นข้อเสนอ ยังไม่ใช่ verified result |
| เสนอ flow ใหญ่หรือบริการเพิ่ม | ขอให้จำกัดกับ apps และ scope ที่อนุญาต |

อย่าส่ง private context เพื่อให้ prompt ดูละเอียดขึ้น ใช้ synthetic version ที่ยังคงสาเหตุของปัญหา หาก error เกี่ยวกับสิทธิ์หรือ policy ให้ขอผู้ดูแลช่วย ไม่ใช้ ChatGPT เป็นผู้ยืนยันสิทธิ์

[ฝึกใช้คู่มือใน Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md) · [ตัวอย่างประกอบเมื่อเข้า ChatGPT ไม่ได้](./saved-examples.md)

แนวทาง prompt นี้ประยุกต์จาก [OpenAI: Prompting](https://learn.chatgpt.com/docs/prompting) ให้ตรงกับการฝึก Power Automate โดยเน้น goal, context, output และการตรวจผล
