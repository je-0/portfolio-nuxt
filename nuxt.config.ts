// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // 정적 사이트 생성을 위한 설정 - SPA 모드로 변경
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/', '/project/list'],
      crawlLinks: true
    },
    // 빌드 출력 디렉토리를 dist로 변경
    output: {
      dir: './dist'
    }
  },
  
  // CSS 설정
  css: ['~/assets/scss/ui.scss'],
  
  // 앱 설정
  app: {
    // baseURL 설정 (정적 배포를 위해 상대 경로 사용)
    baseURL: './',
    
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover',
      title: 'LIM.JE.YOUNG',
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: './favicons/favicon_16.ico' },
        { rel: 'stylesheet', href: './lib/swiper.min.css' }
      ],
      // 외부 스크립트 로드
      script: [
        { src: './lib/gsap.min.js', defer: true },
        { src: './lib/ScrollTrigger.js', defer: true },
        { src: './lib/swiper.min.js', defer: true }
      ]
    }
  },
  
  // 빌드 설정
  build: {
    transpile: []
  },
  
  // Vite 설정 (정적 리소스 처리)
  vite: {
    // 정적 리소스 처리
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.woff', '**/*.woff2'],
    
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) return 'assets/[name].[ext]'
            
            const info = assetInfo.name.split('.')
            const ext = info[info.length - 1]
            
            // 이미지 파일
            if (/\.(png|jpe?g|gif|svg|ico|webp)$/.test(assetInfo.name)) {
              return `images/[name].[ext]`
            }
            
            // 폰트 파일
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
              return `fonts/[name].[ext]`
            }
            
            // 기타 자산
            return `assets/[name].[ext]`
          }
        }
      }
    }
  }
})
