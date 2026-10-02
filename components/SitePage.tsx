import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CommunityForm } from "@/components/community/CommunityForm";
import { ContentSection } from "@/components/content/ContentSection";
import { EventsSection } from "@/components/events/EventsSection";
import { FounderSection } from "@/components/founder/FounderSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { HeroSection } from "@/components/hero/HeroSection";
export function SitePage() {
  return (
    <div className="theme-ocean min-h-full">
      <SiteHeader />
      <main>
        <HeroSection />
        <div className="bg-[#081c34]">
          <EventsSection />
          <FounderSection />
        </div>
        <GallerySection />
        <ContentSection />
        <div className="bg-[#081c34]">
          <CommunityForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
