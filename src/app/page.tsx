import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CidaTrustBar from "@/components/CidaTrustBar";
import Sectors from "@/components/Sectors";
import LandmarkProjects from "@/components/LandmarkProjects";
import MachineryFleet from "@/components/MachineryFleet";
import QualityHSE from "@/components/QualityHSE";
import LeadershipAbout from "@/components/LeadershipAbout";
import QuickEstimator from "@/components/QuickEstimator";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CidaTrustBar />
        <Sectors />
        <LandmarkProjects />
        <MachineryFleet />
        <QualityHSE />
        <LeadershipAbout />
        <QuickEstimator />
      </main>
      <Footer />
    </div>
  );
}
