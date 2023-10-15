<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    theme?: 'sunny-orange' | 'deep-blue' | 'floral-green' | 'interstellar-gray' | 'default'
    isDisabled?: boolean
    class?: string
  }>(),
  {
    theme: 'default',
    isDisabled: false,
    class: '',
  },
)
</script>

<template>
  <button class="button" :class="[props.theme, props.class]" :disabled="props.isDisabled">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  width: 100%;
  border: none;
  border-radius: 16px;
  padding: 14px;
  outline: none;
  text-align: center;
  line-height: 24px; /* 120% */
  border: 2px solid transparent;

  &.default {
    font-size: 20px;
    color: var(--color-text-default-submit);

    &:active {
      color: var(--color-text-default-submit);
      transform: scale(0.95);
    }

    &:hover {
      color: var(--color-tab-hover);
      cursor: pointer;
    }

    &:disabled {
      color: var(--color-text-disabled);
      cursor: default;
      pointer-events: none;
    }

    &:focus-visible {
      color: var(--color-tab-hover);
      border-color: var(--color-text-default-submit);
    }
  }

  &.default {
    background-color: var(--color-light-gray);

    &:active {
      background-color: var(--color-light-gray);
    }

    &:hover:not(:active) {
      background-color: var(--color-submit-background-hover);
    }

    @media (min-width: 1440px) {
      background-color: var(--color-white);

      &:active {
        background-color: var(--color-white);
      }

      &:hover:not(:active) {
        background-color: var(--color-submit-alt-background-hover);
      }
    }
  }

  &.sunny-orange,
  &.deep-blue,
  &.floral-green,
  &.interstellar-gray {
    &:active {
      transform: scale(0.95);
    }

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      color: var(--color-text-disabled);
      background-color: var(--color-light-gray);
      cursor: default;
      pointer-events: none;
    }
  }

  &.sunny-orange {
    background-color: var(--color-sunny-orange-default-background);
    color: var(--color-sunny-orange-default-text);

    &:hover:not(:active) {
      background-color: var(--color-sunny-orange-background-hover);
      color: var(--color-sunny-orange-text-hover);
    }

    &:focus-visible {
      background-color: var(--color-sunny-orange-default-background);
      color: var(--color-sunny-orange-default-text);
      border-color: var(--color-sunny-orange-default-text);
    }
  }

  &.deep-blue {
    background-color: var(--color-deep-blue-default-background);
    color: var(--color-deep-blue-default-text);

    &:hover:not(:active) {
      background-color: var(--color-deep-blue-background-hover);
      color: var(--color-deep-blue-text-hover);
    }

    &:focus-visible {
      background-color: var(--color-deep-blue-default-background);
      color: var(--color-deep-blue-default-text);
      border-color: var(--color-deep-blue-default-text);
    }
  }

  &.floral-green {
    background-color: var(--color-floral-green-default-background);
    color: var(--color-floral-green-default-text);

    &:hover:not(:active) {
      background-color: var(--color-floral-green-background-hover);
      color: var(--color-floral-green-text-hover);
    }

    &:focus-visible {
      background-color: var(--color-floral-green-default-background);
      color: var(--color-floral-green-default-text);
      border-color: var(--color-floral-green-default-text);
    }
  }

  &.interstellar-gray {
    background-color: var(--color-interstellar-gray-default-background);
    color: var(--color-ufo-on-gray-background);

    &:hover:not(:active) {
      background-color: var(--color-interstellar-gray-background-hover);
      color: var(--color-white);
    }

    &:focus-visible {
      background-color: var(--color-interstellar-gray-default-background);
      color: var(--color-white);
      border-color: var(--color-interstellar-gray-border-focus-visible);
    }
  }
}
</style>
