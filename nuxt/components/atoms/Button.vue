<template>
  <NuxtLink
    :to="url"
    :class="['button',`button--${bgColor}`]">
      {{ label }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'attoms-button',
  props: {
    url: {
      type: String,
      default: '/'
    },
    label: {
      type: String
    },
    bgColor: {
      type: String
    }
  }
}
</script>