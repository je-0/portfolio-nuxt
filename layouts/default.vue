<template>
  <div>
    <AppA11y />
    <div class="app">
      <AppHeader />
      <div class="app-container">
        <slot />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppA11y from '@/components/AppA11y.vue'

// UI 플러그인 기능을 Vue 컴포넌트로 변환
const { $window, $document, $body } = useNuxtApp()

// DOM 요소를 동적으로 찾는 함수들
const getElements = () => {
  return {
    appHeader: document.querySelector('.app-header'),
    appFooter: document.querySelector('.app-footer'),
    btnTop: document.querySelector('.js-btn-top'),
    motionItems: document.querySelectorAll('.js-motion-item'),
    layerWrap: document.querySelector('.layer-wrap'),
    layers: document.querySelectorAll('.layer'),
    layerOpenButtons: document.querySelectorAll('.js-layer-open'),
    toggleBtn: document.querySelector('.switch-box input'),
    toggleText: document.querySelector('.toggle-txt'),
    introElement: document.querySelector('.intro'),
    nuxtLinks: document.querySelectorAll('a[href]')
  }
}

// 정적 사이트 라우팅 처리
const initStaticRouting = () => {
  const { nuxtLinks } = getElements()
  
  nuxtLinks.forEach((link) => {
    const href = link.getAttribute('href')
    
    // 내부 링크인지 확인 (절대 경로이거나 상대 경로)
    if (href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#')) {
      
      // 기존 이벤트 리스너 제거
      link.removeEventListener('click', handleLinkClick)
      // 새 이벤트 리스너 추가
      link.addEventListener('click', handleLinkClick)
    }
  })
}

// 링크 클릭 처리
const handleLinkClick = (e: Event) => {
  e.preventDefault() // 기본 동작 방지
  
  const target = e.target as HTMLAnchorElement
  const href = target.getAttribute('href')
  
  if (!href) return
  
  // href에서 실제 경로 추출
  let path = href
  if (path.startsWith('./')) {
    path = path.substring(2)
  } else if (path.startsWith('/')) {
    path = path.substring(1)
  }
  
  console.log('페이지 이동 시도:', path)
  
  // 현재 페이지와 같은 링크는 무시
  if (path === getCurrentPagePath()) {
    console.log('현재 페이지와 동일, 이동 무시')
    return
  }
  
  // 페이지 이동 (현재 위치에 따라 경로 계산)
  try {
    let targetUrl = ''
    const currentPath = getCurrentPagePath()
    
    if (path === '' || path === 'index.html') {
      // 메인 페이지로 이동
      if (currentPath === '') {
        targetUrl = './index.html'
      } else {
        // project/list에서 메인으로
        targetUrl = '../../index.html'
      }
    } else {
      // 다른 페이지로 이동
      if (currentPath === '') {
        // 메인에서 project/list로
        targetUrl = `./${path}/index.html`
      } else {
        // project/list에서 다른 페이지로
        targetUrl = `../${path}/index.html`
      }
    }
    
    console.log('현재 경로:', currentPath)
    console.log('이동할 URL:', targetUrl)
    window.location.href = targetUrl
    
  } catch (error) {
    console.error('페이지 이동 실패:', error)
    // 폴백: 일반적인 링크 동작
    window.location.href = href
  }
}

// 현재 페이지 경로 가져오기
const getCurrentPagePath = () => {
  const currentPath = window.location.pathname
  const pathSegments = currentPath.split('/').filter(segment => segment)
  
  if (pathSegments.length === 0) return ''
  if (pathSegments[pathSegments.length - 1] === 'index.html') {
    pathSegments.pop()
  }
  
  return pathSegments.join('/')
}

// intro 섹션 초기화
const initIntro = () => {
  const { introElement } = getElements()
  if (introElement) {
    introElement.classList.add('is-on')
    console.log('intro is-on 클래스 추가됨!')
  }
}

// Scroll Top 기능
const initScrollTop = () => {
  const { btnTop } = getElements()
  if (btnTop) {
    btnTop.removeEventListener('click', scrollToTop)
    btnTop.addEventListener('click', scrollToTop)
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  })
}

// 스크롤 이벤트 처리
const handleScroll = () => {
  const st = window.scrollY
  const winHt = window.innerHeight
  const winW = window.innerWidth
  const { motionItems, appHeader, btnTop } = getElements()

  // 모션 아이템 처리
  motionItems.forEach((item) => {
    const secTop = item.getBoundingClientRect().top + st
    const threshold = winW > 640 ? winHt / 1.5 : winHt / 2
    
    if (st > secTop - threshold) {
      item.classList.add('is-motion-active')
    }
  })

  // 헤더/TOP 버튼 처리
  if (st > 0) {
    appHeader?.classList.add('is-active')
    btnTop?.classList.add('is-active')
  } else {
    appHeader?.classList.remove('is-active')
    btnTop?.classList.remove('is-active')
  }
}

// 레이어 기능
const layerAction = {
  open: function(layerName: string) {
    const { layerWrap } = getElements()
    const layer = layerWrap?.querySelector(`[data-layer-name="${layerName}"]`)
    
    if (layer) {
      layer.parentElement?.classList.add('is-active')
      document.body.classList.add('is-hidden')
      
      layerWrap?.querySelectorAll('.layer').forEach((layerItem) => {
        if (layerName === layerItem.getAttribute('data-layer-name')) {
          layerItem.classList.add('is-active')
          layerItem.querySelector('.btn-layer-close')?.classList.add('is-active')
          if (layerWrap) layerWrap.scrollTop = 0
        } else {
          layerItem.classList.remove('is-active')
        }
      })
    } else { 
      layerWrap?.classList.remove('is-active')
      document.body.classList.remove('is-hidden')
    }
  },
  
  close: function() {
    const { layerWrap } = getElements()
    const layers = layerWrap?.querySelectorAll('.layer')
    
    layerWrap?.classList.remove('is-active')
    layers?.forEach((layer) => {
      layer.classList.remove('is-active')
      layer.querySelector('.btn-layer-close')?.classList.remove('is-active')
    })
    document.body.classList.remove('is-hidden')
  },
  
  bind: function() {
    const { layerOpenButtons } = getElements()
    layerOpenButtons.forEach((obj) => {
      obj.removeEventListener('click', handleLayerOpen)
      obj.addEventListener('click', handleLayerOpen)
    })
  }
}

const handleLayerOpen = (e: Event) => {
  e.stopPropagation()
  const target = e.target as HTMLElement
  const layerName = target.getAttribute('data-layer-name')
  if (layerName) layerAction.open(layerName)
}

// 레이어 닫기 이벤트
const initLayerClose = () => {
  const { layers } = getElements()
  layers.forEach((layer) => {
    layer.removeEventListener('click', handleLayerClose)
    layer.addEventListener('click', handleLayerClose)
  })
}

const handleLayerClose = (e: Event) => {
  const target = e.target as HTMLElement
  if (target.matches('.btn-layer-close, .js-layer-close')) {
    e.stopPropagation()
    layerAction.close()
  }
}

// 다크모드 기능
const initDarkMode = () => {
  const { toggleBtn, toggleText } = getElements()
  if (toggleBtn) {
    toggleBtn.removeEventListener('change', handleDarkMode)
    toggleBtn.addEventListener('change', handleDarkMode)
  }
}

const handleDarkMode = (e: Event) => {
  const target = e.target as HTMLInputElement
  const { toggleText } = getElements()
  
  document.body.classList.toggle('dark-mode', target.checked)
  if (toggleText) {
    toggleText.textContent = target.checked ? '라이트 모드' : '다크 모드'
  }
}

// 모든 기능 초기화
const initAll = () => {
  initIntro()
  initStaticRouting()
  initScrollTop()
  initLayerClose()
  initDarkMode()
  layerAction.bind()
}

// Vue 생명주기 훅 사용
onMounted(() => {
  console.log('UI 플러그인이 로드되었습니다!')
  
  // 스크롤 이벤트 등록
  window.addEventListener('scroll', handleScroll)
  
  // 초기 로드 시 초기화
  initAll()
  
  // DOM 변경 감지
  const observer = new MutationObserver(() => {
    setTimeout(initAll, 100)
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
})

onUnmounted(() => {
  // 이벤트 리스너 정리
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* CSS 변수로 폰트 경로 설정 */
:root {
  --font-path: './fonts/';
}
</style> 