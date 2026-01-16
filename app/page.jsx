
import Header from '../components/Header';
import Cards from '../components/Cards';
import ChargeSection from '../components/ChargeSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5FAFF]">
      <Header />
      <section className="p-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">
          اشحن بطاريتك مجانًا
        </h2>
        <Cards />
        <ChargeSection />
      </section>
    </main>
  );
}