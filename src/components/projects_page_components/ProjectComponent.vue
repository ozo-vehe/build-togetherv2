<script setup>
defineProps({
  project: Object,
});
</script>

<template>
  <div
    class="project flex flex-wrap w-[350px] px-4 py-8 rounded-xl border bg-white border-[#e2e2e2] gap-5"
    data-aos="slide-up"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
  >
    <h3 class="text-custom_card_header flex flex-col gap-4 font-bold mb-3 capitalize">
      <span class="text-2xl title">{{ project.title }}</span>
      <span class="text-xl text-custom_orange category">{{ project.category }}</span>
    </h3>
    <div class="team flex flex-wrap items-start gap-[14px]">
      <p
        :class="{
          'text-[#432C5C] bg-[#edeaf0]':
            team === 'content marketer' ||
            team === 'health tech' ||
            team === 'commerce' ||
            team === 'fintech' ||
            team === 'events',
          'text-[#6B3C17] bg-[#f3ede8]': team === 'graphics designer',
          'text-[#265039] bg-[#eaeeec]': team === 'product marketer',
          'text-[#482776] bg-[#edeaf3]': team === 'product manager',
          'text-[#ce874d] bg-[#fcf4ee]': team === 'front-end engineer',
          'text-[#63312c] bg-[#f0ebea]':
            team === 'product designer' || team === 'backend engineer',
        }"
        class="flex capitalize p-2 items-center justify-center rounded-xl"
        v-for="(team, index) in project.team"
        :key="index"
      >
        {{ team }}
      </p>
    </div>
    <p
      :class="{
        'text-[#502626]': project.status === 'closed',
        'text-[#265039]': project.status === 'open',
      }"
      class="capitalize font-bold list-item ml-4 relative project_status"
    >
      Status: {{ project.status }}
    </p>
    <a
      href="https://forms.gle/DWg24Y2XVV4LL65P6"
      target="_blank"
      class="join_team w-full flex py-3 px-5 items-center justify-center gap-3 rounded-xl bg-custom_orange text-white"
    >
      Join team
    </a>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .project {
    gap: 4px;
  }
  .title {
    font-size: 16px;
    line-height: normal;
  }
  .category {
    font-size: 14px;
    line-height: normal;
  }
  .team {
    margin-bottom: 10px;
  }
  .team p,
  .project_status,
  .join_team {
    font-size: 12px;
    line-height: normal;
  }
  .project_status {
    margin-bottom: 10px;
  }
}
</style>
