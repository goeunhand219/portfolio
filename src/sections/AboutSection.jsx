import Section from '../components/Section';
import Card from '../components/Card';
import { ABOUT } from '../data/profile';

// AboutSection — 강점 3가지 카드.

export default function AboutSection() {
  return (
    <Section id="about" tone="white" kicker="About" title="이런 기획자입니다">
      <div className="flex flex-col gap-3">
        {ABOUT.pillars.map((p, i) => (
          <Card key={p.title} className="p-5">
            <div className="flex gap-3 items-start">
              <span className="shrink-0 w-7 h-7 rounded-xs bg-sage-500 text-white flex items-center justify-center font-extrabold text-label">
                {i + 1}
              </span>
              <div>
                <h3 className="text-heading font-extrabold text-ink-900 mb-1.5">
                  {p.title}
                </h3>
                <p className="text-body text-ink-600">{p.body}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
