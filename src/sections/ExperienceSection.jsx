import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { EXPERIENCE } from '../data/profile';

// ExperienceSection — 다크 배경.
// 모바일: 세로 stack.
// 데스크톱: 좌(360px 고정) 회사 메타 + 우(읽기 폭 720px) 본문.

function ExperienceCard({ exp, index }) {
  return (
    <Reveal delay={index * 100}>
      <div className="border-l-2 border-highlight pl-4 md:pl-6 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,360px)_1fr] gap-6 md:gap-10">
          {/* 좌 — 회사 메타 */}
          <div>
            <p className="text-micro font-extrabold uppercase tracking-widest text-highlight mb-1">
              {exp.period}
            </p>
            <p className="text-label font-extrabold text-ink-300 mb-3">
              {exp.duration}
            </p>
            <h3
              className="font-display uppercase text-paper leading-[0.95]"
              style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', letterSpacing: '0.01em' }}
            >
              {exp.company}
            </h3>
            <p className="text-label font-extrabold text-ink-300 mt-2">
              {exp.role}
            </p>
          </div>

          {/* 우 — 본문 (읽기 폭 제한) */}
          <div className="max-w-[720px]">
            <p className="text-body font-extrabold text-paper mb-5 leading-relaxed">{exp.summary}</p>
            <ul className="space-y-2.5">
              {exp.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-body text-ink-200 leading-relaxed">
                  <span className="text-highlight font-extrabold mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ExperienceSection() {
  return (
    <Section id="experience" tone="dark" kicker="Career" en="EXPERIENCE" ko="총 8년 4개월">
      <div>
        {EXPERIENCE.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </Section>
  );
}
