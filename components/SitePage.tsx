import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CommunityForm } from "@/components/community/CommunityForm";
import { EventsSection } from "@/components/events/EventsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { FounderSection } from "@/components/founder/FounderSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { HeroSection } from "@/components/hero/HeroSection";

export function SitePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <EventsSection />
        <FounderSection />
        <GallerySection />
        <FaqSection />
        <CommunityForm />
      </main>
      <SiteFooter />
    </>
  );
}
