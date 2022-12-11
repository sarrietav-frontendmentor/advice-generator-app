<template>
  <main
    class="relative rounded-xl bg-gray-700 my-auto mx-0 flex flex-col items-center text-center gap-7 px-4 py-7 max-w-lg"
  >
    <header class="uppercase tracking-[.15em] text-emerald-500 text-xs">
      Advice # 117
    </header>
    <blockquote
      class="text-white text-xl before:content-['“'] after:content-['”'] px-4"
    >
      It is easy to sit up and take notice, what's difficult is getting up and
      taking action.
    </blockquote>
    <picture>
      <img src="./assets/pattern-divider-mobile.svg" alt="Divider" />

      <source
        srcset="./assets/pattern-divider-desktop.svg"
        media="(min-width: 1024px)"
      />
    </picture>
    <button
      class="rounded-full flex justify-center items-center bg-emerald-400 p-5 -mb-[3.75rem] mt-2 hover:shadow-emerald-300 hover:shadow-[0_0_20px_2px] active:shadow-emerald-300 active:shadow-[0_0_15px_2px] transition-all group"
    >
      <img
        src="./assets/icon-dice.svg"
        alt="Dice icon"
        class="group-hover:animate-spin transition-all group-active:animate-spin-shrink"
      />
    </button>
  </main>
</template>
