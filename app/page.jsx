import './globals.css';
import Header from '../components/Header';
import Cards from '../components/Cards';
import ChargeSection from '../components/ChargeSection';
import ReferralBox from '../components/ReferralBox';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5FAFF]">
      <Header />
      <section className="p-6 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-3">
          اشحن بطاريتك مجانًا مع Zory Charge
        </h1>
        <p className="text-gray-600 mb-6">
          تجربة ترفيهية لمحاكاة شحن البطارية – مرة كل 24 ساعة
        </p>
        <ChargeSection />
        <ReferralBox />
        <p className="text-xs text-gray-400 mt-8">
          Zory Charge هو موقع ترفيهي لمحاكاة تجربة شحن البطارية ولا يؤثر على أداء الجهاز الحقيقي.
        </p>
      </section>
    </main>
  );
}