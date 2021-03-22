<template>
  <header class="header">
    <div class="container">
      <div v-if="error">
        {{ error }}
      </div>

      <nav v-else  class="header__nav">
        <div class="header__left-nav">
          <atoms-logo class="header__brand" />

          <ul class="header__list">
            <li v-for="field in header.header_links" :key="field.id">
              <NuxtLink class="header__list-item" :to="field.url">
                {{ field.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <atoms-ns-button
          class="header__button"
          :url="header.cta_url"
          :label="header.cta_label"
          :bgColor="header.cta_color" />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      header: [],
      error: null
    }
  },
  async fetch() {
    try {
      this.header = await this.$strapi.$header.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>

<style>
</style>
