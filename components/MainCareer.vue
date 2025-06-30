<template>
  <section class="section career js-motion-item">
    <div class="section-tit">
      <h2>{{ sectionTitle }}</h2>
      <p class="total-career">총 {{ totalCareer }}</p>
    </div>
    <div class="section-cont career-img">
      <img :src="careerImage.src" :alt="careerImage.alt" loading="lazy">
    </div>
    <div class="section-cont career-list">
      <dl v-for="(career, index) in careerList" :key="index">
        <dt>{{ career.company }}</dt>
        <dd>{{ career.position }}</dd>
        <dd>{{ career.description }}</dd>
        <dd>{{ career.period }}</dd>
      </dl>
    </div>
  </section>
</template>

<script setup lang="js">
// 경력 섹션 데이터
const sectionTitle = '경력'
const careerImage = {
  src: './images/main/skils.jpg',
  alt: 'Visual Studio screen with coding on a laptop'
}
const careerList = [
  {
    company: '콘센트릭스서비스코리아 카탈리스트',
    position: 'UX/UI 1팀/ 대리',
    description: '웹/앱 사이트 구축 및 유지보수',
    period: '2023.06 ~'
  },
  {
    company: '제오젠',
    position: '퍼블리싱팀/ 주임', 
    description: '웹/앱 사이트 구축 및 유지보수',
    period: '2020.01.15 ~ 2023.03'
  }
]

// 총 경력 계산
const calculateTotalCareer = () => {
  const now = new Date()
  const startDate = new Date('2020-01-15')
  const years = now.getFullYear() - startDate.getFullYear()
  const months = now.getMonth() - startDate.getMonth()
  const totalMonths = years * 12 + months
  const calcYears = Math.floor(totalMonths / 12)
  const calcMonths = totalMonths % 12
  return `${calcYears}년 ${calcMonths}개월`
}

const totalCareer = calculateTotalCareer()
</script>