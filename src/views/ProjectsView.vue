<script setup>
import AboutProjectsComponent from "../components/projects_page_components/AboutProjectsComponent.vue";
import ProjectsComponent from "../components/projects_page_components/ProjectsComponent.vue";
</script>
<template>
  <main class="px-16">
    <AboutProjectsComponent />
    <ProjectsComponent />
  </main>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  main {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
