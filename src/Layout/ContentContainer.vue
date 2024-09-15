<template>
    <div class="w-[600px] mx-auto h-[calc(100vh-60px)] overflow-hidden">
        <div class="h-full overflow-y-scroll overflow-x-hidden pr-[17px] box-content scrollbar-hide">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
/* Custom scrollbar hiding for Firefox */
.scrollbar-hide {
    scrollbar-width: none;
}
/* Custom scrollbar hiding for IE and Edge */
.scrollbar-hide {
    -ms-overflow-style: none;
}
/* Custom scrollbar hiding for WebKit browsers */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>