<template>
  <div class="container">
    <div v-if="error">
      {{ error }}
    </div>
    <ul v-else>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'molecules-hero',
  data () {
    return {
      articles: [],
      error: null
    }
  },
  async fetch() {
    try {
      this.articles = await this.$strapi.$articles.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
