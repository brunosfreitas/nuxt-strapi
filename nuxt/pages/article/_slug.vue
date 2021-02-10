<template>
    <article class="ns-article">
        <NuxtLink to="/" class="ns-article__backButton"> Back </NuxtLink>
        <div v-if="error">
            {{ error }}
        </div>
        <h1 class="ns-article__title">{{article.title}}</h1>
        <p v-html="article.content" class="ns-article__content"></p>
        <div class="ns-article__informs">
        <p>{{ article.publish_at }}</p>
        <p>{{ article.likes }}</p>
        </div>
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

<style>

.ns-article {
    font-family: 'Arial', sans-serif;
}

.ns-article__title {
    font-size: 30px;
    font-weight: 700;
}

.ns-article__content {
    font-size: 20px;
    color: rgb(107, 106, 106);
}

.ns-article__informs {
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    width: 25%;
    color: black;
    font-size: 20px;
}

</style>