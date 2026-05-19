// profile.js — 모든 콘텐츠를 한 곳에 모아 관리.
// 사진/PDF/영상은 public/assets/ 하위 (정적 서빙).

export const PROFILE = {
  name: '손고은',
  tagline: '학습자 경험으로 교육사업을 만드는 기획자',
  role: '교육사업 기획 · 학습 경험 디자인',
  blurb:
    '유아교육 현장 8년 + 디지털 콘텐츠·사업 기획 경험으로, 학습자 경험을 비즈니스 임팩트로 연결합니다.',
  photo: './assets/photos/profile-bw-1.png',
  email: 'goeunhand219@gmail.com',
  location: '경기 화성시',
  hashtags: ['교육사업기획', '학습경험디자인', '콘텐츠기획', 'B2G·B2B', 'PM'],
  stats: [
    { num: '8.4', unit: 'YRS', label: '경력' },
    { num: '3', unit: 'AWARDS', label: '공모전·표창' },
    { num: '2', unit: 'CERTS', label: '국가자격' },
  ],
};

// STRENGTH — 핵심역량 3카드. 큰 번호 + 2줄 타이틀 + 본문 + 검증 라인.
export const STRENGTHS = [
  {
    no: '01',
    title: '현장 리서치를',
    subtitle: '기획의 근거로',
    body:
      '교사·원장 인터뷰와 운영 데이터로 가설을 검증합니다. 추측이 아닌 관찰에서 출발해, 의사결정에 명확한 근거를 만듭니다.',
    proof: { label: '검증 방법', value: '현장 관찰 · 1:1 인터뷰 · 설문 · 운영 로그' },
  },
  {
    no: '02',
    title: '신규 상품',
    subtitle: '0 → 1 경험',
    body:
      '기존에 없던 오프라인 채널 신규 상품을 주도. 시장조사부터 외주 디렉팅, 영업 자료까지 — 출시 한 달 만에 목표 계약을 달성했습니다.',
    proof: { label: '증거', value: '유아 블렌디드 러닝 신규상품 (아이스크림에듀)' },
  },
  {
    no: '03',
    title: '출시 이후',
    subtitle: '운영까지 책임',
    body:
      '기획이 끝이 아닙니다. 교사 교육·LMS 개선·이슈 대응까지, 런칭 이후의 안정화 단계를 직접 마무리합니다.',
    proof: { label: '완결 영역', value: 'HRD · LMS UX · 부서 협업' },
  },
];

// INTRODUCTION — Input / Output 두 컬럼 구조.
export const INTRODUCTION = {
  input: {
    label: '저는 이렇게 성장합니다',
    items: [
      { strong: '빠른 흡수', body: '새로운 트렌드와 지식을 가지고 스펀지처럼 빠르게 흡수합니다.' },
      { strong: '열린 귀', body: '타인의 피드백을 성장의 기회로 받아들입니다.' },
      { strong: '다양한 경험', body: '유아교육·LMS·PM 부트캠프를 통해 실전 감각을 익혔습니다.' },
    ],
  },
  output: {
    label: '저는 이런 결과를 만듭니다',
    items: [
      { strong: '신선한 기획', body: '트렌드를 반영해 톡톡 튀는 아이디어를 제안합니다.' },
      { strong: '직관적 산출물', body: '기획 의도를 시각화해 모두가 이해할 수 있게 만듭니다.' },
      { strong: '문서화 능력', body: 'PRD·IA·매뉴얼로 흩어진 생각을 논리적 문서로 정리합니다.' },
    ],
  },
};

// SKILLS — 도메인 / 도구 두 그룹. 각 항목은 percent 보유.
export const SKILLS = {
  domain: [
    { label: '교육사업 기획·운영전략', percent: 88 },
    { label: '학습 경험 설계 (LX)', percent: 90 },
    { label: '교육 콘텐츠 기획·커리큘럼', percent: 92 },
    { label: '사용자 인터뷰·니즈 분석', percent: 88 },
  ],
  tools: [
    { label: 'Figma', percent: 80 },
    { label: 'Notion · Jira', percent: 88 },
    { label: 'Premier Pro', percent: 75 },
    { label: 'PowerPoint · Excel', percent: 92 },
  ],
  tags: ['Google AI Studio', 'Claude', 'Google Workspace', 'Zoom', 'Photoshop', 'TOEIC Speaking IM3'],
};

// EXPERIENCE — 회사별 카드 + 활동 사진 (사용자 매핑 받으면 정확하게 반영).
export const EXPERIENCE = [
  {
    company: '㈜아이스크림에듀',
    role: '대리 · 교육 콘텐츠 기획 및 운영',
    period: '2023.03 ~ 2025.01',
    duration: '1년 11개월',
    summary:
      '유아 블렌디드 러닝 콘텐츠 사업 전 과정을 주도. 신규 모델로 출시 한 달 만에 예상 계약성과 충족.',
    highlights: [
      '유아 디지털교육 표준수업안 기획·제작 (커리큘럼·개별수업안)',
      '활동지 외주 선정·일정관리·산출물 검토·배포',
      'LMS 기능 개선 — Figma로 개발팀 협업 주도',
      '교사·원장 신입/월례교육 강의안·교육영상 제작 (Premier Pro)',
      '외부 강사 특강·이벤트·사업설명회 기획',
    ],
  },
  {
    company: 'LG사랑어린이집',
    role: '주임/계장 · 교육기획',
    period: '2013.03 ~ 2019.07',
    duration: '6년 5개월',
    summary:
      '유아 맞춤형 교육 프로그램 기획·운영, 기관 운영관리. 누리과정 시범 어린이집 선정, 평가 인증 2회 우수 통과.',
    highlights: [
      '연령별 발달특성에 따른 교육프로그램 기획·운영',
      '독서·영어·수과학 등 특화 프로그램 설계 (공모전 최우수상·장려상)',
      '학부모 상담·운영위원회·오리엔테이션·간담회 운영',
      '교사 교육·멘토링 프로그램 진행',
      '협력업체(관공서·병원·교재교구·시설설비) 소통 및 회계 관리',
    ],
  },
];

// PROJECTS — 대표 프로젝트. category: 'company' | 'personal'.
// 회사 경력 프로젝트 먼저, 개인 프로젝트 나중. ProjectsSection 에서 그룹별 렌더.
export const PROJECTS = [
  // ── 회사 경력 프로젝트 ──
  {
    id: 'blended-learning',
    category: 'company',
    company: '아이스크림에듀',
    code: 'WORK 01',
    featured: true,
    title: '유아 블렌디드 러닝 신규상품 기획',
    subtitle: '기존에 없던 오프라인 채널 신규 상품 · 사업 전 과정 주도 · 출시 한 달 만에 목표 계약 달성',
    rows: [
      { label: '프로젝트명', value: '유아 블렌디드 러닝 신규상품 기획' },
      {
        label: '주요목표',
        value: '자사 디지털 콘텐츠를 활용한 오프라인 채널용 신규 상품을 기획·출시',
      },
      {
        label: '개요',
        value: '디지털 콘텐츠로 시작해 오프라인 활동지·교구로 마무리되는 블렌디드 러닝 커리큘럼. 공부방·학원 운영자가 추가 준비 없이 바로 수업할 수 있도록 강의안·교재까지 일체화 패키징.',
      },
      {
        label: '핵심기여',
        value: '신규 사업의 0→1 전 과정에 핵심 담당자로 참여 — 시장·사용자 인터뷰로 니즈 도출 → 커리큘럼·상품 구조 설계 → 오프라인 콘텐츠 외주 디렉팅 → 영업 자료·교사 교육까지. 기존에 없던 오프라인 채널 파이프라인 신설.',
      },
    ],
    tags: ['신규사업기획주도', '커리큘럼 설계', '오프라인 채널 개척', '사용자 인터뷰'],
  },
  {
    id: 'content-operations',
    category: 'company',
    company: '아이스크림에듀',
    code: 'WORK 02',
    title: '디지털 학습 콘텐츠 운영',
    subtitle: 'LMS 개선 + 현장 이슈 대응 + 물류 협업',
    rows: [
      { label: '프로젝트명', value: '디지털 학습 콘텐츠 운영 및 관리' },
      { label: '주요목표', value: '현장 사용자(교사/원장)의 콘텐츠 사용 경험을 개선하고, 운영 안정성을 확보' },
      {
        label: '개요',
        value: 'LMS 기능 개선(사용자 인터뷰 → Figma 시안 → 개발팀 협업), 디지털 콘텐츠 현장 이슈 관리·해결, 교재 출고 물류팀 협업까지 운영 전반을 담당.',
      },
      {
        label: '핵심기여',
        value: 'LMS 개선안 정의·시각화·개발 일정 조율, 현장 이슈 대응 프로세스 수립, 부서 간 협업 주도. 사용성 향상 + 운영 안정화.',
      },
    ],
    tags: ['콘텐츠 운영', 'LMS', '사용자 리서치', 'Figma', '부서 협업'],
  },
  {
    id: 'teacher-training-content',
    category: 'company',
    company: '아이스크림에듀',
    code: 'WORK 03',
    title: '교사·원장 대상 교육 콘텐츠 기획',
    subtitle: '신입/월례교육 강의안 + 교육영상 + 메뉴얼',
    rows: [
      { label: '프로젝트명', value: '교사·원장 대상 교육 콘텐츠' },
      { label: '주요목표', value: '신입·월례 교육의 일관성을 확보하고, 현장 활용도를 높이는 교육 자산 구축' },
      {
        label: '개요',
        value: '강의안 구성, 교수 시연 영상 제작(Premier Pro), 교육 메뉴얼(책자) 제작까지 전 과정 수행. 초중등 표준수업안 개정연구를 위해 지사별 우수센터 선발 및 간담회 진행.',
      },
      {
        label: '핵심기여',
        value: '교육 콘텐츠 기획·제작·운영 전 과정. 사용자 만족도 향상 + 충성 고객 확보에 기여.',
      },
    ],
    tags: ['HRD', '교육영상 제작', '강의안', '메뉴얼 제작', 'Premier Pro'],
  },
  {
    id: 'external-events',
    category: 'company',
    company: '아이스크림에듀',
    code: 'WORK 04',
    title: '외부 활동 기획·운영',
    subtitle: '외부 강사 특강·이벤트 전 과정',
    rows: [
      { label: '프로젝트명', value: '외부 강사 특강·이벤트' },
      { label: '주요목표', value: '외부 전문가 특강·이벤트로 교사·고객의 학습 동기를 자극하고 브랜드 신뢰도 강화' },
      {
        label: '개요',
        value: '외부 강사 섭외, 일정 조율, 포스터 제작, 행사 운영까지 특강·이벤트 전 과정 주도.',
      },
      {
        label: '핵심기여',
        value: '강사 섭외, 행사 운영, 포스터·자료 제작. 참여자 만족도와 브랜드 신뢰도 강화.',
      },
    ],
    tags: ['이벤트 기획', '강사 섭외', '행사 운영', '디자인 협업'],
  },
  {
    id: 'parent-teacher-communication',
    category: 'company',
    company: 'LG사랑어린이집',
    code: 'WORK 05',
    title: '학부모·교사 커뮤니케이션 운영',
    subtitle: '운영위원회 + 부모 상담·간담회 + 교사 멘토링',
    rows: [
      { label: '프로젝트명', value: '학부모·교사 커뮤니케이션' },
      { label: '주요목표', value: '학부모·교사와 정기 소통 채널을 구축해 신뢰 기반 운영' },
      {
        label: '개요',
        value: [
          '① 운영위원회 정기 개최 — 학부모·외부 위원과 운영 방향 논의',
          '② 부모 상담·오리엔테이션·간담회 — 가정-기관 연계 강화',
          '③ 교사 교육·멘토링 — 신입/현직 교사 성장 지원',
        ],
      },
      {
        label: '핵심기여',
        value: [
          '운영위원회 의제 설정·회의 운영',
          '부모 간담회·상담으로 피드백 수집 → 운영 반영',
          '교사 멘토링 프로그램 진행',
        ],
      },
    ],
    tags: ['이해관계자 커뮤니케이션', '운영위원회', '학부모 상담', '교사 멘토링'],
  },
  {
    id: 'external-cooperation',
    category: 'company',
    company: 'LG사랑어린이집',
    code: 'WORK 06',
    title: '대외 협력',
    subtitle: '정부 시범 운영 · 평가 인증 · 파트너 네트워크',
    rows: [
      { label: '프로젝트명', value: '대외 협력 (정부·평가·파트너)' },
      { label: '주요목표', value: '정부 정책·평가·외부 파트너 협력으로 기관 신뢰도 확보' },
      {
        label: '개요',
        value: [
          '① 누리과정 시범 어린이집 — 초기 작업 참여 + 기관 대표 회의·세미나 참석',
          '② 평가 인증 2회 우수 통과 — 평가위원 인터뷰 대응 + 교사 스터디 그룹 운영',
          '③ 관공서·병원·교재교구·시설설비 업체 협력 네트워크 운영',
        ],
      },
      {
        label: '핵심기여',
        value: [
          '시범 운영 초기 참여 및 회의·세미나 참석',
          '평가위원 인터뷰 대응 + 교사 스터디 운영',
          '다층 파트너 네트워크 관리 → 지자체 협력 강화',
        ],
      },
    ],
    tags: ['B2G', '누리과정', '평가 인증', '대외 협력', '파트너십'],
  },
  {
    id: 'contest-programs',
    category: 'company',
    company: 'LG사랑어린이집',
    code: 'WORK 07',
    title: '공모전 출전 보육 프로그램 기획',
    subtitle: '3건 출전 · 최우수상 + 장려상 수상 · 정서·자연·안전 영역 자체 기획',
    rows: [
      { label: '프로젝트명', value: '공모전 출전 보육 프로그램 (총 3건)' },
      {
        label: '주요목표',
        value: '현장에서 발굴한 문제의식을 자체 프로그램으로 설계해, 외부 공모전에서 검증받기',
      },
      {
        label: '개요',
        value: [
          '① 마음 헤아리기 프로그램 (정서) — 아동학대 예방 정서 케어 프로그램. 교사·아동·부모 통합 운영. → 직장보육지원센터 최우수상 (2015)',
          '② 숲체험 특성화 프로그램 (자연) — 자연 속 오감·정서·인지 발달 프로그램. 연간 커리큘럼·교사 교육·안전 매뉴얼 통합. → 푸르니재단 장려상 (2015)',
          '③ 연령별 안전교육 프로그램 (안전) — 발달 단계별 안전 학습 경험 설계. → 직장보육지원센터 공모전 출전 (2016)',
        ],
      },
      {
        label: '핵심기여',
        value: '3건 모두 컨셉·콘텐츠·운영 전 과정을 직접 기획. 정서·자연·안전 세 영역에서 자체 프로그램 개발 역량 입증.',
      },
    ],
    tags: ['프로그램 기획', '공모전 수상', '정서·자연·안전 교육', '운영'],
  },
  {
    id: 'age-specific-curriculum',
    category: 'company',
    company: 'LG사랑어린이집',
    code: 'WORK 08',
    title: '연령별 맞춤 교육 프로그램',
    subtitle: '독서·영어·수과학 발달 단계별 특화',
    rows: [
      { label: '프로젝트명', value: '연령별 맞춤 교육 프로그램' },
      { label: '주요목표', value: '연령별 발달 특성에 맞춘 영역별 학습 경험 차별화' },
      {
        label: '개요',
        value: [
          '연간·월간·주간 단위 연령별 교육 프로그램 기획·운영',
          '독서·영어·수과학 등 영역별 특화 프로그램 설계',
        ],
      },
      {
        label: '핵심기여',
        value: [
          '커리큘럼 설계·운영',
          '교사 코칭으로 현장 일관성 확보',
        ],
      },
    ],
    tags: ['커리큘럼 설계', '연령별 발달', '특화 프로그램'],
  },

  // ── 개인 프로젝트 ──
  {
    id: 'wizard-school',
    category: 'personal',
    code: 'SIDE 01',
    featured: true,
    title: '어린이 경제 마법사 학교',
    subtitle: '7~9세 어린이 경제 교육 앱 프로토타입',
    goal: '아이가 소비를 기록할 때 그 순간이 "마법 의식"처럼 느껴지는 경제 교육 경험',
    result: 'Vite + React + Tailwind 모바일 우선 프로토타입 구현 · 시나리오·화면 흐름 완성',
    rows: [
      { label: '프로젝트명', value: '어린이 경제 마법사 학교' },
      { label: '주요목표', value: '아이가 소비를 기록할 때 그 순간이 "마법 의식"처럼 느껴지는 경험' },
      {
        label: '개요',
        value: '마법사 세계관 기반의 게이미피케이션 경제 교육 앱. 매일 5분 마법 수업·소비 기록·감정 태깅으로 자기 성찰 게임 경험을 제공.',
      },
      {
        label: '핵심기여',
        value: '컨셉·시나리오 설계, 화면 흐름 정의, Vite + React + Tailwind 모바일 우선 프로토타입 구현',
      },
    ],
    tags: ['교육 콘텐츠 기획', '게이미피케이션', '아동 UX'],
    link: 'https://edu-psi-ruddy.vercel.app',
    preview: { type: 'video', src: './assets/sites/wizard-school.mov', fit: 'contain', scale: 1.5 },
  },
  {
    id: 'earth-project',
    category: 'personal',
    code: 'SIDE 02',
    featured: true,
    title: 'THE EARTH PROJECT',
    subtitle: '메타버스 게이미피케이션 기반 환경 교육 콘텐츠',
    goal: '메타버스 환경에서 게이미피케이션으로 유아 환경 감수성 기르기',
    result: '컨셉 기획 · 시나리오 설계 · 시연 영상 제작 (유튜브 공개)',
    rows: [
      { label: '프로젝트명', value: 'THE EARTH PROJECT' },
      { label: '주요목표', value: '메타버스 환경에서 게이미피케이션으로 유아 환경 감수성 기르기' },
      {
        label: '개요',
        value: '교육 메타버스 안에서 게임 메커닉을 활용해 학습자 몰입을 높이고, 환경 감수성을 기르는 유아 교육 콘텐츠 기획.',
      },
      { label: '핵심기여', value: '컨셉 기획·시나리오 설계·시연 영상 제작' },
    ],
    tags: ['메타버스', '게이미피케이션', '환경 교육', '콘텐츠 기획'],
    link: 'https://youtu.be/V31xtw8Ym1k',
    media: { type: 'youtube', id: 'V31xtw8Ym1k', label: 'THE EARTH 유튜브 열어보기' },
    preview: { type: 'video', src: './assets/videos/the%20earth%20vedio.mp4' },
  },
  {
    id: 'neo-senior',
    category: 'personal',
    code: 'SIDE 03',
    title: 'NEO Senior Suite',
    subtitle: '시니어 시장 신상품 제안 + 3-role 인터랙티브 프로토타입',
    goal: '시니어 시장 신규 상품 컨셉 정의 + 3-role(시니어·종사자·보호자) 사용자 검증',
    result: '시장조사·페르소나·제안서·IA·디자인 토큰 정의 + 인터랙티브 데모 구현',
    rows: [
      { label: '프로젝트명', value: 'NEO Senior Suite (시니어 상품 개발)' },
      { label: '주요목표', value: '시니어 시장을 위한 신규 상품 컨셉을 정의하고, 시니어 / 종사자 / 보호자 3개 사용자 역할로 검증' },
      {
        label: '개요',
        value: '시장 조사·페르소나 분석으로 신규 상품을 제안하고, IA·플로우·UX 라이팅·디자인 토큰까지 정의하여 인터랙티브 프로토타입으로 구현.',
      },
      {
        label: '핵심기여',
        value: '시장 조사·페르소나·제안서 작성, IA·디자인 토큰 정의, 인터랙티브 데모 구현',
      },
    ],
    tags: ['시니어 시장', '시장 분석', '제안서', '서비스 기획', 'IA 설계'],
    link: 'https://neoseniorsuite.vercel.app',
    media: { type: 'pdf', src: './assets/pdfs/portfolio-senior-product-proposal.pdf' },
    preview: { type: 'video', src: './assets/sites/neo-senior.mov' },
  },
  {
    id: 'special-edu-content',
    category: 'personal',
    code: 'SIDE 04',
    title: '특수교육 국어과 디지털 콘텐츠',
    subtitle: '특수교육 대상 학습자를 위한 콘텐츠 기획안',
    goal: '특수교육 대상 학습자 특성에 맞춘 디지털 학습 경험 설계',
    result: '국어과 콘텐츠 기획서 작성 · 학습목표·인터랙션 시나리오·평가 기준 정의',
    rows: [
      { label: '프로젝트명', value: '특수교육 국어과 디지털 콘텐츠' },
      { label: '주요목표', value: '특수교육 대상 학습자에게 적합한 디지털 학습 경험 설계' },
      {
        label: '개요',
        value: '특수교육 국어과 교육과정에 맞춘 콘텐츠 기획서. 학습자 특성·학습 목표·인터랙션 시나리오·평가 기준 정의.',
      },
      { label: '핵심기여', value: '전체 기획·문서 작성' },
    ],
    tags: ['특수교육', '디지털 콘텐츠', '학습 설계'],
    link: './assets/pdfs/portfolio-special-education-korean.pdf',
    media: { type: 'pdf', src: './assets/pdfs/portfolio-special-education-korean.pdf' },
    preview: { type: 'image', src: './assets/canva/special-edu-pages/page-01.jpg' },
  },
];

export const AWARDS = [
  {
    year: 2018,
    title: '보육교사유공자표창',
    org: '서울영등포구의회',
    note: '보육 현장 기여 공로',
  },
  {
    year: 2015,
    title: '우수보육프로그램 공모전 최우수상',
    org: '직장보육지원센터',
    note: '아동학대예방을 위한 마음 헤아리기 프로그램',
  },
  {
    year: 2015,
    title: '특성화 프로그램 공모전 장려상',
    org: '푸르니 보육지원재단',
    note: '숲체험 특성화 프로그램',
  },
];

export const EDUCATION = {
  school: {
    name: '서경대학교',
    major: '아동학과',
    period: '2007.03 ~ 2011.02',
  },
  overseas: {
    location: 'San Jose, California, USA',
    period: '2020.03 ~ 2022.02',
    duration: '2년',
    desc: '거주 + Golden Gate Language School 어학연수 (Intensive English, 6개월)',
  },
  certs: [
    { year: '2022.06', name: '어린이집 원장 자격증', org: '보건복지부' },
    { year: '2014.03', name: '보육교사 1급', org: '보건복지부' },
  ],
  trainings: [
    {
      period: '2025.08 ~ 2025.09',
      name: 'SNS 마케터 양성과정 수료',
    },
    {
      period: '2022.06 ~ 2022.08',
      name: '제로베이스 PM 부트캠프 4기',
      desc: 'AARRR · AB Test · PRD · IA · MoSCoW 등 PM 핵심 역량',
    },
    {
      period: '2022.08 ~ 2022.11',
      name: 'Figma UI디자인 입문 (인프런)',
      desc: '와이어프레임·프로토타이핑',
    },
    {
      period: '2022.02 ~ 2022.05',
      name: 'Axure RP 9, 10 (인프런)',
    },
    {
      period: '2022.03 ~ 2022.04',
      name: '원장사전직무교육',
    },
  ],
};

export const CONTACT = {
  email: 'goeunhand219@gmail.com',
  resumePdf: './assets/pdfs/resume-son-goeun.pdf',
  videos: [
    { id: 'V31xtw8Ym1k', title: "게이미피케이션 'THE EARTH PROJECT' 기획안" },
    { id: 'ItQpfh0H8Go', title: '포트폴리오 및 자기소개 영상' },
    { id: '1xPsX0suDeY', title: '유아교육플랫폼기획안' },
  ],
};
