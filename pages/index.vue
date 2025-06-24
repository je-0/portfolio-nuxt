<template>
  <main class="app-content main" tabindex="-1" id="content">
    <!-- 인트로 섹션 -->
    <MainIntro />
    <!-- 스킬 섹션 -->
    <MainSkills />
    <!-- 경력 섹션 -->
    <MainCareer />
    <!-- 프로젝트 섹션 -->
    <MainProject />
    <!-- 사람들 섹션 -->
    <MainPeople />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const introElement = document.querySelector(".intro");
  if (introElement) {
    introElement.classList.add("is-on");
  }
});
</script>
