<script setup>
import Project from "./ProjectComponent.vue";
import { ref } from "vue";

const projects = ref([
  {
    id: 0,
    title: "core team",
    category: "BT-Business",
    status: "open",
    team: [
      "product manager",
      "product designer",
      "front-end engineer",
      "backend engineer",
      "product marketer",
      "content marketer",
      "graphics designer",
    ],
  },
  {
    id: 1,
    title: "whatspoppi.ng",
    category: "BT-Business",
    status: "open",
    team: [
      "product manager",
      "product designer",
      "front-end engineer",
      "backend engineer",
      "product marketer",
      "content marketer",
      "graphics designer",
      "events",
    ],
  },
  {
    id: 2,
    title: "swipe",
    category: "BT-Business",
    status: "open",
    team: [
      "product manager",
      "product designer",
      "front-end engineer",
      "backend engineer",
      "product marketer",
      "content marketer",
      "graphics designer",
      "fintech",
    ],
  },
  {
    id: 3,
    title: "CitiPadi",
    category: "BT-Business",
    status: "open",
    team: [
      "product manager",
      "product designer",
      "front-end engineer",
      "backend engineer",
      "product marketer",
      "content marketer",
      "graphics designer",
    ],
  },
  {
    id: 4,
    title: "vesslr",
    category: "BT-Business",
    status: "open",
    team: [
      "product manager",
      "product designer",
      "front-end engineer",
      "backend engineer",
      "product marketer",
      "content marketer",
      "graphics designer",
      "health tech",
    ],
  },
  {
    id: 5,
    title: "easy shop",
    category: "BT-Business",
    status: "open",
    team: [
      "product manager",
      "product designer",
      "front-end engineer",
      "backend engineer",
      "product marketer",
      "content marketer",
      "graphics designer",
      "commerce",
    ],
  },
]);
</script>
<template>
  <section
    class="products flex flex-wrap flex-col gap-8 py-8 justify-center items-center"
  >
    <header class="flex flex-col items-center gap-4 mb-4">
      <h2 class="text-custom_orange text-2xl capitalize">
        Explore our diverse projects!
      </h2>
      <p class="font-bold text-4xl">Open Projects and Available Roles</p>
    </header>

    <div
      class="product_items flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4"
    >
      <template v-for="project in projects" :key="project.id">
        <Project :project="project" />
      </template>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  header {
    text-align: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  header h2 {
    font-size: 14px;
    line-height: normal;
  }

  header p {
    line-height: normal;
    font-size: 20px;
  }
}
</style>
