/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 화이트 메인 + 옅은 베이지 음영 + 검정 + 형광노랑.
        beige: {
          DEFAULT: '#F8F4EC', // 옅은 음영 (섹션 구분용)
          soft: '#FCFAF5',     // 더 옅은 음영
          deep: '#EFE8D8',     // 외곽 프레임 (조금 더 진함)
        },
        ink: {
          900: '#0A0A0A', // 본문/타이틀
          800: '#1A1A1A',
          700: '#2C2924',
          500: '#5C564D',
          400: '#8A8378',
          300: '#B8B0A2',
          200: '#D9D2C2',
          100: '#E5DECA',
        },
        // 형광노랑 — 강조 배지/하이라이트 (CSS box-decoration-break 도 사용)
        highlight: {
          DEFAULT: '#DCFF1F',
          soft: '#EAFF6A',
          deep: '#B8E600',
        },
        paper: '#FFFFFF', // 카드/표면
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'Pretendard', '"Apple SD Gothic Neo"', 'system-ui', 'sans-serif'],
        display: ['Anton', '"Pretendard Variable"', 'Pretendard', 'system-ui', 'sans-serif'],
        serif: ['"Gowun Batang"', 'serif'],
      },
      fontSize: {
        micro: ['11px', { lineHeight: '1.5', letterSpacing: '0.06em' }],
        label: ['13px', { lineHeight: '1.5' }],
        body: ['15px', { lineHeight: '1.65' }],
        heading: ['20px', { lineHeight: '1.35', letterSpacing: '-0.02em' }],
        title: ['28px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        display: ['44px', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        mega: ['64px', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
      },
      borderRadius: { xs: '6px', sm: '10px', card: '14px', lg: '20px', pill: '999px' },
      boxShadow: {
        sm: '0 1px 2px rgba(10,10,10,0.04), 0 2px 6px rgba(10,10,10,0.03)',
        md: '0 4px 12px rgba(10,10,10,0.06), 0 1px 3px rgba(10,10,10,0.04)',
        lg: '0 12px 32px rgba(10,10,10,0.10), 0 2px 8px rgba(10,10,10,0.05)',
        focus: '0 0 0 3px rgba(220,255,31,0.6)',
        cta: '0 6px 0 0 #0A0A0A',
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out forwards',
        'rise-in': 'riseIn 700ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
