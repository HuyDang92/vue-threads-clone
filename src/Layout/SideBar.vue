<script setup>
import { Icon } from '@iconify/vue'

const IconMidle = [
  'fluent:home-16-filled',
  'tabler:search',
  'charm:plus',
  'ph:heart-bold',
  'fluent:person-32-regular'
]
const IconBottom = ['bi:pin', 'gravity-ui:bars-ascending-align-left']
</script>
<template>
  <div class="w-[74px] fixed top-0 left-0 bottom-0 flex flex-col justify-between items-center text-[#7E7E7E] ">
    <IconLogo class="hover:scale-110 transition-all cursor-pointer w-14 h-14 p-3" />

    <div class="flex flex-col items-center gap-4">
      <Icon
        v-for="(icon, index) in IconMidle"
        :key="index"
        :icon="icon"
        :class="[
          { 'text-white': index === 0 },
          { 'bg-[#171717] hover:text-white': index === 2 },
          ' w-[55px] h-[45px] p-2.5 duration-200 rounded-xl hover:bg-[#171717] mx-auto cursor-pointer text-[40px]'
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
