<template>
  <NuxtLink to="/">
    <img class="NuxtLogo" src="~/assets/img/logo.png" alt="Logo">
  </NuxtLink>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias.js';

export default {
  name: 'atoms-logo',
  props: {
    imgSrc: {
      type: String,
      default: ""
    }
  },
  methods: {
    getStrapiMedia
  }
}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
