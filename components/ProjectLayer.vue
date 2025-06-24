<template>
  <div 
    v-for="project in filteredProjects" 
    :key="project.id"
    class="layer-wrap" 
    :class="{ 'is-active': isActive }"
    :data-layer-name="project.id"
    @keydown.esc="closeLayer"
    tabindex="-1"
    ref="layerRef"
  >
    <div class="layer">
      <strong class="tit">{{ project.title }}</strong>
      <div class="layer-cont">
        <dl class="project-info">
          <dt>소개</dt>
          <dd v-for="(item, index) in project.description.intro" :key="index">
            {{ item }}
          </dd>
        </dl>
        <dl>
          <dt>사용기술 및 내용</dt>
          <dd v-for="(item, index) in project.description.tech" :key="index">
            {{ item }}
          </dd>
        </dl>
        <div class="btn-box">
          <a 
            :href="project.link" 
            role="button" 
            :target="project.disabled ? undefined : '_blank'"
            :class="['btn-basic', { 'btn-disabled': project.disabled }]"
            :tabindex="project.disabled ? -1 : 0"
            @click="project.disabled ? $event.preventDefault() : null"
          >
            <span>{{ project.linkText }}</span>
          </a>
        </div>
      </div>
      <button 
        class="btn-layer-close btnPopupClose" 
        @click="closeLayer"
        @keydown.enter="closeLayer"
        @keydown.space="closeLayer"
        ref="closeButtonRef"
      >
        <span>닫기</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import projectsData from '~/data/projects.json'

// 프로젝트 데이터 타입 정의
interface ProjectDescription {
  intro: string[]
  tech: string[]
}

interface Project {
  id: string
  title: string
  description: ProjectDescription
  link: string
  linkText: string
  disabled: boolean
}

// props 정의
interface Props {
  projectId?: string
}

const props = withDefaults(defineProps<Props>(), {
  projectId: ''
})

// emit 정의
const emit = defineEmits(['close'])

// 프로젝트 데이터
const projects = ref<Project[]>(projectsData)

// 레이어 활성화 상태
const isActive = ref(false)

// refs
const layerRef = ref(null)
const closeButtonRef = ref(null)

// 특정 프로젝트만 표시하는 경우
const filteredProjects = computed(() => {
  if (props.projectId) {
    return projects.value.filter(project => project.id === props.projectId)
  }
  return projects.value
})

// 레이어 닫기
const closeLayer = () => {
  isActive.value = false
  emit('close')
  document.body.classList.remove('is-hidden')
  
  // 포커스를 이전 요소로 되돌리기
  if (window.previousFocusElement) {
    window.previousFocusElement.focus()
  }
}

// 레이어 열기 (외부에서 호출 가능)
const openLayer = () => {
  // 현재 포커스된 요소 저장
  window.previousFocusElement = document.activeElement
  
  isActive.value = true
  document.body.classList.add('is-hidden')
  
  // 다음 tick에서 레이어에 포커스
  nextTick(() => {
    if (layerRef.value) {
      if (Array.isArray(layerRef.value)) {
        layerRef.value[0]?.focus()
      } else {
        layerRef.value.focus()
      }
    }
  })
}

// 포커스 트랩 설정
const handleTabKey = (event) => {
  const focusableElements = layerRef.value?.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  )
  
  if (!focusableElements || focusableElements.length === 0) return
  
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  
  if (event.shiftKey) {
    // Shift + Tab
    if (document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    }
  } else {
    // Tab
    if (document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }
}

// 외부에서 접근 가능하도록 expose
defineExpose({
  openLayer,
  closeLayer
})

// 레이어가 활성화될 때 포커스 트랩 이벤트 리스너 추가
watch(isActive, (newValue) => {
  if (newValue) {
    nextTick(() => {
      if (layerRef.value) {
        const layer = Array.isArray(layerRef.value) ? layerRef.value[0] : layerRef.value
        layer?.addEventListener('keydown', handleTabKey)
      }
    })
  } else {
    if (layerRef.value) {
      const layer = Array.isArray(layerRef.value) ? layerRef.value[0] : layerRef.value
      layer?.removeEventListener('keydown', handleTabKey)
    }
  }
})
</script>
