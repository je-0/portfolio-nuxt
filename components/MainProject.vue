<template>
  <section class="section project js-motion-item">
    <div class="section-tit">
      <NuxtLink :to="projectLink.path" role="button" class="btn-more">
        <h2>{{ projectLink.title }}</h2>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="js">
import { NuxtLink } from '#components'

// 프로젝트 섹션 데이터
const projectLink = {
  path: '/project/list',
  title: '프로젝트 자세히 보기'
}
</script> 