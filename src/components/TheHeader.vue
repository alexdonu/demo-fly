<script setup lang="ts">
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const modelValue = useVModel(props, 'modelValue', emit)

const tabs = [
  {
    id: 'products',
    name: 'Products',
  },
  {
    id: 'feedback',
    name: 'Feedback',
  },
]
const activeTabIndex = computed(() => tabs.findIndex(el => el.id === modelValue.value))
const tabWidth = computed(() => `${100 / tabs.length}%`)

function changeTab(index: number) {
  modelValue.value = tabs[index].id
}
</script>

<template>
  <header class="header">
    <div
      v-for="(el, index) in tabs"
      :key="index"
      class="button-container"
      :class="{
        'button-container--status-active': activeTabIndex === index,
        'button-container--status-before-active': activeTabIndex - 1 === index,
        'button-container--status-after-active': activeTabIndex + 1 === index,
      }"
    >
      <button class="button" @click="changeTab(index)">
        {{ el.name }}
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;

  .button-container {
    width: v-bind(tabWidth);
    background-color: var(--color-white);

    &.button-container--status-active {
      background-color: var(--color-light-gray);
      border-bottom: 1px solid var(--color-light-gray);

      &:first-child .button {
        border-top-left-radius: 0;
      }

      &:last-child .button {
        border-top-right-radius: 0;
      }

      .button {
        font-weight: 600;
        letter-spacing: 1px;
        background-color: var(--color-white);
        border-radius: 16px 16px 0 0;
      }
    }

    &.button-container--status-before-active .button {
      border-bottom-right-radius: 16px;
    }

    &.button-container--status-after-active .button {
      border-bottom-left-radius: 16px;
    }

    &:not(.button-container--status-active) {
      .button:hover,
      .button:focus-visible {
        cursor: pointer;
        color: var(--color-tab-hover);
        text-decoration: underline;
        text-decoration-style: dotted;
      }
    }

    .button {
      width: 100%;
      background-color: var(--color-light-gray);
      padding: 20px 16px;
      text-align: center;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.4px;
      border: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}

@media (min-width: 1440px) {
  .header {
    display: flex;
    flex-direction: row;

    .button-container {
      width: v-bind(tabWidth);

      &:not(:last-child) {
        flex-grow: 1;
        border-bottom: 1px solid var(--color-light-gray);

        .button {
          background-color: var(--color-white);
          font-weight: 600;
        }
      }

      &:last-child {
        width: 352px;
        border-bottom: 1px solid var(--color-gray-underline);
        .button {
          font-weight: 600;
          background-color: var(--color-light-gray);
        }
      }

      &.button-container--status-active {
        background-color: none;
        border-bottom: none;

        &:first-child .button {
          border-radius: 0;
          letter-spacing: 1px;
          border-bottom: 1px solid var(--color-light-gray);
        }

        &:last-child .button {
          border-radius: 0;
          letter-spacing: 1px;
          background-color: var(--color-light-gray);
          border-bottom: 1px solid var(--color-gray-underline);
        }
      }

      &.button-container--status-before-active .button {
        border-bottom-right-radius: 0px;
        letter-spacing: 1px;
      }

      &.button-container--status-after-active .button {
        border-bottom-left-radius: 0px;
        letter-spacing: 1px;
      }

      &:not(.button-container--status-active) {
        .button:hover,
        .button:focus-visible {
          color: var(--color-black);
          cursor: default;
          text-decoration: none;
          text-decoration-style: none;
        }
      }
    }
  }
}
</style>
