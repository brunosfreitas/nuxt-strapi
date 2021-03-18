<template>
  <NuxtLink
    :to="url"
    :class="['ns-button',`ns-button--${bgColor}`]">
      {{ label }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'ns-button',
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