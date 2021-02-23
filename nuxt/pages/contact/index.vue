<template>
  <div class="contact">
    <div class="container">
      <div class="contact__column">
        <h2 class="contact__title">{{ contact.title }}</h2>
        <p class="contact__text">{{ contact.description }}</p>
        <a :href="contact.button_link" class="contact__button button">{{ contact.button_label }}</a>

        <h2 class="contact__title">{{ contact.contact_title }}</h2>
        <ul>
          <li class="contact__contact-item" v-for="field in contact.contact_us" :key="field.id">
            <i class="contact__contact-icon" >
              <img :src="strapiSrc(field.icon.url)" :alt="field.icon.alternativeText">
            </i>
            <a :href="field.contact_item_url" target="_blank">{{ field.contact_item }}</a>
          </li>
        </ul>
      </div>

      <div class="contact__column">
        <employee-card-list />
      </div>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias.js';

export default {
  name: 'contact',
  data () {
    return {
      contact: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.contact = await this.$strapi.$contact.find()
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    strapiSrc: function(img) {
      return getStrapiMedia(img);
    }
  }
}
</script>

<style>

</style>
