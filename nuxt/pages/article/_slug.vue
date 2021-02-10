<template>
    <article class="ns-article">
        <NuxtLink to="/" class="ns-article__backButton"> Back </NuxtLink>
        <div v-if="error">
            {{ error }}
        </div>
        <h1 class="ns-article__title">{{article.title}}</h1>
        <p class="ns-article__content">{{article.content}}</p>
    </article>
</template>

<script>
export default {
    data () {
        return {
            article: [],
            error: null
        }
    },
    async mounted () {
        try {
            let result = await this.$strapi.$articles.find({
                _id: this.slug
            })
            this.article = result[0];
        } catch (error) {
            this.error = error
        }
    },
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    }
  }
</script>