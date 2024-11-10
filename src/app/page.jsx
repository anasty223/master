import Footer from "@/ui/Footer/Footer";
import Header from "@/ui/Header/Header";
import "../styles/globals.css";
import HeroSection from "@/components/Hero/HeroSection";
import MainWrapper from "@/ui/Wraper/MainWraper";
import bg from "/src/assets/font2.png";

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen  text-white w-full "
      // style={{
      //   backgroundImage: `linear-gradient(to bottom, rgba(105, 105, 105, 1) 25%, rgba(0, 0, 0, 1) 100%)`,
      // }}
    >
      <main
        // className=""
        className="py-6 relative w-full h-[150vh] bg-cover bg-center overflow-visible"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Header />

        <HeroSection />
      </main>
      <div className="justify-end mt-auto">{/* <Footer /> */}</div>
    </div>
  );
}
