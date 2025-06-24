export default defineNuxtPlugin(() => {
  // Global Variables
  const $window = window;
  const $document = document;
  const $scrollBody = document.documentElement || document.body;
  const $body = document.body;

  // Global Variables
  let winW = $window.innerWidth;
  let winH = $window.innerHeight;
  let docH = $document.documentElement.scrollHeight;
  let st = $window.scrollY;

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
      toggleBtn: document.querySelector('.switch-box input') as HTMLInputElement,
      toggleText: document.querySelector('.toggle-txt')
    }
  }

  // Scroll Top 기능
  const initScrollTop = () => {
    const { btnTop } = getElements()
    if (btnTop) {
      // 기존 이벤트 리스너 제거
      btnTop.removeEventListener('click', scrollToTop)
      // 새 이벤트 리스너 추가
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
    const st = $window.scrollY
    const winHt = $window.innerHeight
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
        $body.classList.add('is-hidden')
        
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
        $body.classList.remove('is-hidden')
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
      $body.classList.remove('is-hidden')
    },
    
    bind: function() {
      const { layerOpenButtons } = getElements()
      layerOpenButtons.forEach((obj) => {
        // 기존 이벤트 리스너 제거
        obj.removeEventListener('click', handleLayerOpen)
        // 새 이벤트 리스너 추가
        obj.addEventListener('click', handleLayerOpen)
      })
    }
  }

  const handleLayerOpen = (e: Event) => {
    e.stopPropagation()
    const target = e.target as Element
    const layerName = target.getAttribute('data-layer-name')
    if (layerName) layerAction.open(layerName)
  }

  // 레이어 닫기 이벤트
  const initLayerClose = () => {
    const { layers } = getElements()
    layers.forEach((layer) => {
      // 기존 이벤트 리스너 제거
      layer.removeEventListener('click', handleLayerClose)
      // 새 이벤트 리스너 추가
      layer.addEventListener('click', handleLayerClose)
    })
  }

  const handleLayerClose = (e: Event) => {
    const target = e.target as Element
    if (target.matches('.btn-layer-close, .js-layer-close')) {
      e.stopPropagation()
      layerAction.close()
    }
  }

  // 다크모드 기능
  const initDarkMode = () => {
    const { toggleBtn, toggleText } = getElements()
    if (toggleBtn) {
      // 기존 이벤트 리스너 제거
      toggleBtn.removeEventListener('change', handleDarkMode)
      // 새 이벤트 리스너 추가
      toggleBtn.addEventListener('change', handleDarkMode)
    }
  }

  const handleDarkMode = (e: Event) => {
    const target = e.target as HTMLInputElement
    const { toggleText } = getElements()
    
    $body.classList.toggle('dark-mode', target.checked)
    if (toggleText) {
      toggleText.textContent = target.checked ? '라이트 모드' : '다크 모드'
    }
  }

  // 모든 기능 초기화
  const initAll = () => {
    initScrollTop()
    initLayerClose()
    initDarkMode()
    layerAction.bind()
  }

  // 스크롤 이벤트 (한 번만 등록)
  $window.addEventListener('scroll', handleScroll)

  // 초기 로드 시 초기화
  initAll()

  // 라우터 변경 시 재초기화 (Nuxt 3)
  if (process.client) {
    // 페이지 변경 감지
    const observer = new MutationObserver(() => {
      // DOM 변경 시 재초기화
      setTimeout(initAll, 100)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  // DOMContentLoaded 시에도 초기화
  document.addEventListener('DOMContentLoaded', initAll)
}) 