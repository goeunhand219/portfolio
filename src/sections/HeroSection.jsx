import { PROFILE } from '../data/profile';
import Reveal from '../components/Reveal';

// HeroSection — 검정 배경 + 형광노랑 강조 + 흰 텍스트.
// 모바일: 사진(상) → 텍스트(하).
// 데스크톱(lg): 좌(텍스트) + 우(사진 풀블리드, 우측 끝까지 가득).

export default function HeroSection() {
  return (
    <section id="hero" className="bg-ink-900 text-paper scroll-mt-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_minmax(0,1fr)] md:min-h-[calc(100vh-56px)]">
        {/* 좌 — 텍스트 (데스크톱). 모바일에선 사진이 위로 가도록 order 조정. */}
        <div className="order-2 md:order-1 px-5 py-10 md:px-10 md:py-14 lg:px-14 lg:py-20 md:flex md:items-center">
          <div className="w-full">
            <Reveal>
              <p className="text-micro font-extrabold uppercase tracking-widest text-ink-300 mb-3">
                {PROFILE.role}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                className="font-display uppercase text-paper"
                style={{ fontSize: 'clamp(52px, 8.5vw, 104px)', lineHeight: 1.05 }}
              >
                <span className="block">GOEUN</span>
                <span
                  className="inline-block bg-highlight text-ink-900 px-3 mt-1"
                  style={{ lineHeight: 1.05 }}
                >
                  SON
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-heading md:text-title font-extrabold text-paper mt-8 md:mt-10 leading-snug">
                “{PROFILE.tagline}”
              </p>
              <p className="text-body text-ink-300 mt-3 max-w-[480px]">
                {PROFILE.blurb}
              </p>
            </Reveal>

            {/* 핵심 지표 */}
            <Reveal delay={240}>
              <div className="grid grid-cols-3 gap-2 md:gap-3 mt-7 max-w-[480px]">
                {PROFILE.stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-highlight rounded-sm p-4 md:p-5 text-center border border-ink-900"
                  >
                    <p
                      className="font-display text-ink-900"
                      style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1 }}
                    >
                      {s.num}
                    </p>
                    <p className="text-label md:text-body font-extrabold text-ink-900 mt-1.5 uppercase tracking-wider">
                      {s.unit}
                    </p>
                    <p className="text-label text-ink-700 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
                {PROFILE.hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label font-extrabold text-ink-300 border-b-2 border-paper/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* 우 — 사진. 데스크톱에서 우측 영역을 꽉 채움 (우·상·하 모서리 풀블리드). */}
        <Reveal className="order-1 md:order-2 relative h-80 md:h-full bg-ink-700">
          <img
            src={PROFILE.photo}
            alt={`${PROFILE.name} 프로필 사진`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* 좌측 페이드 — 텍스트 영역과 자연스럽게 이어짐 (md 이상) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute inset-y-0 left-0 w-32 pointer-events-none"
            style={{
              background:
                'linear-gradient(270deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.85) 100%)',
            }}
          />
          {/* 하단 페이드 — 모바일에서 텍스트 영역과 이어짐 */}
          <div
            aria-hidden="true"
            className="md:hidden absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.95) 100%)',
            }}
          />
        </Reveal>
      </div>
    </section>
  );
}
