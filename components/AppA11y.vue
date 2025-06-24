<template>
  <div class="skip-nav">
    <a :href="skipLink.href">{{ skipLink.text }}</a>
  </div>
</template>

<script setup lang="js">
// 접근성 데이터
const skipLink = {
  href: '#content',
  text: '본문으로 이동하기'
}
</script> 