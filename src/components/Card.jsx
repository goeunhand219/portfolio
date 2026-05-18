// Card — 흰 표면 + 검정 외곽 + 부드러운 그림자.

export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-paper rounded-card shadow-sm border border-ink-900/10 ${className}`}
    >
      {children}
    </div>
  );
}
