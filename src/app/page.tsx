import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Legacy from "@/components/Legacy";
import Workshop from "@/components/Workshop";
import Transformations from "@/components/Transformations";
import Instagram from "@/components/Instagram";
import CustomerMachines from "@/components/CustomerMachines";
import Brands from "@/components/Brands";
import VisitGarage from "@/components/VisitGarage";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <ContactModal />
      
      {/* Background Ambient Glows - Warm Hangar Lighting */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-neon/3 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-neon/3 rounded-full filter blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 flex flex-col min-h-screen bg-workshop-bg">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <Legacy />
          <Workshop />
          <Transformations />
          <Instagram />
          <CustomerMachines />
          <Brands />
          <VisitGarage />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}
