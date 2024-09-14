<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'default' | 'light' | 'outline' | 'dark';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  disabled: false,
  type: 'button',
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const classes = computed(() => {
  return [
    'py-2 px-4 border rounded-md text-center transition-all duration-300',
    {
      'bg-white text-black border-transparent': props.variant === 'light',
      'bg-transparent border-gray-600 text-white': props.variant === 'default',
      'border-white text-white hover:bg-gray-50/10 active:bg-gray-50 focus:ring-gray-50': props.variant === 'outline',
      'text-white bg-black border-transparent': props.variant === 'dark',
      'h-10 py-2 px-4': props.size === 'default',
      'h-8 px-3 text-xs': props.size === 'sm',
      'h-12 px-6 text-base': props.size === 'lg',
      'h-10 w-10': props.size === 'icon',
    },
    'relative overflow-hidden',
  ];
});

</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
    :type="type"
    @click="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>
