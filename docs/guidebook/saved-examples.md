# ตัวอย่างประกอบเมื่อเปิด ChatGPT ไม่ได้

ข้อความด้านล่าง **ผู้เขียนเตรียมเพื่อการสอน** ไม่ใช่ transcript จาก ChatGPT ไม่ใช่ tenant test result และไม่ใช่หลักฐานว่าผู้เรียนได้ใช้ ChatGPT จริง ใช้ฝึกอ่านและตรวจข้อเสนอร่วมกันได้

## ตัวอย่างคำตอบสำหรับ design review

> Flow นี้เริ่มด้วย Response Id จาก trigger จากนั้น Get response details ดึงคำตอบให้ Excel action ใช้ ควรตรวจว่า Title มาจาก Task title ใน Get response details ไม่ใช่ข้อความที่พิมพ์ว่า Task title
>
> ลองส่งสอง responses โดยใช้ Category ต่างกัน ตรวจสอง runs และสองแถวใหม่ เทียบ Response Id กับ RequestId ในแต่ละแถว ถ้าไม่มี run ให้ตรวจ Form Id, flow state และการส่ง response ใหม่หลัง Save ก่อน

**คำถามให้ลองตอบ:** ข้อไหนตรวจได้จาก description? ข้อไหนต้องเปิด flow หรือ workbook จริง? หากสรุปว่าไม่มี duplicate ทุกกรณีจากสอง tests นี้ จะเกินหลักฐานอย่างไร?

## ตัวอย่างคำตอบสำหรับ conversion error

> Expression int('not-a-number') พยายามแปลงข้อความที่ไม่ใช่ตัวเลขเป็น integer จึงเกิด conversion failure ใน sample นี้ การแก้ตัวอย่างที่เล็กที่สุดคือเปลี่ยน input เป็นข้อความตัวเลข: int('25')
>
> Save แล้ว Run ใหม่ เปิด Compose Outputs ตรวจว่าค่าเป็น integer 25 และ action สำเร็จ ผลก่อน/หลังนี้พิสูจน์เฉพาะ sample ที่ทดสอบ การรับ input จากผู้ใช้จริงยังต้องคิดเรื่อง validation และ invalid input เพิ่ม

**คำถามให้ลองตอบ:** ทำไมการเปลี่ยนข้อความใน chat ไม่ได้แก้ flow? เราต้องดู run ไหนเพื่อยืนยันผล? ถ้าใส่ expression เป็น literal text ทำไมจึงอาจไม่เกิด error?

## ฝึกด้วยข้อเสนอที่ยังไม่ควรยอมรับ

> “เพิ่ม Premium connector แล้วเปิดสิทธิ์ไฟล์เป็น public จะทำให้ทำงานได้แน่นอน”

ชี้ให้ได้ว่าข้อเสนอนี้เกิน scope และไม่ได้อธิบายต้นเหตุของ error จากนั้นกลับไปตรวจ input, source token และ error ของ action จริง

[กลับไป Exercise 4](../exercises/04-chatgpt-design-and-troubleshooting.md)
