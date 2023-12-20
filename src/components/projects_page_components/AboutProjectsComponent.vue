<script setup></script>
<template>
  <section
    class="products flex flex-wrap flex-col gap-8 py-8 justify-center items-center"
  >
    <header class="flex flex-col items-center gap-4 mb-4">
      <h2 class="text-custom_orange text-2xl capitalize">join us</h2>
      <p class="font-bold text-4xl">
        Entry-Level Criteria for Build Together Business Program
      </p>
    </header>

    <div
      class="product_items flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4"
    >
      <div class="flex items-center w-[370px] justify-center gap-10">
        <div
          class="flex flex-col px-5 py-8 w-full h-[230px] items-start justify-between border border-custom_border rounded-xl"
        >
          <div class="item_texts">
            <h3 class="text-custom_card_header text-2xl font-bold mb-3 capitalize">
              Passionate Problem Solver
            </h3>
            <p class="text-xl text-[#4f4f4f]">
              Demonstrates genuine excitement for understanding complex problem spaces.
              Enjoys experimenting with innovative solution for users
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-[370px] justify-center gap-10">
        <div
          class="flex flex-col px-5 py-8 w-full h-[230px] items-start justify-between border border-custom_border rounded-xl"
        >
          <div class="item_texts">
            <h3 class="text-custom_card_header text-2xl font-bold mb-3 capitalize">
              Adaptable and Open-Minded
            </h3>
            <p class="text-xl text-[#4f4f4f]">
              Holds strong opinions, but is open to adapting and evolving perspectives.
              Willingness to explore various ways for the success of the product and the
              team
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-[370px] justify-center gap-10">
        <div
          class="flex flex-col px-5 py-8 w-full h-[230px] items-start justify-between border border-custom_border rounded-xl"
        >
          <div class="item_texts">
            <h3 class="text-custom_card_header text-2xl font-bold mb-3 capitalize">
              Collaborative and Humble
            </h3>
            <p class="text-xl text-[#4f4f4f]">
              Commits to the success of the product and team without letting ego
              interfere. Collaborates effectively and values the contributions of others
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-[370px] justify-center gap-10">
        <div
          class="flex flex-col px-5 py-8 w-full h-[230px] items-start justify-between border border-custom_border rounded-xl"
        >
          <div class="item_texts">
            <h3 class="text-custom_card_header text-2xl font-bold mb-3 capitalize">
              Empathetic Communicator
            </h3>
            <p class="text-xl text-[#4f4f4f]">
              Communicates thoughts and ideas clearly with empathy. Recognizes the
              importance of effective communication within a team
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-[370px] justify-center gap-10">
        <div
          class="flex flex-col px-5 py-8 w-full h-[230px] items-start justify-between border border-custom_border rounded-xl"
        >
          <div class="item_texts">
            <h3 class="text-custom_card_header text-2xl font-bold mb-3 capitalize">
              Opportunity Seeker
            </h3>
            <p class="text-xl text-[#4f4f4f]">
              Identifies both obvious and non- obvious opportunities for improvement.
              Actively contributes to driving discovery processes
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-[370px] justify-center gap-10">
        <div
          class="flex flex-col px-5 py-8 w-full h-[230px] items-start justify-between border border-custom_border rounded-xl"
        >
          <div class="item_texts">
            <h3 class="text-custom_card_header text-2xl font-bold mb-3 capitalize">
              Creative Problem Solver
            </h3>
            <p class="text-xl text-[#4f4f4f]">
              Translates learnings from discovery into creative and practical solutions.
              Demonstrates a proactive approach to problem- solving
            </p>
          </div>
        </div>
      </div>
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

  .product_items > div {
    width: 330px;
  }
  .product_items > div > div {
    max-height: 170px;
  }

  .product_items > div h3 {
    font-size: 16px;
    line-height: normal;
  }

  .product_items > div p {
    font-size: 14px;
    line-height: normal;
  }

  .product_items > div button {
    font-size: 16px;
  }

  .product_items > div button svg {
    width: 20px;
    height: 20px;
  }

  ul li {
    font-size: 14px;
  }
}
</style>
