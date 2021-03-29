<template>
  <div class="contact">
    <div class="container">
      <div class="contact__column">
        <h2 class="contact__title">{{ contact.title }}</h2>
        <p class="contact__text">{{ contact.description }}</p>

        <atoms-button
          class="contact__button "
          :url="contact.button_link"
          :label="contact.button_label "
          :bgColor="contact.button_color" />

        <h2 class="contact__title">{{ contact.second_title }}</h2>
        <ul>
          <li class="contact__contact-item" v-for="field in contact.contact_us" :key="field.id">
            <i class="contact__contact-icon" >
              <img :src="getStrapiMedia(field.icon.url)" :alt="field.icon.alternativeText">
            </i>
            <a :href="field.contact_item_url" target="_blank">{{ field.contact_item }}</a>
          </li>
        </ul>
      </div>

      <div class="contact__column">
        <molecules-employee-card-list />
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '@/utils/medias.js';
import { getMetaTags } from '@/utils/seo.js';

export default {
  name: 'contact',
  async asyncData({ $strapi }) {
    return {
      contact: await $strapi.$contact.find(),
      global: await $strapi.$global.find()
    };
  },
  methods: {
    getStrapiMedia
  },
  head() {
    const { seo } = this.contact;
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
        class: 'pageLayout--yellow'
      }
    }
  }
}
</script>

<style>
</style>
