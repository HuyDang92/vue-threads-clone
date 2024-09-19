<template>
  <ContentContainer>
    <template #header>
      <h1>Home page</h1>
    </template>
    <template #main>
      <div class="w-[600px] border rounded-xl pt-5 h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar">
        <div class="overflow-hidden">
          <div class="w-full border-b h-80">content</div>
          <div class="w-full border-b h-80">content</div>
          <div class="w-full border-b h-80">content</div>
          <div class="w-full border-b h-80">content</div>
          <div class="w-full border-b h-80">content</div>
          <div class="w-full border-b h-80">content</div>
        </div>
      </div>
    </template>
  </ContentContainer>
</template>

<style scoped>

.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
