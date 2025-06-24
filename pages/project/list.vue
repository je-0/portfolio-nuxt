<template>
  <div class="pg-project">
    <div class="container">
      <div class="project-wrap">
        <div class="section-tit">
          <h1>프로젝트</h1>
          <p class="sub-txt">다양한 프로젝트 경험을 확인해보세요</p>
        </div>
        <div class="section-cont">
          <div class="list-head">
            <span
              >총 <em class="data-list-num">{{ filteredProjects.length }}</em
              > 프로젝트</span
            >
            <div class="list-type">
              <a
                href="javascript:;"
                :class="{ 'is-active': viewType === 'list' }"
                @click="viewType = 'list'"
              >
                리스트
              </a>
              <a
                href="javascript:;"
                :class="{ 'is-active': viewType === 'card' }"
                @click="viewType = 'card'"
              >
                카드
              </a>
            </div>
          </div>

          <div class="project-list" :class="`type-${viewType}`">
            <ul>
              <li v-for="project in filteredProjects" :key="project.id">
                <a
                  href="javascript:;"
                  @click.prevent="openProjectLayer(project.id)"
                >
                  <span class="project-type">{{ project.type }}</span>
                  <span class="project-name">{{ project.title }}</span>
                  <span class="project-date">{{
                    getProjectDate(project.id)
                  }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 프로젝트 레이어 -->
    <ProjectLayer
      v-if="showLayer"
      :project-id="selectedProjectId"
      ref="projectLayerRef"
      @close="closeProjectLayer"
    />
  </div>
</template>

<script setup lang="ts">
import projectsData from "~/data/projects.json";

// 프로젝트 데이터 타입 정의
interface ProjectDescription {
  intro: string[];
  tech: string[];
}

interface Project {
  id: string;
  title: string;
  description: ProjectDescription;
  link: string;
  linkText: string;
  disabled: boolean;
}

// 상태 관리
const viewType = ref<"list" | "card">("list");
const showLayer = ref(false);
const selectedProjectId = ref("");
const projectLayerRef = ref();

// 프로젝트 데이터
const projects = ref<Project[]>(projectsData);

// 필터링된 프로젝트 (필터 기능 추가 시 사용)
const filteredProjects = computed(() => {
  return projects.value;
});

// 프로젝트 날짜 (ID 기반으로 추정)
const getProjectDate = (id: string) => {
  const dateMap: { [key: string]: string } = {
    cellosquare: "2025.04 ~ 06",
    smasungDS: "2024.06 ~ ",
    amore: "2024.02~2024.06",
    lgGlobal: "2023.06~2024.12",
    atomy: "2022.01~2023.03",
    glovis: "2021.08~2022.01",
    kbarchive: "2021.06~08",
    serveoneRenewal: "2021.04~06",
    serveoneSM2021: "2021.03~04",
    samsungS: "2020.09~2021.03",
    Lg: "2020.09",
    pantos: "2020.08~2020.09",
    hos: "2020.05~2020.08",
    serveoneSM2020: "2020.03~2020.04",
    inotion: "2020.01~2020.03 ",
    ezwell: "2020.01",
  };

  return dateMap[id] || "2020";
};

// 프로젝트 레이어 열기
const openProjectLayer = (projectId: string) => {
  selectedProjectId.value = projectId;
  showLayer.value = true;
  // 다음 틱에서 레이어 열기 (DOM 업데이트 후)
  nextTick(() => {
    if (projectLayerRef.value) {
      projectLayerRef.value.openLayer();
    }
  });
};

// 프로젝트 레이어 닫기
const closeProjectLayer = () => {
  showLayer.value = false;
  selectedProjectId.value = "";
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/pages/project" as *;
</style>
