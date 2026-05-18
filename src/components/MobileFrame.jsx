// MobileFrame — 반응형 컨테이너.
// mobile: 420px / md: 768px / lg: 1080px.
// 외곽: 옅은 베이지 / 내부: 흰 배경.

export default function MobileFrame({ children }) {
  return (
    <div className="min-h-screen w-full bg-beige-deep flex justify-center">
      <div className="w-full max-w-[420px] md:max-w-[768px] lg:max-w-[1280px] min-h-screen bg-paper relative shadow-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
}
