<template>

    <div class="flex bg-black text-white overflow-hidden h-screen">
      <SideBar />
      <main class="flex-1">
        <RouterView />
      </main>
    </div>
</template>
<script setup>
    import SideBar from './SideBar.vue';

</script>