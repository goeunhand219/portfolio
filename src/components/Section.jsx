import SectionTitle from './SectionTitle';

// Section — 모든 섹션 공통 래퍼.
// tone: 'paper' (흰 배경) | 'beige' (옅은 베이지 음영) | 'dark' (검정)

export default function Section({ id, kicker, en, ko, children, tone = 'paper' }) {
  const bg =
    tone === 'beige'
      ? 'bg-beige'
      : tone === 'dark'
        ? 'bg-ink-900 text-paper'
        : 'bg-paper';
  return (
    <section
      id={id}
      className={`${bg} px-5 py-14 md:px-10 md:py-20 lg:px-16 lg:py-24 scroll-mt-16`}
    >
      {(en || ko) && <SectionTitle kicker={kicker} en={en} ko={ko} dark={tone === 'dark'} />}
      {children}
    </section>
  );
}
