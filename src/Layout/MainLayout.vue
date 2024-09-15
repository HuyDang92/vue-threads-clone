<template>
    <div class="flex h-screen overflow-hidden">
    <SideBar />
    <main class="flex-grow overflow-y-auto overflow-x-hidden">
      <RouterView />
    </main>
  </div>
</template>
<script setup>
    import SideBar from './SideBar.vue';
</script>