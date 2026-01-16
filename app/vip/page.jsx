import '../globals.css';

export default function VIP() {
  return (
    <main className="min-h-screen bg-[#F5FAFF] p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          👑 Zory Charge VIP
        </h1>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li>⚡ شحن كل 6 ساعات بدل 24</li>
          <li>❌ بدون إعلانات</li>
          <li>🎨 ثيمات خاصة</li>
          <li>📊 إحصائيات شحن حصرية</li>
        </ul>
        <p className="font-bold mb-4">السعر: $3 / شهر</p>
        <a href="https://gumroad.com" target="_blank"
           className="block text-center bg-blue-600 text-white py-3 rounded-lg font-bold">
          اشترك الآن
        </a>
      </div>
    </main>
  );
}