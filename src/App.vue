<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header >
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="300" height="300" />

    <div >
      <nav class="flex flex-row items-center gap-3 mt-4">
        <RouterLink to="/" class=" bg-custom-tertiary  text-custom-white px-4 py-2">List</RouterLink>      
      </nav>
    </div>
  </header>
  <RouterView />
</template>
