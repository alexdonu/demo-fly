<script setup lang="ts">
import TheButton from './TheButton.vue'
import TheHelicopter from './ProductImages/TheHelicopter.vue'
import TheUFO from './ProductImages/TheUFO.vue'
import TheAirPlane from './ProductImages/TheAirPlane.vue'
import TheRocket from './ProductImages/TheRocket.vue'
import TheProduct from './TheProduct.vue'
import type { Component } from 'vue'

type Product = {
  id: string
  title: string
  description: string
  image: Component
  theme?: 'sunny-orange' | 'deep-blue' | 'floral-green' | 'interstellar-gray' | 'default'
}

const someFetchedData: Product[] = [
  {
    id: '1',
    title: 'myProduct',
    description: 'Sunny orange',
    image: TheHelicopter,
    theme: 'sunny-orange',
  },
  {
    id: '2',
    title: 'myProduct Plus',
    description: 'Deep blue',
    image: TheAirPlane,
    theme: 'deep-blue',
  },
  {
    id: '3',
    title: 'myProduct Pro',
    description: 'Floral green',
    image: TheRocket,
    theme: 'floral-green',
  },
  {
    id: '4',
    title: 'myProduct Ultra',
    description: 'Interstellar gray',
    image: TheUFO,
    theme: 'interstellar-gray',
  },
  {
    id: '5',
    title: 'myProduct',
    description: 'Floral green',
    image: TheHelicopter,
    theme: 'floral-green',
  },
  {
    id: '6',
    title: 'myProduct Pro',
    description: 'Deep blue',
    image: TheRocket,
    theme: 'deep-blue',
  },
  {
    id: '7',
    title: 'myProduct',
    description: 'Deep blue',
    image: TheHelicopter,
    theme: 'deep-blue',
  },
  {
    id: '8',
    title: 'myProduct Pro',
    description: 'Sunny orange',
    image: TheRocket,
    theme: 'sunny-orange',
  },
  {
    id: '9',
    title: 'myProduct Plus',
    description: 'Floral green',
    image: TheAirPlane,
    theme: 'floral-green',
  },
]
</script>

<template>
  <div class="container">
    <TheButton
      v-for="pieceOfData in someFetchedData"
      :key="pieceOfData.id"
      :theme="pieceOfData.theme"
      class="stacking-button"
    >
      <TheProduct :title="pieceOfData.title" :description="pieceOfData.description">
        <Component :is="pieceOfData.image" />
      </TheProduct>
    </TheButton>
  </div>
</template>

<style scoped lang="scss">
.container {
  --gap: 32px;

  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  .stacking-button {
    box-sizing: border-box;

    --number-of-columns: 1;

    width: calc(
      100% / var(--number-of-columns) - var(--gap) * calc(var(--number-of-columns) - 1) / var(--number-of-columns)
    );

    @media (min-width: 768px) {
      --number-of-columns: 2;
    }

    @media (min-width: 1440px) {
      --number-of-columns: 3;
    }
  }
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
  }
}
</style>
