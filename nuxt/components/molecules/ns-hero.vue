<template>
  <img class="ns-hero" :src="require(imgSrc)" :alt="bannerImage.alt">
</template>

<script>
export default {
  name: 'ns-hero',

  props: {
    bannerImage: { type: Object }
  },

  computed: {
    imgSrc: function () {
      return require(this.bannerImage.src)
    }
    }
  }
</script>
