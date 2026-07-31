import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CommunityForm } from "@/components/community/CommunityForm";
import { ContentSection } from "@/components/content/ContentSection";
import { EventsSection } from "@/components/events/EventsSection";
import { FaqSection } from "@/components/faq/FaqSection";
import { FounderSection } from "@/components/founder/FounderSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { HeroSection } from "@/components/hero/HeroSection";

export function SitePage() {
  return (
    <div className="theme-ocean min-h-full">
      <SiteHeader />
      <main>
        <HeroSection />
        <EventsSection />
        <FounderSection />
        <GallerySection />
        <ContentSection />
        <FaqSection />
        <CommunityForm />
      </main>
      <SiteFooter />
    </div>
  );
}
