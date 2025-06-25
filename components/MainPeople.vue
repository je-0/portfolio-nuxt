<template>
  <section class="section people js-motion-item">
    <div class="section-cont">
      <ul>
        <li v-for="(item, index) in peopleData" :key="index">
          <dl class="img-tit">
            <dt>{{ item.title }}</dt>
            <dd v-html="item.description"></dd>
          </dl>
          <div class="img-box">
            <img :src="item.image" :alt="item.alt" loading="lazy">
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="js">
// 사람들 섹션 데이터
const peopleData = [
  {
    title: '성장하는 개발자',
    description: '트렌드에 걸맞는 코딩',
    image: './images/main/people-01.jpg',
    alt: 'A photo of the web coding screen.'
  },
  {
    title: '협력과 소통',
    description: '파트별 협업을 통한 커뮤니케이션<br>실무 작업자들과 원활하게 소통',
    image: './images/main/people-02.jpg',
    alt: 'A picture of everyone holding hands together.'
  },
  {
    title: '발전',
    description: '오늘의 노력을 통한 내일의 성장<br>매일 매일을 성장의 기회',
    image: './images/main/people-03.jpg',
    alt: 'A picture of assisting someone at the summit of the mountain.'
  }
]
</script> 