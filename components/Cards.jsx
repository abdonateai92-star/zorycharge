const cards = [
  { title: "ابدأ الشحن", icon: "🔋" },
  { title: "شحن أسرع", icon: "⚡" },
  { title: "دعوة الأصدقاء", icon: "👥" },
  { title: "VIP", icon: "👑" },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {cards.map((c, i) => (
        <div key={i} className="bg-blue-50 p-4 rounded-xl text-center shadow">
          <div className="text-3xl">{c.icon}</div>
          <p className="mt-2 font-medium">{c.title}</p>
        </div>
      ))}
    </div>
  );
}