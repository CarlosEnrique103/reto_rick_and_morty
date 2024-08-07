<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <header >
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="300" height="300" />

    <div class="wrapper">
      <nav class="flex flex-row items-center gap-3 mt-2">
        <RouterLink to="/" class=" bg-custom-tertiary  text-custom-white p-2">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
