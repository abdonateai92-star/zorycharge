export default function ReferralBox() {
  const link = "https://zorycharge.com/?ref=USER123";

  return (
    <div className="bg-blue-50 p-4 rounded-xl text-center mt-6">
      <h3 className="font-bold mb-2">👥 دعوة الأصدقاء</h3>
      <p className="text-sm mb-3">شارك رابطك واحصل على شحن إضافي</p>
      <input value={link} readOnly className="w-full p-2 text-sm rounded mb-3" />
      <a href={`https://wa.me/?text=اشحن بطاريتك مجانًا ${link}`}
         target="_blank"
         className="block bg-green-500 text-white py-2 rounded font-bold">
        مشاركة واتساب
      </a>
    </div>
  );
}