<template>
  <div class="home">
    <div class="container">
      <div class="home__cover">
        <h1 class="home__heading">{{home.heading}}</h1>
        <p class="home__description">{{home.description}}</p>
      </div>

      <ns-card-list :articles="articles"></ns-card-list>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '@/utils/medias.js';
import { getMetaTags } from '@/utils/seo.js';

export default {
  name: 'Home',
  async asyncData({ $strapi }) {
    return {
      articles: await $strapi.$articles.find(),
      home: await $strapi.$home.find(),
      global: await $strapi.$global.find()
    };
  },
  methods: {
    getStrapiMedia
  },
  head() {
    const { seo } = this.home;
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
        class: 'pageLayout--caribbean'
      }
    }
  }
}
</script>

<style>
</style>
