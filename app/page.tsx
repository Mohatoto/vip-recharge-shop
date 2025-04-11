"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function RechargeShop() {
  const [app, setApp] = useState("");
  const [packageType, setPackageType] = useState("");
  const [userId, setUserId] = useState("");

  const handleOrder = () => {
    if (app && packageType && userId) {
      window.open(
        `https://wa.me/966XXXXXXXXX?text=أرغب في شحن ${app} باقة ${packageType}، وهذا الـID: ${userId}`
      );
    } else {
      alert("يرجى ملء جميع الحقول");
    }
  };

  return (
    <div className="p-4 grid gap-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center">
        🔋 متجر شحن VIP لتطبيقات السعودية
      </h1>

      <Card>
        <CardContent className="p-4 grid gap-3">
          <label>اختر التطبيق:</label>
          <select
            className="border rounded p-2"
            onChange={(e) => setApp(e.target.value)}
          >
            <option value="">اختر من القائمة</option>
            <option value="Kiyo Live">Kiyo Live / كيو لايف</option>
            <option value="Dream Chat">Dream Chat / دريم شات</option>
            <option value="Mr7ba Chat">Mr7ba Chat / مرحبا شات</option>
            <option value="TikTok">TikTok / تيك توك</option>
          </select>

          <label>نوع الباقة:</label>
          <select
            className="border rounded p-2"
            onChange={(e) => setPackageType(e.target.value)}
          >
            <option value="">اختر الباقة</option>
            <option value="VIP Plus – 49 SAR">VIP Plus – 49 SAR</option>
            <option value="Super Combo – 99 SAR">Super Combo – 99 SAR</option>
            <option value="Basic – 20 SAR">Basic – 20 SAR</option>
          </select>

          <label>معرّف المستخدم أو ID في التطبيق:</label>
          <Input
            placeholder="أدخل ID الخاص بك"
            onChange={(e) => setUserId(e.target.value)}
          />

          <Button className="mt-4" onClick={handleOrder}>
            🚀 تأكيد الطلب
          </Button>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-gray-500">
        بعد الطلب، سيتم التواصل معك عبر واتساب خلال دقائق.
      </p>
    </div>
  );
}
