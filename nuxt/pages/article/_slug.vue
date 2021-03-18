<template>
    <div class="article">
        <div v-if="error">
            {{ error }}
        </div>

        <article v-else class="container">
            <NuxtLink to="/" class="article__backButton"> Back </NuxtLink>

            <h1 class="article__title">{{article.title}}</h1>
            <div class="article__wrapper">
                <div class="article__wrapper--left">
                    <img class="article__thumbnail" :alt="imgAlt" :src="imgSrc">
                </div>

                <div class="article__wrapper--right">
                    <p v-html="article.content" class="article__content"></p>

                    <div class="article__informs">
                        <p>{{ article.publish_at }}</p>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

import { getStrapiMedia } from '../../utils/medias.js';

export default {
    data () {
        return {
            article: [],
            error: null
        }
    },
    methods: {
        getStrapiMedia
    },
    computed: {
        imgSrc: function() {
            return getStrapiMedia(this.article.thumbnail?.url)
        },
        imgAlt: function() {
            return this.article.thumbnail?.imageAlternative;
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
    },
    head() {
        return {
            bodyAttrs: {
                class: this.article.background_color ? `pageLayout--${this.article.background_color}`: 'pageLayout'
            }
        }
    }
}
</script>

<style>
</style>