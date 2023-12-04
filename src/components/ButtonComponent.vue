<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button
    class="hero_btn bg-custom_orange text-slate-50 rounded-xl items-center justify-center px-5 py-3 w-40 capitalize hover:bg-custom_dark_orange transition-all duration-300"
  >
    {{ text }}
  </button>
</template>
