"use client";
import { useState } from "react";

export default function RechargeShop() {
  const [app, setApp] = useState("");
  const [packageType, setPackageType] = useState("");
  const [userId, setUserId] = useState("");

  const handleOrder = () => {
    if (app && packageType && userId) {
      window.open(`https://wa.me/966XXXXXXXXX?text=أرغب في شحن ${app} باقة ${packageType}، وهذا الـID: ${userId}`);
    } else {
      alert("يرجى ملء جميع الحقول");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{textAlign:"center"}}>🔋 متجر شحن VIP لتطبيقات السعودية</h2>

      <div>
        <label>اختر التطبيق:</label><br />
        <select onChange={(e) => setApp(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
          <option value="">اختر من القائمة</option>
          <option value="Kiyo Live">Kiyo Live / كيو لايف</option>
          <option value="Dream Chat">Dream Chat / دريم شات</option>
          <option value="Mr7ba Chat">Mr7ba Chat / مرحبا شات</option>
          <option value="TikTok">TikTok / تيك توك</option>
        </select>
      </div>

      <div style={{marginTop:"10px"}}>
        <label>نوع الباقة:</label><br />
        <select onChange={(e) => setPackageType(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
          <option value="">اختر الباقة</option>
          <option value="VIP Plus – 49 SAR">VIP Plus – 49 SAR</option>
          <option value="Super Combo – 99 SAR">Super Combo – 99 SAR</option>
          <option value="Basic – 20 SAR">Basic – 20 SAR</option>
        </select>
      </div>

      <div style={{marginTop:"10px"}}>
        <label>معرّف المستخدم أو ID في التطبيق:</label><br />
        <input
          type="text"
          placeholder="أدخل ID الخاص بك"
          onChange={(e) => setUserId(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        />
      </div>

      <button onClick={handleOrder} style={{ width: "100%", padding: "10px", marginTop: "20px", cursor:"pointer" }}>
        🚀 تأكيد الطلب
      </button>

      <p style={{textAlign:"center", fontSize:"12px", color:"gray", marginTop:"20px"}}>
        بعد الطلب، سيتم التواصل معك عبر واتساب خلال دقائق.
      </p>
    </div>
  );
}
