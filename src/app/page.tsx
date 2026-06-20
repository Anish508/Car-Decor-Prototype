import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Brands from "@/components/Brands";
import Process from "@/components/Process";
import Showroom from "@/components/Showroom";
import Trust from "@/components/Trust";
import Instagram from "@/components/Instagram";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-neon-blue/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyber-blue/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <Services />
          <Showcase />
          <WhyChooseUs />
          <Brands />
          <Process />
          <Showroom />
          <Trust />
          <Instagram />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}
