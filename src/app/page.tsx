import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMission from "@/components/sections/AboutMission";
import FocusAreas from "@/components/sections/FocusAreas";
import ProgramSpotlight from "@/components/sections/ProgramSpotlight";
import ImpactStats from "@/components/sections/ImpactStats";
import AttendOutreach from "@/components/sections/AttendOutreach";
import GetInvolved from "@/components/sections/GetInvolved";
import Partnerships from "@/components/sections/Partnerships";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <AboutMission />
        <FocusAreas />
        <ProgramSpotlight />
        <ImpactStats />
        <AttendOutreach />
        <GetInvolved />
        <Partnerships />
      </main>

      <ContactFooter />
    </>
  );
}
