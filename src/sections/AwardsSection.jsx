import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { AWARDS, EDUCATION } from '../data/profile';

// AwardsSection — 수상 카드 (연도·주관기관 메타라인 + 큰 제목) + 학력·자격·교육 이수.

function InfoCard({ title, rows }) {
  return (
    <div className="bg-paper rounded-card border border-ink-900/10 shadow-sm p-6 md:p-8">
      <p className="text-micro font-extrabold uppercase tracking-widest text-ink-500 mb-5">
        {title}
      </p>
      <ul className="divide-y divide-ink-100">
        {rows.map((r, i) => (
          <li
            key={i}
            className="flex justify-between items-baseline gap-4 py-3 first:pt-0 last:pb-0"
          >
            <p className="text-body font-extrabold text-ink-900 leading-snug min-w-0">
              {r.primary}
            </p>
            <span className="text-label text-ink-500 shrink-0 whitespace-nowrap">
              {r.right}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AwardCard({ a, index }) {
  return (
    <Reveal delay={index * 80}>
      <div className="bg-paper rounded-card border border-ink-900/10 p-5 shadow-sm h-full flex flex-col">
        {/* 메타라인: 연도 · 주관기관 한 줄에 */}
        <div className="flex items-baseline gap-2 mb-3 flex-wrap">
          <span
            className="font-display uppercase text-highlight bg-ink-900 px-2 py-0.5 rounded-xs"
            style={{ fontSize: '14px', letterSpacing: '0.05em' }}
          >
            {a.year}
          </span>
          <span className="text-label font-extrabold text-ink-700">{a.org}</span>
        </div>

        {/* 타이틀 (큰 글씨) */}
        <h3 className="text-heading font-extrabold text-ink-900 leading-snug">
          {a.title}
        </h3>

        {a.note && (
          <p className="text-label text-ink-500 mt-3 italic border-l-2 border-highlight pl-2">
            {a.note}
          </p>
        )}

        {a.image && (
          <img
            src={a.image}
            alt={`${a.title} 표창장`}
            className="mt-auto pt-4 w-full h-32 object-cover rounded-sm border border-ink-900/10"
          />
        )}
      </div>
    </Reveal>
  );
}

export default function AwardsSection() {
  return (
    <Section
      id="awards"
      tone="beige"
      kicker="Recognition"
      en="AWARDS"
      ko="노력과 성과를 인정받다"
    >
      {/* 수상 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-12">
        {AWARDS.map((a, i) => (
          <AwardCard key={`${a.year}-${a.title}`} a={a} index={i} />
        ))}
      </div>

      {/* 학력·자격 + 교육·연수 — 카드 2개 통합 */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          <InfoCard
            title="학력 · 자격"
            rows={[
              {
                primary: `${EDUCATION.school.name} ${EDUCATION.school.major}`,
                right: EDUCATION.school.period.replace('~', '—'),
              },
              ...(EDUCATION.overseas
                ? [{
                    primary: 'San Jose, CA · 거주 + 어학연수',
                    right: EDUCATION.overseas.period.replace('~', '—'),
                  }]
                : []),
              ...EDUCATION.certs.map((c) => ({
                primary: c.name,
                right: `${c.org} · ${c.year.split('.')[0]}`,
              })),
            ]}
          />
          <InfoCard
            title="교육 · 연수"
            rows={EDUCATION.trainings.map((t) => ({
              primary: t.name,
              right: t.period.split(' ~ ')[0].split('.')[0],
            }))}
          />
        </div>
      </Reveal>
    </Section>
  );
}
