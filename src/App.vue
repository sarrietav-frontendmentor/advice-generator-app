<template>
  <main
    class="relative rounded-xl bg-gray-700 my-auto mx-0 flex flex-col items-center text-center gap-7 px-4 py-7 max-w-lg shadow-md lg:w-[32rem]"
  >
    <header class="uppercase tracking-[.15em] text-emerald-500 text-xs">
      Advice #{{ quote.id }}
    </header>
    <blockquote
      class="text-white text-xl before:content-['“'] after:content-['”'] px-4"
    >
      {{ quote.advice }}
    </blockquote>
    <picture>
      <img src="./assets/pattern-divider-mobile.svg" alt="Divider" />

      <source
        srcset="./assets/pattern-divider-desktop.svg"
        media="(min-width: 1024px)"
      />
    </picture>
    <button
      @click="fetchQuote"
      class="rounded-full flex justify-center items-center bg-emerald-400 p-5 -mb-[3.75rem] mt-2 hover:shadow-emerald-300 hover:shadow-[0_0_20px_2px] active:shadow-emerald-300 active:shadow-[0_0_15px_2px] transition-all group disabled:bg-zinc-500 disabled:hover:shadow-none disabled:active:shadow-none disabled:hover:animate-none"
      :disabled="isDisabled"
    >
      <img
        src="./assets/icon-dice.svg"
        alt="Dice icon"
        class="group-hover:animate-spin transition-all group-active:animate-spin-shrink group-disabled:opacity-30 group-disabled:animate-none"
      />
    </button>
  </main>
</template>

<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const isDisabled = ref(false);

const quote = ref({
  id: "?",
  advice: "Loading...",
});

onMounted(() => {
  fetchQuote();
});

const fetchQuote = async () => {
  quote.value = {
    id: "?",
    advice: "Loading...",
  };
  const response = await axios.get("https://api.adviceslip.com/advice");

  isDisabled.value = true;

  quote.value.id = response.data.slip.id;
  quote.value.advice = response.data.slip.advice;

  setTimeout(() => {
    isDisabled.value = false;
  }, 2000);
};
</script>
