import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { INTRODUCTION } from '../data/profile';

// IntroductionSection — 모바일: 세로(↓) / 데스크톱: 가로(→).

function InputOutputCard({ badge, label, items }) {
  return (
    <div className="bg-paper rounded-card p-5 md:p-6 border border-ink-900/10 shadow-sm h-full">
      <span className="badge-yellow text-label mb-3 inline-block">{badge}</span>
      <p className="text-heading font-extrabold text-ink-900 mb-3">{label}</p>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.strong} className="text-body text-ink-700">
            <strong className="font-extrabold text-ink-900">· {it.strong}:</strong>{' '}
            {it.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function IntroductionSection() {
  return (
    <Section id="introduction" tone="paper" kicker="How I think" en="INTRODUCTION" ko="입력 → 출력">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">
        <Reveal>
          <InputOutputCard
            badge="INPUT"
            label={INTRODUCTION.input.label}
            items={INTRODUCTION.input.items}
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="flex justify-center text-ink-300 font-display">
            <span className="md:hidden text-3xl">↓</span>
            <span className="hidden md:inline text-5xl">→</span>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <InputOutputCard
            badge="OUTPUT"
            label={INTRODUCTION.output.label}
            items={INTRODUCTION.output.items}
          />
        </Reveal>
      </div>
    </Section>
  );
}
