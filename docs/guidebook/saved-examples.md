# ตัวอย่างประกอบเมื่อเปิด ChatGPT ไม่ได้

ข้อความด้านล่าง **ผู้เขียนเตรียมเพื่อการสอน** ไม่ใช่ transcript จาก ChatGPT ไม่ใช่ tenant test result และไม่ใช่หลักฐานว่าผู้เรียนได้ใช้ ChatGPT จริง ใช้ร่วมกับ [ภาพฝึกหรือ text backup](../resources/downloads.md) ได้

## ตัวอย่าง: อ่านภาพ design แล้ว review

> ในภาพตัวอย่างเห็น When a new response is submitted → Get response details → Add a row into a table ภาพระบุว่า RequestId ใช้ Response Id จาก trigger ส่วน Title และคำตอบอื่นมาจาก Get response details; Status เป็น Pending
>
> จุดที่ควรตรวจหนึ่งจุดคือ Title: เลือก token Task title จาก Get response details จริงหรือพิมพ์คำว่า Task title เป็นข้อความ? ลองส่งคำขอสมมติหนึ่งรายการที่มี Title จำง่าย ตรวจ action Inputs และ Title ใน Excel ว่าตรงกัน
>
> ภาพนี้ช่วยอธิบาย design แต่ยังไม่ยืนยันว่า configuration ในบัญชีของผู้เรียนตรงกับภาพ หรือว่า flow run สำเร็จแล้ว

**ลองตรวจ:** อ่านภาพตรงไหม? ข้อเสนอไหนตรวจได้จากภาพ และข้อไหนต้องเปิด designer/run/Excel จริง? หากมีแค่ภาพวาด เรายืนยัน token source แล้วได้หรือยัง?

## ตัวอย่าง: รูปไม่ชัด จึงต้องถาม

> เห็นว่ามี Forms และ Excel แต่ตัวหนังสือใน mapping อ่านไม่ชัด จึงยังยืนยัน Title ไม่ได้ ขอภาพ close-up เฉพาะ fields ของ Add a row into a table ที่ลบข้อมูลส่วนตัวแล้ว หรือคัดลอกชื่อ field กับ source token ที่เกี่ยวข้อง

**ลองตรวจ:** คำตอบนี้ขอข้อมูลเพิ่มตรงจุด ไม่เดาค่าที่อ่านไม่ออก ถ้า ChatGPT บอกชื่อ column ที่ไม่มีในภาพ เราต้องแก้ความเข้าใจก่อนเลือกการซ่อม

## ตัวอย่าง: วิเคราะห์ภาพ conversion error

> ภาพประกอบแสดง Compose และ Expression int('not-a-number') ค่านี้ไม่ใช่ข้อความตัวเลขจึงแปลงเป็น integer ไม่ได้ ข้อความในภาพเป็น error summary เพื่อการสอน ไม่ใช่ error จาก run จริง
>
> Constant expression อาจถูกปฏิเสธตอน Save ด้วย InvalidTemplate ถ้าต้องฝึก failed-run inspection ให้ใช้ runtime fallback ของ Exercise 4: SampleText ส่งข้อความ not-a-number ไป Compose ที่ใช้ int(outputs('SampleText'))
>
> สำหรับ sample repair เปลี่ยน Compose ที่แปลงค่าเป็น int('25') แล้ว Save และ Run ใหม่ ตรวจ Outputs เป็น integer 25 เปรียบเทียบกับ failed run ก่อนแก้ ผลนี้พิสูจน์เฉพาะ sample ที่ทดสอบ ไม่ใช่การ validate ข้อมูลทุกแบบ

**ลองตรวจ:** ถ้ายังไม่มี run ต้องเรียกผลว่าอะไร? ภาพประกอบยืนยันการซ่อมได้หรือไม่? ทำไมการเปลี่ยนข้อความใน chat ไม่ได้แก้ Power Automate flow?

## คำแนะนำที่ยังไม่ควรยอมรับ

> “ภาพบอกว่าทำงานได้แล้ว ไม่ต้อง test”
>
> “เพิ่ม Premium connector แล้วเปิดไฟล์เป็น public จะทำให้ทำงานได้แน่นอน”

ชี้ว่าคำตอบเกินหลักฐานหรือ scope ตรงไหน แล้วกลับไปตรวจ input, source token, error และผลจริง ไม่มีภาพใดอนุญาตให้เปลี่ยนสิทธิ์หรือใช้ข้อมูลลูกค้า

[กลับไป Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md)
