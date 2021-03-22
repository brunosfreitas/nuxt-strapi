<template>
  <div class="home">
    <div class="container">
      <div class="home__cover">
        <h1 class="home__heading">{{home.heading}}</h1>
        <p class="home__description">{{home.description}}</p>
      </div>

      <molecules-ns-card-list :articles="articles"></molecules-ns-card-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      articles: [],
      home: []
    }
  },
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.$articles.find(),
      home: await $strapi.$home.find(),
    };
  },
  head() {
      return {
          bodyAttrs: {
              class: 'pageLayout--caribbean'
          }
      }
  }
}
</script>

<style>
</style>
