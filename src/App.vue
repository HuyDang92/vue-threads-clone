<script setup lang="ts">
import SideBar from '@/Layout/SideBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex">
    <SideBar />
    <main class="w-screen flex justify-center"><RouterView /></main>
  </div>
</template>
