<template>
    <div class="overflow-x-hidden min-h-screen relative">
      <div class="sticky top-0 w-full z-[97]">
        <div class="w-[680px] mx-auto h-20 flex justify-center items-center">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="flex justify-center">
        <slot name="main"></slot>
      </div>
    </div>
  </template>
  