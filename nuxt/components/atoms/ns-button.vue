<template>
<NuxtLink to="/home-page" class="ns-button">{{ label }}</NuxtLink>
</template>

<script>
export default {
  name: 'ns-button',

  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>