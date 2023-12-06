<script setup>
import story_one from "@/assets/images/story (1).png";
import story_two from "@/assets/images/story (3).png";
import story_three from "@/assets/images/story (2).png";
</script>

<template>
  <section class="story">
    <header class="text-center capitalize">
      <h2 class="text-2xl text-custom_orange">our story</h2>
      <p class="text-[40px] font-bold mt-4">
        about build together: unleashing tomorrow's innovators
      </p>
    </header>

    <div
      class="story_content_container w-full flex flex-wrap flex-col items-center gap-y-20 mt-12"
    >
      <div class="story_content flex flex-wrap gap-40 justify-between items-center">
        <p class="p-[10px] max-w-[626px] text-2xl">
          Build Together is where growth, collaboration, and a shared vision converge. Our
          mission is both simple and profound- to serve as the catalyst propelling talents
          worldwide towards success and positive change in the tech ecosystem
        </p>

        <div class="story_content_image w-350 h-300">
          <img class="w-full h-full object-contain" :src="story_one" alt="Story one" />
        </div>
      </div>

      <div class="story_content flex flex-wrap gap-40 justify-between items-center">
        <p class="p-[10px] max-w-[626px] text-2xl order-2">
          Building a Global Community of Creators! At Build Together, we’re not just a
          platform; we’re a commitment to exceptional builders and creators worldwide, we
          intimately understand your journey. This empathy fuels our dedication to
          fostering collaboration and nurturing individual growth
        </p>

        <div class="story_content_image w-350 h-300">
          <img class="w-full h-full object-contain" :src="story_two" alt="Story two" />
        </div>
      </div>

      <div class="story_content flex flex-wrap gap-40 justify-between items-center">
        <p class="p-[10px] max-w-[626px] text-2xl">
          Our vision extends beyond aspiration; it’s our daily motivation, propelling us
          tirelessly to construct a world where potential knows no boundaries. A
          collaborative space where your story seamlessly intersects with ours. Together,
          we forge a future where every talent becomes a compelling narrative of growth,
          collaboration, and unparalleled success. At Build Together, we aren’t just
          building, we are building together
        </p>

        <div class="story_content_image w-350 h-300">
          <img
            class="w-full h-full object-contain"
            :src="story_three"
            alt="Story three"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  header h2 {
    font-size: 14px;
  }
  header p {
    font-size: 20px;
    margin: 0px;
  }

  .story_content_container {
    margin-top: 10px;
  }
  .story_content {
    gap: 40px;
    justify-content: center;
  }
  .story_content p {
    font-size: 14px;
    line-height: normal;
  }
  .story_content_image {
    width: 300px;
    height: 250px;
  }
  .story_content:nth-child(2) .story_content_image {
    order: 2;
  }
}
</style>
