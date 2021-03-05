<template>
  <div class="home">
    <div class="container">
      <div class="home__cover">
        <h2 class="home__heading">{{home.heading}}</h2>
        <p class="home__description">{{home.description}}</p>
      </div>

      <ns-card-list :articles="articles"></ns-card-list>
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
  }
}
</script>

<style>
</style>
