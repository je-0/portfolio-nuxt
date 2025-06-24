// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // 정적 사이트 생성을 위한 설정
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/', '/project/list']
    }
  },
  
  // CSS 설정
  css: ['~/assets/scss/ui.scss'],
  
  // 앱 설정
  app: {
    // baseURL 설정 (배포 환경에 따라 조정)
    baseURL: process.env.NODE_ENV === 'production' ? './' : '/',
    
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover',
      title: 'LIM.JE.YOUNG',
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicons/favicon_16.ico' }
      ],
      // 외부 스크립트 로드
      script: [
        { src: '/lib/gsap.min.js', defer: true },
        { src: '/lib/ScrollTrigger.js', defer: true },
        { src: '/lib/swiper.min.js', defer: true }
      ],
      // 외부 CSS 로드
      link: [
        { rel: 'stylesheet', href: '/lib/swiper.min.css' }
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
