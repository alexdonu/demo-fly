<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '../components/TheHeader.vue'
import ProductContainer from '@/components/ProductContainer.vue'
import FeedbackContainer from '@/components/FeedbackContainer.vue'

const currentTabId = ref('products')
</script>

<template>
  <div class="app-container">
    <TheHeader v-model="currentTabId" />
    <div class="app-content">
      <ProductContainer :class="{ hide: currentTabId === 'feedback' }" />
      <FeedbackContainer :class="{ hide: currentTabId === 'products' }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  background-color: var(--color-white);
}

.hide {
  display: none;
}

@media (min-width: 768px) {
  .app-container {
    overflow: hidden;
    border-radius: 24px;
    box-shadow: 0px 1px 4px 0px var(--color-shadow);
  }
}

@media (min-width: 1440px) {
  .hide {
    display: flex;
  }

  .app-content {
    display: flex;
    flex-direction: row;
  }
}
</style>
