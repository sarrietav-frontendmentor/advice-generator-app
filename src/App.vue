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
      class="rounded-full flex justify-center items-center bg-emerald-400 p-5 -mb-[3.75rem] mt-2"
    >
      <img src="./assets/icon-dice.svg" alt="Dice icon" />
    </button>
  </main>
</template>
