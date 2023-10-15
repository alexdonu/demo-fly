<script setup lang="ts">
import { ref, watch } from 'vue'
import TheInput from './TheInput.vue'
import TheButton from './TheButton.vue'

const isDisabled = ref(true)

const formData = ref<{
  name: string
  phoneNumber: string
  email: string
  message: string
}>({ name: '', phoneNumber: '', email: '', message: '' })

watch(formData.value, () => {
  if (formData.value.name && formData.value.phoneNumber && formData.value.email && formData.value.message) {
    isDisabled.value = false
  } else {
    isDisabled.value = true
  }
})

function submitForm() {
  formData.value.name = ''
  formData.value.phoneNumber = ''
  formData.value.email = ''
  formData.value.message = ''
}
</script>

<template>
  <form class="container" @submit.prevent @submit="submitForm">
    <TheInput v-model="formData.name" label="Name" />
    <TheInput v-model="formData.phoneNumber" label="Phone number" />
    <TheInput v-model="formData.email" label="Email" />
    <TheInput v-model="formData.message" label="Message" canGrow />
    <TheButton :is-disabled="isDisabled" class="submit">Submit</TheButton>
  </form>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  padding: 48px 32px 32px;
  gap: 48px;

  .submit {
    @media (min-width: 768px) {
      width: 288px;
    }
  }
}

@media (min-width: 1440px) {
  .container {
    background-color: var(--color-light-gray);
    width: 352px;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
