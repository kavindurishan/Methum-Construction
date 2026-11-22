import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CidaTrustBar from "@/components/CidaTrustBar";
import Sectors from "@/components/Sectors";
import LandmarkProjects from "@/components/LandmarkProjects";
import LiveExecutionShowcase from "@/components/LiveExecutionShowcase";
import MachineryFleet from "@/components/MachineryFleet";
import QualityHSE from "@/components/QualityHSE";
import LeadershipAbout from "@/components/LeadershipAbout";
import QuickEstimator from "@/components/QuickEstimator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CidaTrustBar />
        <LeadershipAbout />
        <Sectors />
        <LandmarkProjects />
        <LiveExecutionShowcase />
        <MachineryFleet />
        <QualityHSE />
        <QuickEstimator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
