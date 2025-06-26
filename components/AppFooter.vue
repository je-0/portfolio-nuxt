<template>
  <!-- app-footer [s] -->
  <footer class="app-footer">
    <button class="btn-top js-btn-top">
      <i class="icon-arrow-up"></i>
      <span>{{ topButtonText }}</span>
    </button>
    <div class="footer-wrap">
      <div class="btn-box">
        <a 
          v-for="(social, index) in socialLinks" 
          :key="index"
          :href="social.url" 
          role="button" 
          target="_blank"
        >
          <img :src="social.icon" :alt="social.alt">
        </a>
      </div>
      <p class="copyright">
        {{ copyrightText }}
      </p>
      <div class="dark-mode-toggle">
        <span class="toggle-txt">{{ darkModeText }}</span>
        <label class="switch-box">
          <input type="checkbox" v-model="isDarkMode">
          <span class="slider-area"></span>
        </label>
      </div>
    </div>
  </footer>
  <!-- app-footer [e] -->
</template>

<script setup lang="js">
import { ref } from 'vue'

// 푸터 데이터
const topButtonText = 'TOP'
const copyrightText = '© Copyright 2025 je0.'
const darkModeText = '다크모드'

// 다크모드 상태
const isDarkMode = ref(false)

// 소셜 링크 데이터
const socialLinks = [
  {
    url: 'https://github.com/je-0/',
    icon: '/images/icon-github.svg',
    alt: 'github logo'
  }
]
</script> 