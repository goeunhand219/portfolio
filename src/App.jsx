import MobileFrame from './components/MobileFrame';
import TopNav from './components/TopNav';
import HeroSection from './sections/HeroSection';
import StrengthSection from './sections/StrengthSection';
import SkillsSection from './sections/SkillsSection';
import SamplesSection from './sections/SamplesSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import AwardsSection from './sections/AwardsSection';
import ContactSection from './sections/ContactSection';

// App — 싱글 스크롤 포트폴리오. 섹션 순서가 채용담당자 동선.
// Introduction 섹션은 Strength·Skills 와 기능 중복이라 제거.

export default function App() {
  return (
    <MobileFrame>
      <TopNav />
      <main>
        <HeroSection />
        <SkillsSection />
        <StrengthSection />
        <ExperienceSection />
        <ProjectsSection />
        <AwardsSection />
        <SamplesSection />
        <ContactSection />
      </main>
    </MobileFrame>
  );
}
