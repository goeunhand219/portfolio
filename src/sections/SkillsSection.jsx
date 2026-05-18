import Section from '../components/Section';
import Reveal from '../components/Reveal';
import ProgressBar from '../components/ProgressBar';
import Tag from '../components/Tag';
import { SKILLS } from '../data/profile';

// SkillsSection — 검정 배경. 도메인·도구 프로그레스 바.
// 그 외 도구는 베이지 카드로 감싸 시각 분리.

export default function SkillsSection() {
  return (
    <Section id="skills" tone="dark" kicker="Core skills" en="ABILITY" ko="강점을 만드는 기술과 역량">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <Reveal>
          <div>
            <p className="text-micro font-extrabold uppercase tracking-widest text-highlight mb-4">
              도메인 역량
            </p>
            <div className="space-y-3">
              {SKILLS.domain.map((s) => (
                <ProgressBar key={s.label} label={s.label} percent={s.percent} tone="dark" />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="text-micro font-extrabold uppercase tracking-widest text-highlight mb-4">
              협업·제작 도구
            </p>
            <div className="space-y-3">
              {SKILLS.tools.map((s) => (
                <ProgressBar key={s.label} label={s.label} percent={s.percent} tone="dark" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-10 pt-8 border-t border-paper/15">
          <p className="text-micro font-extrabold uppercase tracking-widest text-highlight mb-3">
            그 외 도구·프레임워크
          </p>
          <div className="flex flex-wrap gap-1.5">
            {SKILLS.tags.map((t) => (
              <Tag key={t} tone="soft">
                {t}
              </Tag>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
