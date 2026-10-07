---
layout: home
title: เริ่มต้น
hero:
  name: Power Automate
  text: เปลี่ยนขั้นตอนซ้ำ ๆ ให้เป็น flow ที่ตรวจผลได้
  tagline: เริ่มจาก Email ต่อด้วย Forms และ Excel แล้วใช้ ChatGPT ช่วยคิดและแก้ปัญหาอย่างมีหลักฐาน
  image:
    src: /images/workflow-mark.svg
    alt: ขั้นตอนงานสามส่วนที่เชื่อมต่อกัน
  actions:
    - theme: brand
      text: เริ่ม Email flow แรก
      link: /exercises/01-foundation-email
    - theme: alt
      text: ดาวน์โหลดไฟล์ฝึก
      link: /resources/downloads
features:
  - title: เริ่มเล็ก เห็นผลจริง
    details: ใส่ input ด้วยตัวเอง ส่ง Email แล้วตรวจว่าค่าถึงปลายทางถูกต้อง
  - title: รับคำขอได้เป็นระบบ
    details: ใช้ Forms รับข้อมูล และส่งคำตอบลง Excel Table ผ่าน Dynamic content
  - title: คิดและทดสอบด้วยหลักฐาน
    details: ใช้ ChatGPT ช่วยเสนอแนวทาง แล้วตรวจและทดสอบการเปลี่ยนแปลงเอง
---

## ก่อนเริ่มฝึก

- เปิด Power Automate, Outlook, Microsoft Forms และ OneDrive for Business ด้วยบัญชีฝึกที่ผู้จัดยืนยันให้ใช้ได้
- เลือก environment ที่วิทยากรระบุ และใช้อีเมลฝึกของตัวเองเป็นผู้รับ
- ดาวน์โหลด workbook จาก [หน้าไฟล์ฝึก](./resources/downloads.md)
- ใช้ข้อมูลสมมติเท่านั้น หากเข้า app หรือสร้าง connection ไม่ได้ ให้แจ้งวิทยากรก่อนทำต่อ

> **License:** เส้นทางที่เผยแพร่ใช้ Built-in actions และ Standard connectors ได้แก่ Office 365 Outlook, Microsoft Forms และ Excel Online (Business) ไม่ใช้ Premium connector แต่ต้องมีสิทธิ์ Power Automate และบริการ Microsoft 365 ที่เกี่ยวข้อง คำว่า Standard ไม่ได้หมายความว่าทุกบริการใช้ฟรี ให้ผู้จัดยืนยันสิทธิ์ก่อนฝึก ส่วน ChatGPT ใช้บัญชีที่องค์กรอนุญาต ไม่กำหนด paid plan หรือ model เฉพาะ

## แบบฝึกหัดที่เปิดอ่านได้

1. [Email flow แรก: Trigger, Action และ Dynamic content](./exercises/01-foundation-email.md)
2. [รับคำขอผ่าน Forms แล้วบันทึก Excel](./exercises/02-forms-to-excel.md)
3. [Exercise 4: ใช้ ChatGPT ช่วยออกแบบและตรวจ error](./exercises/04-chatgpt-design-and-troubleshooting.md)

หมายเลข Exercise ใช้ตามช่วงการสอน เอกสารในเว็บไซต์เป็นแบบฝึกหัดที่เผยแพร่แล้ว ให้ทำตามลำดับที่วิทยากรแจ้งในห้องเรียน

อ่าน [แนวคิดพื้นฐาน](./resources/foundations.md), [คู่มือ ChatGPT](./guidebook/index.md) และ [ข้อมูลทดสอบ](./resources/sample-inputs.md) ประกอบได้ เมื่อสร้าง flow สำเร็จ ให้ตรวจทั้ง Run history และผลปลายทาง ไม่ใช้สถานะ `Succeeded` อย่างเดียวตัดสินว่าข้อมูลถูกต้อง
