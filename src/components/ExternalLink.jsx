// ExternalLink — 외부 링크 (밑줄 + 화살표).
// inline-flex/gap 을 쓰면 밑줄이 끊어지므로 inline + non-breaking space 로 처리.
// tone: 'light' (기본, 흰 배경용 검정 텍스트) | 'dark' (검정 배경용 흰 텍스트)

export default function ExternalLink({ href, children, className = '', tone = 'light' }) {
  const textClasses =
    tone === 'dark'
      ? 'text-paper hover:text-highlight decoration-highlight hover:decoration-paper'
      : 'text-ink-900 decoration-highlight hover:decoration-ink-900';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline whitespace-nowrap font-extrabold underline underline-offset-4 decoration-2 ${textClasses} ${className}`}
    >
      {children}
      <span aria-hidden="true">{' ↗'}</span>
    </a>
  );
}
