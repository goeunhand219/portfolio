import Section from '../components/Section';
import Reveal from '../components/Reveal';
import ExternalLink from '../components/ExternalLink';
import { CONTACT, PROFILE } from '../data/profile';

// ContactSection — 단순화.
// 좌(연락처) + 우(영상 작은 그리드) 2col.
// 영상: 4개 작게 그리드 (2col 모바일 / 4col 데스크톱)

export default function ContactSection() {
  return (
    <Section id="contact" tone="dark" kicker="Let's talk" en="CONTACT" ko="함께 일하고 싶다면">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,360px)_1fr] gap-8 md:gap-12">
        {/* 좌 — 연락처 카드 */}
        <Reveal>
          <div className="bg-paper rounded-card p-5 md:p-6 text-ink-900">
            <div className="space-y-1">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex justify-between items-center text-body font-semibold py-2.5 border-b border-ink-100"
              >
                <span className="text-ink-500 text-label uppercase tracking-wider font-extrabold">
                  Email
                </span>
                <span className="font-extrabold">{CONTACT.email}</span>
              </a>
              <div className="flex justify-between items-center text-body font-semibold py-2.5">
                <span className="text-ink-500 text-label uppercase tracking-wider font-extrabold">
                  Location
                </span>
                <span className="font-extrabold">{PROFILE.location}</span>
              </div>
            </div>

            <a
              href={CONTACT.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center px-5 py-3.5 rounded-sm bg-highlight text-ink-900 font-extrabold text-body hover:bg-highlight-deep transition-colors border-2 border-ink-900"
              style={{ boxShadow: '4px 4px 0 0 #0A0A0A' }}
            >
              이력서 PDF 다운로드 ↓
            </a>
          </div>
        </Reveal>

        {/* 우 — 영상 리스트 (제목 + 바로가기 링크) */}
        {CONTACT.videos && CONTACT.videos.length > 0 && (
          <Reveal delay={120}>
            <div>
              <p className="text-micro font-extrabold uppercase tracking-widest text-highlight mb-3">
                포트폴리오 영상
              </p>
              <ul className="space-y-3">
                {CONTACT.videos.map((v) => (
                  <li
                    key={v.id}
                    className="flex justify-between items-center gap-3 border-b border-paper/15 pb-3"
                  >
                    <span className="text-body font-extrabold text-paper">
                      {v.title}
                    </span>
                    <ExternalLink href={`https://youtu.be/${v.id}`} tone="dark">
                      바로가기
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>

      <p className="text-micro text-ink-400 text-center mt-12 pb-4">
        © 2026 {PROFILE.name} · 교육사업 기획 포트폴리오
      </p>
    </Section>
  );
}
