# Portfolio Nuxt.js

Vue.js 기반의 Nuxt 3 프레임워크를 사용하여 개발된 포트폴리오 웹사이트입니다.

## 🚀 프로젝트 개요

기존 Gulp 기반의 정적 HTML 포트폴리오를 현대적인 Nuxt.js 프레임워크로 마이그레이션한 프로젝트입니다.

### 주요 특징

- **Nuxt 3**: Vue.js 기반의 SSR(Server-Side Rendering) 프레임워크
- **SCSS**: 모듈화된 스타일 시스템
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **다크모드**: 사용자 선호도에 따른 테마 전환
- **애니메이션**: GSAP을 활용한 부드러운 인터랙션

## 📁 프로젝트 구조

```
portfolio-nuxt/
├── assets/
│   ├── scss/
│   │   ├── base/           # 기본 스타일 (색상, 폰트, 믹스인 등)
│   │   ├── layout/         # 레이아웃 관련 스타일
│   │   └── pages/          # 페이지별 스타일
│   └── images/             # 이미지 리소스
├── components/             # Vue 컴포넌트
├── layouts/               # 레이아웃 컴포넌트
├── pages/                 # 페이지 컴포넌트
├── plugins/               # Nuxt 플러그인
├── public/                # 정적 파일
│   ├── fonts/             # 폰트 파일
│   ├── images/            # 이미지 파일
│   └── lib/               # 외부 라이브러리
└── server/                # 서버 설정
```

## 🛠️ 기술 스택

### Frontend
- **Nuxt 3**: Vue.js 기반 SSR 프레임워크
- **Vue 3**: Composition API
- **SCSS**: CSS 전처리기
- **GSAP**: 애니메이션 라이브러리
- **Swiper**: 슬라이더 라이브러리

### Development
- **TypeScript**: 타입 안정성
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
# 개발 모드
npm run dev
# 또는
yarn dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build
# 또는
yarn build

# 프로덕션 서버 실행
npm run start
# 또는
yarn start
```

## 🎨 스타일 시스템

### SCSS 구조
- **Base**: 기본 스타일, 색상, 폰트, 믹스인
- **Layout**: 헤더, 푸터, 컨테이너 등 레이아웃 요소
- **Pages**: 페이지별 스타일

### 반응형 브레이크포인트
- **Mobile**: ~767px
- **Tablet**: 768px~1023px
- **Desktop**: 1024px 이상

### rem() 함수
픽셀을 rem 단위로 변환하는 커스텀 함수를 사용합니다:
```scss
// 사용법
font-size: rem(16px, 10px); // 1.6rem
margin: rem(20px, 10px);    // 2rem
```

## 📱 페이지 구성

### 메인 페이지 (`/`)
- 자기소개 섹션
- 경력 및 스킬 섹션
- 프로젝트 갤러리

### 프로젝트 페이지 (`/project/list`)
- 프로젝트 목록 (리스트/카드 뷰)
- 프로젝트 타입별 필터링
- 프로젝트 상세 레이어

## 🔧 주요 컴포넌트

### AppHeader
- 네비게이션 메뉴
- 반응형 헤더 디자인
- 스크롤 시 스타일 변경

### AppFooter
- 저작권 정보
- 다크모드 토글
- 맨 위로 이동 버튼

### ProjectLayer
- 프로젝트 상세 정보 모달
- 이미지 갤러리
- 프로젝트 설명

## 🎯 기능

### 다크모드
- 사용자 선호도 저장
- 실시간 테마 전환
- 부드러운 전환 애니메이션

### 애니메이션
- 스크롤 기반 애니메이션
- GSAP을 활용한 고성능 애니메이션
- 인터랙티브 요소

### 반응형 디자인
- 모든 디바이스에서 최적화된 경험
- 터치 친화적 인터페이스
- 접근성 고려

## 🚀 배포

### 정적 사이트 생성
```bash
npm run generate
# 또는
yarn generate
```

### Vercel 배포
1. GitHub 저장소 연결
2. Vercel 프로젝트 생성
3. 자동 배포 설정

## 📝 개발 가이드

### 컴포넌트 작성
```vue
<template>
  <div class="component-name">
    <!-- 템플릿 내용 -->
  </div>
</template>

<script setup lang="ts">
// 컴포넌트 로직
</script>

<style lang="scss" scoped>
// 컴포넌트 스타일
</style>
```

### 스타일 작성
```scss
// 믹스인 사용
@use '../base/mixin' as *;
@use '../base/color' as *;

.component {
  font-size: rem(16px, 10px);
  color: $MainColor;
  
  @include tablet {
    font-size: rem(18px, 10px);
  }
}
```

## 📞 연락처

프로젝트에 대한 문의사항이 있으시면 언제든지 연락주세요.
---

**참고**: 이 프로젝트는 기존 Gulp 기반 포트폴리오를 Nuxt.js로 마이그레이션한 결과물입니다.
