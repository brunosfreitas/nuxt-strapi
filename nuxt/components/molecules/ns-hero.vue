<template>
<<<<<<< HEAD
  <img class="ns-hero" :src="require(imgSrc)" :alt="bannerImage.alt">
=======
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
>>>>>>> 2d29b15e049bd97998a70607520ec7f830915e99
</template>

<script>
export default {
  name: 'ns-hero',
<<<<<<< HEAD

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
=======
  data () {
    return {
      articles: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.articles = await this.$strapi.$articles.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
>>>>>>> 2d29b15e049bd97998a70607520ec7f830915e99
