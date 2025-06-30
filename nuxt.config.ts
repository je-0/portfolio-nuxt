// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // SPA 모드로 설정 (새로고침 오류 해결)
  ssr: false,
  
  // 라우팅 설정
  router: {
    options: {
      strict: false
    }
  },
  
  nitro: {
    prerender: {
      routes: ["/", "/project/list"],
      crawlLinks: true,
    },
    // 빌드 출력 디렉토리를 dist로 변경
    output: {
      dir: "./dist",
    },
  },

  // CSS 설정
  css: ["~/assets/scss/ui.scss"],

  // 앱 설정
  app: {
    // baseURL 설정 (GitHub Pages 배포를 위해 레포지토리명 사용)
    baseURL: '/portfolio-nuxt/',

    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover",
      title: "LIM.JE.YOUNG",
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "/portfolio-nuxt/favicons/favicon_16.ico",
        },
        { rel: "stylesheet", href: "/portfolio-nuxt/lib/swiper.min.css" },
      ],
      // 외부 스크립트 로드 (절대 경로로 수정)
      script: [
        { src: "/portfolio-nuxt/lib/gsap.min.js", defer: true },
        { src: "/portfolio-nuxt/lib/ScrollTrigger.js", defer: true },
        { src: "/portfolio-nuxt/lib/swiper.min.js", defer: true },
      ],
    },
  },

  // 빌드 설정
  build: {
    transpile: [],
  },

  // Vite 설정 (정적 리소스 처리)
  vite: {
    // GitHub Pages 배포를 위한 publicPath 설정
    base: '/portfolio-nuxt/',
    
    // 정적 리소스 처리
    assetsInclude: [
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.gif",
      "**/*.svg",
      "**/*.woff",
      "**/*.woff2",
    ],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/base/_mixin.scss" as *;',
        },
      },
    },
  },
});
