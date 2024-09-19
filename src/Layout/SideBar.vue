<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const routes = ref([
  { name: 'Home', icon: 'fluent:home-16-filled', path: '/' },
  { name: 'Search', icon: 'tabler:search', path: '/search' },
  { name: 'Create Post', icon: 'charm:plus', path: '', isModal: true },
  { name: 'Activity', icon: 'ph:heart-bold', path: '/activity' },
  { name: 'Profile', icon: 'fluent:person-32-regular', path: '/profile' }
])
const IconBottom = ['bi:pin', 'gravity-ui:bars-ascending-align-left']



const navigateTo = (route) => {
  if (route.isModal) {
    // logic open modal create post
    console.log('Open create post modal')
  } else {
    router.push(route.path)
  }
}
</script>
<template>
  <div class="w-[74px] sticky top-0 left-0 bottom-0 flex flex-col justify-between items-center text-[#7E7E7E] ">
    <IconLogo class="hover:scale-110 transition-all cursor-pointer w-14 h-14 p-3" />

    <div class="flex flex-col items-center gap-4">
      <Icon
        v-for="(route, index) in routes"
        :key="index"
        :icon="route.icon"
        @click="navigateTo(route)"
        :class="[
          { 'text-white': router.currentRoute.value.path === route.path },
          { 'bg-[#171717] hover:text-white': route.isModal },
          'w-[55px] h-[45px] p-2.5 duration-200 rounded-xl hover:bg-[#171717] mx-auto cursor-pointer text-[40px]'
        ]"
      />
    </div>
    <div class="flex flex-col items-center gap-4 pb-5">
      <Icon
        v-for="(icon, index) in IconBottom"
        :key="index"
        :icon="icon"
        :class="[
          ' w-[55px] h-[45px] p-2.5 duration-200 rounded-xl hover:text-white mx-auto cursor-pointer text-[40px]'
        ]"
      />
    </div>
  </div>
</template>
