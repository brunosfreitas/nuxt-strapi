<template>
  <article class="ns-article">
        <NuxtLink to="/" class="ns-article__backButton"> Back </NuxtLink>
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
    props: {
        article: {
            type: Object,
            default: {}
        }
    }
}
</script>

<style>

</style>