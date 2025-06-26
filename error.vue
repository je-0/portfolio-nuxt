<template>
  <div class="error-page">
    <div class="container">
      <div class="error-content">
        <h1>{{ error?.statusCode || '404' }}</h1>
        <p>{{ error?.message || '페이지를 찾을 수 없습니다.' }}</p>
        <button @click="handleError">홈으로 돌아가기</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ErrorProps {
  error?: {
    statusCode?: number;
    message?: string;
  };
}

defineProps<ErrorProps>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<style lang="scss" scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  .error-content {
    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      color: #333;
    }
    
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #666;
    }
    
    button {
      padding: 12px 24px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      
      &:hover {
        background: #0056b3;
      }
    }
  }
}
</style>
