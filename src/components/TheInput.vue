<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    label?: string
    canGrow?: boolean
    modelValue: string
  }>(),
  {
    label: 'Your label',
    canGrow: false,
    modelValue: '',
  },
)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const div = ref<HTMLElement | null>(null)
const modelValue = useVModel(props, 'modelValue', emit)

function getInputValue() {
  if (div.value) {
    modelValue.value = div.value.innerText
  }
}

onMounted(() => {
  watch(
    modelValue,
    () => {
      if (div.value && props.canGrow && div.value.innerText !== modelValue.value) {
        div.value.innerText = modelValue.value
      }
    },
    { immediate: true },
  )
})
</script>
<template>
  <div class="input-box" v-if="canGrow">
    <label class="label">{{ props.label }}</label>
    <div class="growing-input-field" contenteditable="true" ref="div" @input="getInputValue" />
  </div>
  <div class="input-box" v-else>
    <label class="label">{{ props.label }}</label>
    <input v-model="modelValue" class="input-field" type="text" />
  </div>
</template>

<style scoped lang="scss">
.input-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid var(--color-gray-underline);

  .input-field,
  .growing-input-field {
    border: none;
    outline: none;
    color: var(--color-input);
    font-size: 20px;
    line-height: 24px; /* 120% */
    padding: 0;
  }
  .label {
    color: var(--color-label);
    font-size: 16px;
    line-height: 20px; /* 125% */
  }
}

@media (min-width: 1440px) {
  .input-box {
    padding: 16px;
    background-color: var(--color-white);
    border-radius: 16px;

    .growing-input-field,
    .input-field {
      border-bottom: 1px solid var(--color-gray-underline);
    }
  }
}
</style>
