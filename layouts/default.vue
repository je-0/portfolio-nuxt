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
</script> 