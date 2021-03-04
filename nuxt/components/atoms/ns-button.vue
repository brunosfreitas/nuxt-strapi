<template>
  <a
    :href="url"
    :class="['ns-button',`ns-button--${bgColor}`]">
      {{ label }}
  </a>
</template>

<script>
export default {
  name: 'ns-button',
  props: {
    url: {
      type: String
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