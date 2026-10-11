---
title: "Exercise 4 · ให้ ChatGPT ดูภาพ flow และช่วยตรวจ error"
prev:
  text: คู่มือ ChatGPT
  link: /guidebook/
next:
  text: ตัวอย่างประกอบ
  link: /guidebook/saved-examples
---

# Exercise 4: ให้ ChatGPT ดูภาพ flow และช่วยตรวจข้อผิดพลาด

ลองให้เพื่อนดูรูปแผนที่ก่อนอธิบายทาง จะคุยกันได้ง่ายขึ้น กิจกรรมนี้ใช้ภาพแทนการพิมพ์รายละเอียด flow ยาว ๆ แล้วถามสั้น ๆ เราจะตรวจว่า ChatGPT อ่านภาพตรงกับที่เราทำ และทดสอบคำแนะนำด้วยตัวเอง

> **License และ access:** ใช้บัญชี Power Automate ที่มีสิทธิ์สร้างและ run cloud flow; Error practice ใช้ Built-in actions ไม่ใช้ Premium connector ส่วน ChatGPT ต้องเป็นบัญชีที่องค์กรอนุญาต ผู้จัดต้องตรวจสิทธิ์ใช้และ image upload ก่อนเริ่มอบรม ไม่กำหนด paid plan หรือ model เฉพาะ หาก upload ไม่ได้ ใช้ text backup; หากเข้า ChatGPT ไม่ได้ ใช้ [ตัวอย่างประกอบ](../guidebook/saved-examples.md) และระบุว่าไม่ได้ฝึก ChatGPT สด

## ก่อนเริ่ม

- เปิด Power Automate และ [ChatGPT](https://chatgpt.com) ด้วยบัญชีที่ได้รับอนุญาต
- ใช้ flow สมมติจาก Exercise 2 หรือวาดลำดับ Forms → Excel ตามที่ฝึก ไม่ใช้ flow งานจริงที่มีข้อมูลส่วนตัว
- ดาวน์โหลด [ภาพและ text backup](../resources/downloads.md) ไว้ก่อน ส่วนซ่อม error ใช้ flow แยกจาก tracker
- อ่าน [วิธีเตรียมภาพและตรวจคำตอบ](../guidebook/index.md)

## เลือกเส้นทางที่สะดวก

| ถ้าพร้อมแบบนี้ | ทำแบบนี้ |
|---|---|
| มี flow ฝึกหรือภาพวาดของตัวเอง | ใช้ screenshot หรือ photo ที่ลบข้อมูลส่วนตัวแล้ว |
| ยังไม่มีภาพที่อ่านชัด | ใช้ภาพตัวอย่างที่เตรียมให้ |
| เข้า ChatGPT ได้ แต่ upload ภาพไม่ได้ | คัดลอก text backup ทั้งก้อน ไม่ต้องเขียน description ใหม่ |
| เข้า ChatGPT ไม่ได้ | อ่านตัวอย่างประกอบกับเพื่อน แล้วทำ Power Automate test เท่าที่บัญชีพร้อม |

**ภาพตัวอย่างทั้งสองเป็นภาพสร้างเพื่อการสอน ไม่ใช่ screenshot จริงของ Power Automate และไม่ใช่หลักฐานการ run** ตำแหน่ง UI และข้อความ error จริงอาจต่างจากภาพ

## Practice 1: ให้ ChatGPT อ่านภาพเพื่อทบทวน design

**เป้าหมาย:** ตรวจคำแนะนำหนึ่งข้อจากการ review ภาพ Forms → Excel ให้สัมพันธ์กับ goal และมีวิธีทดสอบ

1. เตรียมภาพด้วยวิธีใดวิธีหนึ่ง:
   - **Screenshot ของตัวเอง:** เปิด flow ฝึกจาก Exercise 2 ให้เห็นสาม actions ตามลำดับ ถ้าต้องการตรวจ mapping ให้เปิด settings ของ `Get response details` และ `Add a row into a table` ถ้ารวมในภาพเดียวแล้วตัวหนังสือเล็ก ให้แยกภาพลำดับกับภาพ mapping
   - **Photo ของภาพวาด:** วาด Forms รับคำขอ → ดึงคำตอบ → บันทึก Excel ใส่ลูกศรและชื่อ fields ที่ส่งต่อ เช่น `Task title` → `Title` ถ่ายตรง ๆ ในที่สว่าง ตัดขอบโต๊ะและสิ่งอื่นออก
   - **ภาพที่เตรียมให้:** ดาวน์โหลด [forms-to-excel-training.png](/downloads/forms-to-excel-training.png) แล้วใช้ไฟล์นี้ได้เลย

   ![ภาพสร้างเพื่อการสอน แสดงสาม actions และ mapping ของ Forms ไป RequestsTable ไม่ใช่ screenshot จริง](/downloads/forms-to-excel-training.png)

   [เปิดภาพตัวอย่างขนาดเต็ม](/downloads/forms-to-excel-training.png) เพื่ออ่านข้อความ ไม่ต้องพยายามอ่านภาพที่ถูกย่อบนมือถือ

2. ตรวจภาพก่อนส่ง: ตัด URL, ชื่อบัญชี, email, connection identifiers, ข้อมูลลูกค้าและ secrets ออก Photo ต้องไม่มีคน, badge หรือกระดานงานอื่น ตรวจไฟล์ที่เตรียมส่งอีกครั้ง
3. เปิด chat ใหม่ แนบภาพด้วย **Attach**, paste หรือ drag image ตาม UI ที่มี แล้วส่งคำถามสั้นนี้:

   ```text
   เป้าหมายคือรับคำขอผ่าน Forms แล้วบันทึกลง Excel
   ช่วยอธิบายขั้นตอนจากภาพ แล้วเสนอจุดที่ควรตรวจหนึ่งจุดและวิธีทดสอบ
   ถ้าอ่านไม่ชัดหรือข้อมูลไม่พอ ให้ถามก่อน อย่าเดา
   ```

   ถ้า upload ไม่ได้ ให้ใช้ [text backup สำหรับ design](../guidebook/index.md#text-backup-design) แทนขั้นนี้

4. **ตรวจว่าอ่านตรงก่อนใช้คำแนะนำ:** คำตอบควรเห็น `When a new response is submitted` → `Get response details` → `Add a row into a table` และแยก `Response Id` จาก trigger กับคำตอบจาก `Get response details` ถ้าภาพไม่แสดง mapping ก็ยังยืนยัน mapping ไม่ได้ หากอ่านผิดให้แก้ความเข้าใจ; หากอ่านไม่ชัดส่งภาพ close-up หรือใช้ text backup ไม่ให้เดาต่อ
5. เลือกข้อเสนอหนึ่งข้อ เทียบกับ action/field ของเรา ไม่เพิ่ม connector หรือเปลี่ยนสิทธิ์ตามคำตอบทันที หากใช้ภาพวาด ให้ตรวจ business sequence ก่อน; ภาพวาดยังไม่ยืนยัน settings หรือว่า flow ทำงานแล้ว
6. ถ้ามี flow ฝึกที่พร้อม ให้ตรวจ mapping หรือส่ง sample ใหม่หนึ่งรายการตามข้อเสนอ แล้วเทียบ Run history กับแถว Excel ถ้ายังมีเพียงภาพตัวอย่าง/ภาพวาด ให้บอกว่าเป็น design review และการวางแผน test ยังไม่ใช่ verified run

### Quick check

อธิบายได้ว่า ChatGPT อ่านภาพตรงหรือผิดตรงไหน และเลือกหนึ่งข้อเสนอพร้อมจุดที่ใช้ตรวจผล ไม่ถือว่าคำตอบใน chat เป็นผลทดสอบ flow

## Practice 2: เตรียมหลักฐานของ conversion error

**เป้าหมาย:** เปิดดู error ของ `Compose` ใน flow ฝึกที่แยกไว้ และเตรียมภาพเฉพาะส่วนที่ช่วยอธิบายสาเหตุ

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

4. เลือก **Add** หรือ **Update** ตรวจว่าเป็น expression token ไม่ใช่ literal text แล้ว Save ค่า `not-a-number` ไม่ใช่ข้อความตัวเลข จึงใช้ `int()` แปลงไม่ได้
5. **หาก Save แจ้ง `InvalidTemplate`:** constant expression อาจถูกตรวจตั้งแต่ Save จึงยังไม่มี failed run ให้ดู ใช้ runtime fallback ต่อไปนี้เพื่อฝึก Run history:
   - แทรก Built-in `Compose` อีกตัวระหว่าง trigger กับ `Compose` เดิม ตั้งชื่อ action ผ่านคำสั่ง **Rename** ของ action ให้เป็น:

     ```text
     SampleText
     ```

   - ใน **Inputs** ของ `SampleText` ใส่เป็นข้อความธรรมดา ไม่ใช่ Expression:

     ```text
     not-a-number
     ```

   - เปิด **Expression** ของ `Compose` ตัวเดิม เปลี่ยนเป็น:

     ```text
     int(outputs('SampleText'))
     ```

   - ตรวจลำดับ `Manually trigger a flow` → `SampleText` → `Compose` แล้ว Save ไม่เปลี่ยน connections หรือ permissions เพื่อข้าม error
6. Test แบบ **Manually** แล้ว Run flow เปิด run ที่ `Failed` เลือก `Compose` อ่าน error และ input/expression ที่เกี่ยวข้อง หาก `Compose` กลับเป็น `Succeeded` ให้ตรวจว่ากรอกเป็น literal text หรือไม่
7. Capture ภาพ close-up ของ expression ที่ใช้ และ error จาก action โดยลบ private identifiers ก่อนส่ง ภาพลำดับ flow อย่างเดียวไม่บอกว่า action ล้มเหลวเพราะอะไร ถ้าใช้ runtime fallback ให้เห็นค่าจาก `SampleText` ด้วย

### Quick check

ชี้ expression, ค่าที่แปลงไม่ได้และ error ของ run จริงได้ หากยัง run ไม่ได้ ให้ใช้ sample ใน Practice 3 และระบุว่ากำลังวิเคราะห์ตัวอย่าง ยังไม่ผ่าน failed-run checkpoint

## Practice 3: ให้ ChatGPT ดู error แล้วพิสูจน์การซ่อม

**เป้าหมาย:** ตรวจการซ่อม conversion error ด้วย run ใหม่ที่ได้ integer `25`

1. ใช้ภาพที่เตรียมใน Practice 2 หากไม่มีภาพจริง ให้ดาวน์โหลด [compose-error-training.png](/downloads/compose-error-training.png) ภาพนี้ใช้ expression แบบ constant เพื่ออธิบายสาเหตุ และไม่ได้แสดง run จริง บน UI ที่ตรวจ constant ตั้งแต่ Save ให้ใช้ runtime fallback ใน Practice 2 เพื่อสร้างหลักฐานจริง

   ![ภาพสร้างเพื่อการสอน แสดง Compose และตัวอย่าง conversion error จาก int('not-a-number') ไม่ใช่หลักฐาน run จริง](/downloads/compose-error-training.png)

   [เปิดภาพ error ขนาดเต็ม](/downloads/compose-error-training.png)

2. แนบภาพใน ChatGPT แล้วส่ง:

   ```text
   Compose นี้ควรแปลงข้อความตัวเลขเป็น integer แต่เกิด error ตามภาพ
   ช่วยอธิบายสาเหตุ เสนอการแก้ที่เล็กที่สุด และวิธีทดสอบ
   ถ้าข้อมูลไม่พอ ให้ถามก่อน
   ```

   ถ้าใช้ภาพตัวอย่าง ให้บอกเพิ่มว่าเป็นภาพประกอบสำหรับฝึก หาก upload ไม่ได้ ใช้ [text backup สำหรับ error](../guidebook/index.md#text-backup-error) หากภาพของจริงอ่านไม่ชัด คัดลอกเฉพาะ expression และ error text ที่ sanitise แล้ว ไม่ส่ง raw run URL หรือ JSON ทั้งหมด
3. ตรวจว่า ChatGPT อ่านชื่อ action และ expression ตรงกับภาพ แยกสิ่งที่เห็นจริงจากการคาดเดา ถ้าคำตอบเสนอ connectors เพิ่มหรือเปลี่ยนสิทธิ์ ให้กลับมาขอแก้เฉพาะการแปลงข้อความตัวเลขใน sample นี้
4. เปรียบเทียบคำแนะนำกับสาเหตุ แล้ว Edit `Compose` ตัวที่แปลงค่า เปิด **Expression** เปลี่ยนเป็น:

   ```text
   int('25')
   ```

   ใช้ expression นี้ได้ทั้งเส้นทางเดิมและ runtime fallback การเปลี่ยนนี้ทำให้ sample ใช้ค่าตัวเลขคงที่ ไม่ใช่การ validate ข้อมูลทุกแบบ
5. เลือก **Add/Update** แล้ว Save และ Test ใหม่ เปิด run ใหม่ ตรวจ `Compose` เป็น `Succeeded` และ **Outputs** เป็น integer `25` เปรียบเทียบกับ failed run แรก ไม่แก้เฉพาะข้อความใน chat
6. หากดูเฉพาะภาพตัวอย่างหรือบัญชี run ไม่ได้ ให้สรุป cause, proposed fix และ test ที่จะทำ ไม่กล่าวว่าซ่อมสำเร็จแล้ว หากเข้า ChatGPT ไม่ได้ ใช้ [ตัวอย่างประกอบ](../guidebook/saved-examples.md) และยังทดสอบใน Power Automate ได้เมื่อบัญชีพร้อม

### Quick check

มี run ก่อนแก้ที่ Failed และ run หลังแก้ที่ `Compose` ส่ง integer `25` พร้อมอธิบายการเปลี่ยนได้ ภาพตัวอย่างหรือคำตอบ ChatGPT ใช้แทนสอง runs นี้ไม่ได้

## ปิดกิจกรรม

เล่าให้เพื่อนฟังสามเรื่อง: ChatGPT อ่านภาพตรงไหม, ข้อเสนอไหนที่เลือก และหลักฐานไหนยืนยันผล ใช้ภาพ + คำถามสั้น + การตรวจผลกับงานที่ได้รับอนุญาตต่อได้เอง

อ้างอิง: [OpenAI — Image inputs](https://learn.chatgpt.com/docs/image-inputs), [Workflow expression functions — int](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference#int), [Cloud flow error reference](https://learn.microsoft.com/power-automate/error-reference), [Troubleshoot a cloud flow](https://learn.microsoft.com/power-automate/fix-flow-failures)
