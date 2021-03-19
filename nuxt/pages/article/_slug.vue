<template>
  <div class="article">
    <article class="container">
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
import { getStrapiMedia } from '@/utils/medias.js';
import { getMetaTags } from '@/utils/seo.js';

export default {
  async asyncData({ $strapi, params }) {
    const matchingArticles = await $strapi.$articles.find({
      slug: params.slug
    });

    return {
      article: matchingArticles[0],
      global: await $strapi.$global.find()
    };
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
  head() {
    const { seo } = this.article;
    const { defaultSeo, favicon, siteName } = this.global;

    const fullSeo = {
      ...defaultSeo,
      ...seo
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
      bodyAttrs: {
        class: this.article.background_color ? `pageLayout--${this.article.background_color}`: 'pageLayout'
      }
    }
  }
}
</script>

<style>
</style>