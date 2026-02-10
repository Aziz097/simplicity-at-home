import { Hero } from '@/components/sections/Hero';
import { ProblemValidation } from '@/components/sections/ProblemValidation';
import { SeasonalFramework } from '@/components/sections/SeasonalFramework';
import { Introduction } from '@/components/sections/Introduction';
import { HomeVibeQuiz } from '@/components/sections/HomeVibeQuiz';
import { TrustGuarantee } from '@/components/sections/TrustGuarantee';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/layout/Footer';
import { SashikoPatternDivider } from '@/components/ui/SashikoPatternDivider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />

        <ProblemValidation />

        {/* Seasonal Framework (Phase 3) */}
        <SeasonalFramework />

        <Introduction />

        {/* Transition to Dark Section (Quiz) - Light stitches overlapping Indigo background */}
        <div className="relative z-20 -mb-10">
          <SashikoPatternDivider variant="light" />
        </div>

        {/* Home Vibe Quiz (Phase 3) */}
        <HomeVibeQuiz />

        <TrustGuarantee />

        {/* Transition back to Light Section (CTA) - Overlapping light stitch on dark Trust background */}
        <div className="relative z-20 -mb-12">
          <SashikoPatternDivider variant="light" />
        </div>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
