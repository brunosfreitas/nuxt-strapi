<template>
    <div class="container">
        <div v-if="error">
            {{ error }}
        </div>

        <article v-else class="ns-article">
            <NuxtLink to="/" class="ns-article__backButton"> Back </NuxtLink>

            <h1 class="ns-article__title">{{article.title}}</h1>
            <p v-html="article.content" class="ns-article__content"></p>

            <div class="ns-article__informs">
                <p>{{ article.publish_at }}</p>
                <p>{{ article.likes }}</p>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data () {
        return {
            article: [],
            error: null
        }
    },
    async fetch() {
        try {
            let result = await this.$strapi.$articles.find({
                slug: this.slug
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
</style>