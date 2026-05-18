import { useEffect, useState } from 'react';

const ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Ability' },
  { id: 'about', label: 'Strength' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'samples', label: 'Samples' },
  { id: 'contact', label: 'Contact' },
];

export default function TopNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    ITEMS.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sticky top-0 z-30 bg-paper/90 backdrop-blur border-b border-ink-900/10">
      <ul className="flex gap-1 overflow-x-auto px-4 py-3 no-scrollbar">
        {ITEMS.map((it) => (
          <li key={it.id} className="shrink-0">
            <a
              href={`#${it.id}`}
              onClick={(e) => handleClick(e, it.id)}
              className={[
                'inline-flex items-center px-3 py-1.5 rounded-pill text-label font-extrabold transition-all',
                active === it.id
                  ? 'bg-ink-900 text-highlight'
                  : 'text-ink-500 hover:text-ink-900 hover:bg-ink-100',
              ].join(' ')}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
