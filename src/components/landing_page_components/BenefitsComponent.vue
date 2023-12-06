<script setup></script>
<template>
  <section class="benefits flex flex-wrap gap-8 py-20 justify-center items-center">
    <header class="flex flex-col items-center gap-4 mb-12">
      <h2 class="text-custom_orange text-2xl">5 reasons to join us</h2>
      <p class="font-bold text-4xl">Why Join Build Together?</p>
    </header>

    <div class="benefit_items flex flex-wrap items-center justify-center gap-5">
      <div
        class="flex flex-col p-5 w-350 max-h-[300px] items-center justify-start border border-custom_border rounded-xl"
      >
        <h3 class="text-2xl font-bold mb-3 capitalize text-left w-full">
          unmatched growth opportunities
        </h3>
        <p class="text-xl">
          Elevate your skills and career through hands-on projects and collaborative
          ventures, paving the way for faster professional growth
        </p>
      </div>

      <div
        class="flex flex-col p-5 w-350 max-h-[300px] items-center justify-start border border-custom_border rounded-xl"
      >
        <h3 class="text-2xl font-bold mb-3 capitalize text-left w-full">
          Dynamic Community
        </h3>
        <p class="text-xl">
          Immerse yourself in a vibrant community where diverse talents converge, sparking
          innovation, and fostering a culture of shared success
        </p>
      </div>

      <div
        class="flex flex-col p-5 w-350 max-h-[300px] items-center justify-start border border-custom_border rounded-xl"
      >
        <h3 class="text-2xl font-bold mb-3 capitalize text-left w-full">
          Tailored Talent Development
        </h3>
        <p class="text-xl">
          Experience a personalized journey with programs like BT Basic, specially crafted
          to nurture talents with less than one year of experience
        </p>
      </div>

      <div
        class="flex flex-col p-5 w-350 max-h-[300px] items-center justify-start border border-custom_border rounded-xl"
      >
        <h3 class="text-2xl font-bold mb-3 capitalize text-left w-full">
          Pathway to Earning and Employment
        </h3>
        <p class="text-xl">
          Participate in projects that go beyond collaboration; they go live, turn your
          skills into earning opportunities with a pathway to meaningful employment
        </p>
      </div>

      <div
        class="flex flex-col p-5 w-350 max-h-[300px] items-center justify-start border border-custom_border rounded-xl"
      >
        <h3 class="text-2xl font-bold mb-3 capitalize text-left w-full">
          A Team Committed to Your Advancement
        </h3>
        <p class="text-xl">
          Join Build Together, where our team is passionately dedicated to propelling your
          growth. Our mission is to to ensure your success
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .benefits {
    padding: 32px 0px;
  }
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

  .benefit_items > div {
    width: 330px;
  }
  .benefit_items > div h3 {
    font-size: 16px;
    line-height: normal;
  }
  .benefit_items > div p {
    font-size: 14px;
    line-height: normal;
  }
}
</style>
