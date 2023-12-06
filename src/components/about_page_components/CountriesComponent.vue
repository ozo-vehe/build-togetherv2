<script setup>
import nigeria from "@/assets/images/nigeria.png";
import uganda from "@/assets/images/uganda.png";
import canada from "@/assets/images/canada.png";
import kenya from "@/assets/images/kenya.png";
import uk from "@/assets/images/uk.png";
import ghana from "@/assets/images/ghana.png";
import turkey from "@/assets/images/turkey.png";
</script>

<template>
  <section class="countries mt-28">
    <header class="text-center capitalize">
      <h2 class="text-2xl text-custom_orange">global presence</h2>
      <p class="text-[40px] font-bold mt-2">we have talents from all over the world</p>
    </header>

    <div
      class="countries_container w-full flex flex-wrap gap-[36px] items-center justify-center mt-12"
    >
      <div
        class="country flex flex-col items-center justify-center gap-3 border border-[#e2e2e2] p-4 rounded-xl text-center w-[200px]"
      >
        <img class="w-10 h-10" :src="nigeria" alt="Nigeria" />
        <p class="text-2xl font-bold">Nigeria</p>
      </div>
      <div
        class="country flex flex-col items-center justify-center gap-3 border border-[#e2e2e2] p-4 rounded-xl text-center w-[200px]"
      >
        <img class="w-10 h-10" :src="uganda" alt="Uganda" />
        <p class="text-2xl font-bold">Uganda</p>
      </div>
      <div
        class="country flex flex-col items-center justify-center gap-3 border border-[#e2e2e2] p-4 rounded-xl text-center w-[200px]"
      >
        <img class="w-10 h-10" :src="canada" alt="Canada" />
        <p class="text-2xl font-bold">Canada</p>
      </div>
      <div
        class="country flex flex-col items-center justify-center gap-3 border border-[#e2e2e2] p-4 rounded-xl text-center w-[200px]"
      >
        <img class="w-10 h-10" :src="kenya" alt="Kenya" />
        <p class="text-2xl font-bold">Kenya</p>
      </div>
      <div
        class="country flex flex-col items-center justify-center gap-3 border border-[#e2e2e2] p-4 rounded-xl text-center w-[200px]"
      >
        <img class="w-10 h-10" :src="uk" alt="UK" />
        <p class="text-2xl font-bold">UK</p>
      </div>
      <div
        class="country flex flex-col items-center justify-center gap-3 border border-[#e2e2e2] p-4 rounded-xl text-center w-[200px]"
      >
        <img class="w-10 h-10" :src="ghana" alt="Ghana" />
        <p class="text-2xl font-bold">Ghana</p>
      </div>
      <div
        class="country flex flex-col items-center justify-center gap-3 border border-[#e2e2e2] p-4 rounded-xl text-center w-[200px]"
      >
        <img class="w-10 h-10" :src="turkey" alt="Turkey" />
        <p class="text-2xl font-bold">Turkey</p>
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
  .countries_container {
    margin-top: 10px;
  }
  .country {
    width: 150px;
  }
  .country p {
    font-size: 20px;
  }
}
</style>
