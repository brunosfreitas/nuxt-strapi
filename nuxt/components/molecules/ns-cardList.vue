<template>
  <div class="ns-cardList">
    <div v-if="error">
      {{ error }}
    </div>
    <div class="ns-cardList__wrapper">
        <ns-card v-for="article in articles" :key="article.id" :link="article.slug" :title="article.title" :imgSrc="article.thumbnail.url" :imgAlt="article.thumbnail.alternativeText"></ns-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: null
    }
  },
  props: {
    articles: {
      type: Array,
      default: []
    }
  },  
}
</script>