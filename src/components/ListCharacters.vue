<script setup lang="ts">
import { onMounted } from "vue";
import {
  characters,
  loading,
  loadCharacters,
 
} from "../utils/characters";

onMounted(() => {
  loadCharacters();
});

</script>

<template>
  <main>
    <span v-if="loading">Loading...</span>
    <span v-if="!characters">
      <span class="italic font-bold animate-pulse text-lg">Not found</span>
    </span>
    <section
      v-else
      class="flex flex-col gap-10 py-4"
    >
      <div
        v-for="character in characters"
        :key="character.id"
        class="flex gap-2 justify-center items-center border rounded-lg border-blue-500 brightness-50 transition duration-300 ease-in-out hover:brightness-100 hover:border-green-500  cursor-pointer h-[100%]"
      >
        <div class="bg-white w-48 h-48 rounded-full">
          <img
            :src="character.image"
            class="w-full h-full rounded-full p-1 "
          />
        </div>
        <section
          class="flex flex-col justify-center gap-3 text-left w-[50%] sm:w-[60%] md:w-[50%] h-[100%] p-2 child:flex child:flex-col"
        >
          <p class="text-[1rem] font-bold">{{ character.name }}</p>

          <p>
            <span class="text-sm"> Origin </span>
            <span class="font-bold"> {{ character.origin.name }} </span>
          </p>
          <p>
            <span class="text-sm"> Last location </span>
            <span class="font-bold"> {{ character.location.name }} </span>
          </p>

          <p>
            <span class="hover:animate-pulse text-sm">
              Appear(s) on {{ character.episode.length }} episodes</span
            >
          </p>
        </section>
      </div>
    </section>
  </main>
</template>
