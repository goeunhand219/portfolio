import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { STRENGTHS } from '../data/profile';

// StrengthSection — 다크 배경 + 3컬럼 카드. 헤더는 사이트 공통 SectionTitle 스타일로 통일.

export default function StrengthSection() {
  return (
    <Section
      id="about"
      tone="dark"
      kicker="Core capability"
      en="STRENGTH"
      ko="핵심역량 3가지 · 같이 일하는 방식"
    >
      {/* 3컬럼 카드 — 동일한 패딩으로 정렬, hover 시 음영 */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-px md:bg-paper/15">
        {STRENGTHS.map((s, i) => (
          <Reveal key={s.no} delay={i * 100}>
            <article
              className="group relative h-full flex flex-col bg-ink-900 p-7 md:p-8 lg:p-10 transition-colors duration-300 hover:bg-paper/[0.04]"
            >
              {/* 큰 명조체 번호 */}
              <span
                className="font-display text-highlight mb-7 md:mb-10 transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{
                  fontSize: 'clamp(56px, 6vw, 80px)',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  display: 'inline-block',
                }}
              >
                {s.no}
              </span>

              {/* 2줄 타이틀 */}
              <h3
                className="font-extrabold text-paper mb-5 md:mb-6"
                style={{
                  fontSize: 'clamp(22px, 2vw, 28px)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.title}
                <br />
                {s.subtitle}
              </h3>

              {/* 본문 */}
              <p className="text-body text-ink-300 leading-relaxed mb-7 md:mb-10">
                {s.body}
              </p>

              {/* 검증 라인 — 항상 카드 하단 정렬 */}
              <div className="mt-auto pt-5 border-t border-paper/15">
                <p className="text-label text-ink-300">
                  <span className="text-highlight font-extrabold">{s.proof.label}</span>{' '}
                  · <span className="text-paper font-extrabold">{s.proof.value}</span>
                </p>
              </div>

              {/* 호버 시 상단 형광 라인 */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 h-[2px] w-0 bg-highlight transition-all duration-300 group-hover:w-full"
              />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
