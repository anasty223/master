import Footer from "@/ui/Footer/Footer";
import Header from "@/ui/Header/Header";
import "../styles/globals.css";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen  text-white w-full"
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(105, 105, 105, 1) 25%, rgba(0, 0, 0, 1) 100%)`,
      // }}
    >
      <Header />
      <main>
        <HeroSection />
      </main>
      <div className="justify-end mt-auto">
        <Footer />
      </div>
    </div>
  );
}
