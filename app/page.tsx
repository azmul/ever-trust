import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductsSection } from "./components/ProductsSection";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { ProcessSection } from "./components/ProcessSection";
import { GlobalSourcingSection } from "./components/GlobalSourcingSection";
import { ComplianceSection } from "./components/ComplianceSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />

        {/* Main Content Wrapper */}
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[1280px] px-4 lg:px-10 gap-16 lg:gap-24">
            <HeroSection />
            <ProductsSection />
            <WhyChooseUsSection />
            <ProcessSection />
            <GlobalSourcingSection />
            <ComplianceSection />
            <AboutSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
