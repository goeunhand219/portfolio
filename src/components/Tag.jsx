// Tag — 키워드 칩. 얇은 라인 사각 스타일.
// tone: 'yellow' (형광노랑 솔리드) | 'outline' (얇은 외곽) | 'soft' (베이지 라인) | 'dark'

export default function Tag({ children, tone = 'soft' }) {
  const styles = {
    yellow: 'bg-highlight text-ink-900 border border-ink-900',
    outline: 'bg-transparent text-ink-900 border border-ink-900',
    soft: 'bg-beige-deep text-ink-700 border border-ink-200',
    dark: 'bg-ink-900 text-highlight border border-ink-900',
  };
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-xs text-label font-bold whitespace-nowrap ${styles[tone]}`}
    >
      {children}
    </span>
  );
}
