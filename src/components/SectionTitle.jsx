// SectionTitle — 두꺼운 영문 디스플레이 헤더 (Anton).
// 데스크톱에서 더 크게.

export default function SectionTitle({ kicker, en, ko, dark = false }) {
  const accent = dark ? 'text-highlight' : 'text-ink-900';
  const sub = dark ? 'text-ink-300' : 'text-ink-500';
  return (
    <header className="mb-8 md:mb-12">
      {kicker && (
        <p className={`text-micro font-bold uppercase tracking-widest mb-2 ${sub}`}>
          {kicker}
        </p>
      )}
      <h2
        className={`font-display uppercase ${accent}`}
        style={{ fontSize: 'clamp(40px, 9vw, 96px)', lineHeight: 0.95, letterSpacing: '0.01em' }}
      >
        {en}
      </h2>
      {ko && <p className={`text-label md:text-body mt-2 ${sub}`}>{ko}</p>}
    </header>
  );
}
