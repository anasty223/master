import Footer from "@/ui/Footer/Footer";
import Header from "@/ui/Header/Header";

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen justify-between px-8 text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(105, 105, 105, 1) 25%, rgba(0, 0, 0, 1) 100%)`,
      }}
    >
      <Header />
      <main>{/* Основной контент */}</main>
      <Footer />
    </div>
  );
}
