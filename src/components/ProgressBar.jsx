import { useEffect, useRef, useState } from 'react';

// ProgressBar — 라벨 + 형광노랑 바.
// 진입 시 0 → percent 로 채워짐.
// tone: 'light' (검정 텍스트) | 'dark' (흰 텍스트)

export default function ProgressBar({ label, percent, tone = 'light' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const labelColor = tone === 'dark' ? 'text-paper' : 'text-ink-900';
  const trackBg = tone === 'dark' ? 'bg-ink-700' : 'bg-paper';
  const trackBorder = tone === 'dark' ? 'border-paper/30' : 'border-ink-900';

  return (
    <div ref={ref}>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className={`text-label font-extrabold ${labelColor}`}>{label}</span>
        <span
          className="font-display text-ink-900 bg-highlight px-1.5 py-0.5 rounded-xs border border-ink-900"
          style={{ fontSize: '14px', letterSpacing: '0.02em' }}
        >
          {percent}%
        </span>
      </div>
      <div
        className={`h-3 ${trackBg} rounded-pill overflow-hidden border-2 ${trackBorder}`}
      >
        <div
          className={`bar-fill ${visible ? 'is-visible' : ''}`}
          style={{ '--target': `${percent}%` }}
        />
      </div>
    </div>
  );
}
