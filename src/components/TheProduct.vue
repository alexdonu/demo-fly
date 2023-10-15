<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="product">
    <slot />
    <div class="text">
      <div class="title">{{ props.title }}</div>
      <div class="description">{{ props.description }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 24px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 768px) {
      gap: 12px;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      line-height: 24px; /* 120% */

      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 32px;
      }
    }

    .description {
      font-size: 16px;
      line-height: 20px; /* 150% */

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px; /* 120% */
      }
    }
  }
}
</style>
