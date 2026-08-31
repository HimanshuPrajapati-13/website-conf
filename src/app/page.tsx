import { Hero } from "@/components/Hero";
import { NaturePhotoBackground } from "@/components/NaturePhotoBackground";
import { AboutSection } from "@/components/AboutSection";
import { ThemesSection } from "@/components/ThemesSection";
import { DatesSection } from "@/components/DatesSection";
import { AbstractsSection } from "@/components/AbstractsSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { CommitteeSection } from "@/components/CommitteeSection";
import { InstitutionsSection } from "@/components/InstitutionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NaturePhotoBackground />
      <Hero />
      <div className="relative z-10 bg-paper">
        <AboutSection />
      </div>
      <div className="relative z-10">
        <ThemesSection theme="overlay" />
        <DatesSection theme="overlay" />
        <AbstractsSection theme="overlay" />
        <RegistrationSection theme="overlay" />
        <HighlightsSection theme="overlay" />
        <CommitteeSection theme="overlay" />
        <InstitutionsSection theme="overlay" />
        <ContactSection theme="overlay" />
        <Footer theme="overlay" />
      </div>
    </>
  );
}
