import { useState } from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

// SamplesSection — 캔바 스타일 작업 샘플 갤러리.
// 각 카테고리는 헤더 클릭으로 접기/펼치기 (기본 펼침).

const BASE = './assets/canva';

const CLUSTERS = [
  {
    id: 'ai-video',
    label: 'AI 영상 제작 · 스토리보드',
    sub: '시나리오(스토리보드) → 영상 산출 (자동차 광고)',
    aspect: 'aspect-[9/16]',
    fitHeight: 'h-[55vh] md:h-[70vh]',
    items: [
      { type: 'image', src: `${BASE}/ai-storyboard.png`, alt: 'AI 스토리보드', caption: '스토리보드' },
      { type: 'video', src: `${BASE}/ai-video-car.mov`, alt: 'AI 자동차 광고', caption: '자동차 광고' },
    ],
  },
  {
    id: 'instagram',
    label: '인스타그램 디자인',
    sub: '피드 포스트 · 릴스 · 후기 콘텐츠',
    aspect: 'aspect-[4/5]',
    cols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    linkOriginal: true,
    autoPlayVideo: true,
    items: [
      { type: 'image', src: `${BASE}/instagram/post-2.png`, alt: '인스타 피드 02' },
      { type: 'image', src: `${BASE}/instagram/post-6.png`, alt: '인스타 피드 06' },
      { type: 'image', src: `${BASE}/instagram/shampoo-review.png`, alt: '샴푸유목민의 정착 찐템' },
      { type: 'video', src: `${BASE}/instagram/cart-reel.mp4`, alt: "What's in your cart 릴스" },
      { type: 'image', src: `${BASE}/instagram/starbucks-review.png`, alt: '스타벅스 후기' },
    ],
  },
  {
    id: 'ui-design',
    label: 'UI 디자인 (Figma)',
    sub: '교통약자 모바일 앱 · 대표 5개 화면 (온보딩 → 예약 → 이동 → 피드백)',
    aspect: 'aspect-[9/19.5]',
    cols: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    items: [
      { type: 'image', src: `${BASE}/mobility-care/ui-01-start.png`, alt: '온보딩' },
      { type: 'image', src: `${BASE}/mobility-care/ui-05-arrival-setup.png`, alt: '도착지 설정' },
      { type: 'image', src: `${BASE}/mobility-care/ui-06-guardian-booking.png`, alt: '보호자 예약' },
      { type: 'image', src: `${BASE}/mobility-care/ui-08-guardian-tracking.png`, alt: '이동 알림' },
      { type: 'image', src: `${BASE}/mobility-care/ui-09-feedback.png`, alt: '피드백' },
    ],
  },
  {
    id: 'webpage',
    label: '웹페이지 제작',
    sub: 'AI 활용 랜딩 페이지 · 전체 페이지',
    natural: true,
    cols: 'grid-cols-1 max-w-xl mx-auto',
    items: [
      { type: 'image', src: `${BASE}/mobility-care/webpage.png`, alt: 'AI 웹페이지' },
    ],
  },
];

function MediaItem({ item, autoPlay = false }) {
  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        autoPlay={autoPlay}
        loop={autoPlay}
        muted={autoPlay}
        controls={!autoPlay}
        preload="metadata"
        playsInline
        className="absolute inset-0 w-full h-full object-cover bg-ink-900"
      />
    );
  }
  return (
    <img
      src={item.src}
      alt={item.alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover bg-ink-900"
    />
  );
}

function ToggleIndicator({ open }) {
  return (
    <span
      className="text-paper text-label inline-block transition-transform duration-200"
      style={{ transform: open ? 'rotate(0deg)' : 'rotate(-90deg)' }}
      aria-hidden="true"
    >
      ▼
    </span>
  );
}

function CollapsibleCluster({ cluster, open, onToggle }) {
  return (
    <div className="border-b border-paper/15 pb-7 md:pb-9 last:border-b-0 last:pb-0">
      <Reveal>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="w-full flex items-center gap-3 mb-5 text-left hover:opacity-90 transition-opacity"
        >
          <span className="badge-yellow text-label">{cluster.label}</span>
          {cluster.sub && (
            <span className="text-label text-ink-300 hidden md:inline">
              {cluster.sub}
            </span>
          )}
          <span className="flex-1 h-px bg-highlight/30" />
          <span className="text-micro font-extrabold text-ink-300">
            {cluster.items.length}{cluster.items.length > 1 ? ' items' : ' item'}
          </span>
          <ToggleIndicator open={open} />
        </button>
      </Reveal>
      {open && (
        <>
          {cluster.sub && (
            <p className="text-label text-ink-300 mb-5 md:hidden -mt-2">
              {cluster.sub}
            </p>
          )}
          {cluster.fitHeight ? (
            <div className="flex justify-center items-start gap-3 md:gap-4">
              {cluster.items.map((item, i) => (
                <div
                  key={i}
                  className={`${cluster.aspect} ${cluster.fitHeight} relative overflow-hidden rounded-sm bg-ink-800 shrink`}
                >
                  <MediaItem item={item} />
                  {item.caption && (
                    <span
                      className="absolute bottom-2 left-2 bg-ink-900/85 text-paper text-micro font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-xs"
                      style={{ fontSize: '10px' }}
                    >
                      {item.caption}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={`grid gap-3 md:gap-4 ${cluster.cols} items-start`}>
              {cluster.items.map((item, i) =>
                cluster.natural ? (
                  <div
                    key={i}
                    className="block rounded-sm overflow-hidden bg-ink-900 border border-paper/10 hover:border-highlight/40 transition-colors"
                  >
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        autoPlay={cluster.loopVideo}
                        loop={cluster.loopVideo}
                        muted
                        playsInline
                        controls={!cluster.loopVideo}
                        preload="metadata"
                        className="w-full h-auto block bg-ink-900"
                      />
                    ) : (
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          className="w-full h-auto block"
                        />
                      </a>
                    )}
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`${cluster.aspect} relative overflow-hidden rounded-sm bg-ink-800 group`}
                  >
                    <MediaItem item={item} autoPlay={cluster.autoPlayVideo} />
                    {item.caption && (
                      <span
                        className="absolute bottom-2 left-2 bg-ink-900/85 text-paper text-micro font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-xs"
                        style={{ fontSize: '10px' }}
                      >
                        {item.caption}
                      </span>
                    )}
                    {cluster.linkOriginal && item.type !== 'video' && (
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.alt} 원본 보기`}
                        className="absolute inset-0 flex items-end justify-end p-2 bg-ink-900/0 hover:bg-ink-900/30 transition-colors"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-highlight text-ink-900 text-micro font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                          원본 ↗
                        </span>
                      </a>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function SamplesSection() {
  const [openMap, setOpenMap] = useState(() =>
    CLUSTERS.reduce((acc, c) => {
      acc[c.id] = false;
      return acc;
    }, {})
  );

  const toggle = (id) =>
    setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  const toggleAll = (value) =>
    setOpenMap(
      CLUSTERS.reduce((acc, c) => {
        acc[c.id] = value;
        return acc;
      }, {})
    );

  const anyOpen = Object.values(openMap).some(Boolean);

  return (
    <Section
      id="samples"
      tone="dark"
      kicker="Outputs · 작업 샘플"
      en="SAMPLES"
      ko="AI 영상 · 디자인 · 콘텐츠 산출물"
    >
      <div className="flex justify-end mb-6">
        <button
          type="button"
          onClick={() => toggleAll(!anyOpen)}
          className="text-micro font-extrabold uppercase tracking-wider text-highlight hover:text-highlight-soft transition-colors"
        >
          {anyOpen ? '전체 접기' : '전체 펼치기'} ↕
        </button>
      </div>
      <div className="space-y-7 md:space-y-9">
        {CLUSTERS.map((c) => (
          <CollapsibleCluster
            key={c.id}
            cluster={c}
            open={openMap[c.id]}
            onToggle={() => toggle(c.id)}
          />
        ))}
      </div>
    </Section>
  );
}
