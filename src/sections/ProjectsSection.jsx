import { useState } from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import Tag from '../components/Tag';
import ExternalLink from '../components/ExternalLink';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { PROJECTS } from '../data/profile';

// ProjectsSection — SIDE(개인 프로젝트) 우선 배치 + WORK 회사 그룹.
// SIDE: 3-col 썸네일 카드 (썸네일 + 제목 + 목표 + 성과 + 바로가기).
// WORK: 회사별 서브그룹, 컴팩트 2-col 카드.
// 그룹 헤더 클릭으로 각 그룹 접기/펼치기 (기본 펼침).

function MediaBlock({ media, title }) {
  if (!media) return null;
  if (media.type === 'youtube') {
    return (
      <div className="mt-5">
        <YouTubeEmbed id={media.id} title={title} />
      </div>
    );
  }
  if (media.type === 'youtube-link') {
    return (
      <div className="mt-5">
        <ExternalLink href={`https://youtu.be/${media.id}`}>
          {media.label || '유튜브에서 열어보기'}
        </ExternalLink>
      </div>
    );
  }
  if (media.type === 'video-local') {
    return (
      <video
        src={media.src}
        controls
        preload="metadata"
        className="w-full rounded-sm bg-ink-100 mt-5"
      />
    );
  }
  if (media.type === 'pdf') {
    return (
      <div className="mt-5">
        <ExternalLink href={media.src}>제안서 보기</ExternalLink>
      </div>
    );
  }
  return null;
}

function ProjectMeta({ rows }) {
  return (
    <dl className="space-y-3">
      {rows.map((r) => (
        <div key={r.label} className="flex gap-3 items-start">
          <dt className="shrink-0">
            <span className="badge-yellow" style={{ fontSize: '11px' }}>
              {r.label}
            </span>
          </dt>
          <dd className="text-label text-ink-700 flex-1 pt-0.5 leading-relaxed">
            {Array.isArray(r.value) ? (
              <ul className="space-y-2">
                {r.value.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            ) : (
              r.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

// WORK 카드 — 기존 텍스트 카드
function ProjectCard({ p, index }) {
  return (
    <Reveal delay={index * 60}>
      <article className="bg-paper rounded-card p-6 md:p-7 border border-ink-900/10 shadow-sm h-full flex flex-col">
        <p
          className="font-display uppercase text-ink-300 mb-2"
          style={{ fontSize: '18px', letterSpacing: '0.05em' }}
        >
          {p.code}
        </p>
        <h3 className="text-title font-extrabold text-ink-900 leading-tight">
          {p.title}
        </h3>
        {p.subtitle && (
          <p className="text-label text-ink-500 mt-2 leading-relaxed">
            {p.subtitle}
          </p>
        )}

        <div className="mt-6">
          <ProjectMeta rows={p.rows} />
        </div>

        {p.tags && p.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-5">
            {p.tags.map((t) => (
              <Tag key={t} tone="soft">
                #{t}
              </Tag>
            ))}
          </div>
        )}

        <MediaBlock media={p.media} title={p.title} />

        {(p.link || p.repo) && (
          <div className="flex flex-wrap gap-4 mt-5">
            <ExternalLink href={p.link || p.repo}>바로가기</ExternalLink>
          </div>
        )}
      </article>
    </Reveal>
  );
}

// SIDE 썸네일 — 프로젝트 preview 타입에 맞춰 렌더
function PreviewThumb({ preview, alt }) {
  if (!preview) return <div className="absolute inset-0 bg-ink-700" />;
  if (preview.type === 'image') {
    return (
      <img
        src={preview.src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
      />
    );
  }
  if (preview.type === 'video') {
    const fitClass = preview.fit === 'contain' ? 'object-contain' : 'object-cover';
    const scaleStyle = preview.scale ? { transform: `scale(${preview.scale})` } : undefined;
    return (
      <video
        src={preview.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        style={scaleStyle}
        className={`absolute inset-0 w-full h-full ${fitClass} bg-ink-900 transition-transform duration-700 group-hover/card:scale-105`}
      />
    );
  }
  if (preview.type === 'iframe') {
    return (
      <iframe
        src={preview.src}
        title={alt}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups"
        className="absolute inset-0 w-full h-full border-0 bg-paper pointer-events-none"
      />
    );
  }
  return null;
}

// SIDE 카드 — 좌측 큰 프리뷰 + 우측 콘텐츠 (Bold Editorial 스타일)
function PreviewRow({ p, index, total }) {
  const href = p.link || p.repo || (p.media?.type === 'pdf' ? p.media.src : undefined);
  const overviewRow = p.rows?.find((r) => r.label === '개요');
  const bodyText = overviewRow?.value || p.result;
  const stackLine = (p.tags || []).slice(0, 3).join(' · ').toUpperCase();
  const num = p.code?.replace(/[^0-9]/g, '') || String(index + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');

  return (
    <Reveal delay={index * 80}>
      <article className="group/card border border-paper/15 bg-ink-900 hover:border-highlight/40 transition-colors grid grid-cols-1 lg:grid-cols-2">
        {/* 좌측 프리뷰 */}
        <a
          href={href || '#'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.title} 바로가기`}
          className="relative aspect-video lg:aspect-auto lg:min-h-[360px] bg-ink-800 overflow-hidden border-b lg:border-b-0 lg:border-r border-paper/15"
        >
          <PreviewThumb preview={p.preview} alt={p.title} />
          {p.featured && (
            <span
              className="absolute top-3 left-3 bg-highlight text-ink-900 font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-xs"
              style={{ fontSize: '10px' }}
            >
              FEATURED
            </span>
          )}
          {/* hover gradient + LIVE DEMO */}
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-100" />
          <span className="absolute bottom-3 right-4 text-paper text-label font-extrabold uppercase tracking-wider">
            LIVE DEMO <span className="text-highlight" aria-hidden="true">→</span>
          </span>
        </a>

        {/* 우측 콘텐츠 */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col">
          <p className="text-micro font-extrabold uppercase tracking-widest text-highlight mb-4">
            SIDE {num} / {totalStr}
          </p>

          <h3
            className="font-extrabold text-paper leading-tight mb-5"
            style={{ fontSize: 'clamp(22px, 2vw, 30px)', letterSpacing: '-0.02em' }}
          >
            {p.title}
          </h3>

          {p.goal && (
            <p className="font-extrabold text-highlight leading-snug mb-5" style={{ fontSize: 'clamp(15px, 1.2vw, 17px)' }}>
              “{p.goal}”
            </p>
          )}

          {bodyText && (
            <p className="text-body text-ink-300 leading-relaxed">
              {bodyText}
            </p>
          )}

          <div className="mt-auto pt-6 border-t border-paper/15 flex items-center justify-between gap-4">
            {stackLine && (
              <p className="text-micro font-extrabold uppercase tracking-widest text-ink-300 truncate">
                {stackLine}
              </p>
            )}
            <div className="flex items-center gap-4 shrink-0">
              {p.media?.type === 'pdf' && p.media.src !== href && (
                <a
                  href={p.media.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label font-extrabold text-paper/80 hover:text-highlight transition-colors"
                >
                  PDF <span aria-hidden="true">↗</span>
                </a>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label font-extrabold text-highlight hover:text-highlight-soft transition-colors"
                >
                  VIEW <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

// 접기/펼치기 표시기 — ▼ 회전
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

// SIDE 그룹 — 헤더 클릭으로 접기/펼치기
function PersonalGroup({ items, open, onToggle }) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="w-full flex items-center gap-3 mb-7 md:mb-8 text-left hover:opacity-90 transition-opacity"
        >
          <span className="badge-yellow text-label">SIDE</span>
          <h3 className="text-heading md:text-title font-extrabold text-paper">
            개인 프로젝트
          </h3>
          <span className="flex-1 h-px bg-highlight/30 ml-1" />
          <span className="text-micro font-extrabold text-ink-300">
            {items.length} projects
          </span>
          <ToggleIndicator open={open} />
        </button>
      </Reveal>
      {open && (
        <div className="space-y-6 md:space-y-8">
          {items.map((p, i) => (
            <PreviewRow key={p.id} p={p} index={i} total={items.length} />
          ))}
        </div>
      )}
    </div>
  );
}

// WORK 회사 서브그룹 — 헤더 클릭으로 접기/펼치기
function CompanySubGroup({ company, items, open, onToggle }) {
  return (
    <div className="mb-10 last:mb-0">
      <Reveal>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="w-full flex items-center gap-3 mb-5 text-left hover:opacity-90 transition-opacity"
        >
          <span className="badge-yellow text-label">{company}</span>
          <span className="flex-1 h-px bg-highlight opacity-30" />
          <span className="text-micro font-extrabold text-ink-300">
            {items.length} {items.length > 1 ? 'projects' : 'project'}
          </span>
          <ToggleIndicator open={open} />
        </button>
      </Reveal>
      {open && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {items.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const company = PROJECTS.filter((p) => p.category === 'company');
  const personal = PROJECTS.filter((p) => p.category === 'personal');

  const companies = [];
  company.forEach((p) => {
    if (!companies.includes(p.company)) companies.push(p.company);
  });

  const [openMap, setOpenMap] = useState(() => {
    const init = { side: true };
    companies.forEach((c) => {
      init[`work:${c}`] = false;
    });
    return init;
  });

  const toggle = (key) =>
    setOpenMap((m) => ({ ...m, [key]: !m[key] }));

  return (
    <Section id="projects" tone="dark" kicker="Selected works" en="PROJECTS" ko="대표 프로젝트">
      {personal.length > 0 && (
        <PersonalGroup
          items={personal}
          open={openMap.side}
          onToggle={() => toggle('side')}
        />
      )}

      {company.length > 0 && (
        <div>
          <Reveal>
            <div className="flex items-baseline gap-3 mb-7 md:mb-8">
              <span className="badge-yellow text-label">WORK</span>
              <h3 className="text-heading md:text-title font-extrabold text-paper">
                회사 경력 프로젝트
              </h3>
            </div>
          </Reveal>
          {companies.map((c) => (
            <CompanySubGroup
              key={c}
              company={c}
              items={company.filter((p) => p.company === c)}
              open={openMap[`work:${c}`]}
              onToggle={() => toggle(`work:${c}`)}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
