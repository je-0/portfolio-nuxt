<template>
  <section class="section intro">
    <div class="section-tit js-motion-item">
      <h2>
        <p class="moving-txt">
          <span v-for="(char, index) in movingText" :key="index">{{ char }}</span>
        </p>
        <p>
          {{ name }}
        </p>
      </h2>
    </div>
    <div class="section-cont">
      <img :src="keyVisualImage.src" :alt="keyVisualImage.alt" loading="lazy">
    </div>
  </section>
</template>

<script setup lang="js">
// 인트로 섹션 데이터
const movingText = ['성', '장', '하', '는', '퍼', '블', '리', '셔']
const name = '임제영입니다'
const keyVisualImage = {
  src: '/images/main/bg-main.jpg',
  alt: 'keyvisual'
}
</script> 