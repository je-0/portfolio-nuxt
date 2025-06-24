<template>
  <!-- app-header [s] -->
  <header class="app-header">
    <div class="inner">
      <h1 class="logo">
        <NuxtLink to="/">
          <img :src="logoImage.src" :alt="logoImage.alt">
        </NuxtLink>
      </h1>
      <nav class="app-gnb">
        <ul>
          <li v-for="(menu, index) in navigationMenus" :key="index">
            <NuxtLink :to="menu.path">{{ menu.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <!-- app-header [e] -->
</template>

<script setup lang="js">
import { NuxtLink } from '#components'

// 헤더 데이터
const logoImage = {
  src: '/images/logo.png',
  alt: 'logo img'
}

const navigationMenus = [
  {
    name: 'Projects',
    path: '/project/list'
  }
]
</script> 