<template>
  <div class="home-page">
    <ns-hero :bannerImage="bannerImage" />

    <h1 class="heading heading-one">Teste 1</h1>

    <ns-button
            label="our team"
          />
  </div>
</template>

<script>

export default {
  components: { nsButton, nsHero },
  name: 'home-page',

  data() {
    return {
        bannerImage: 
            {
                src: '~/assets/img/banner.png',
                alt: 'banner'
            }
    }
  }
}
</script>

