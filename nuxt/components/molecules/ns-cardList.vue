<template>
  <div class="ns-cardList">
    <input
      class="ns-cardList__search"
      placeholder="Ok, let's go..."
      type="text"
      v-model="searchArticleText">

    <div class="ns-cardList__wrapper">
      <ns-card
        v-for="article in filteredArticles"
        :key="article.id" :link="article.slug"
        :title="article.title"
        :imgSrc="article.thumbnail.url"
        :bgColor="article.BackgroundColor"
        :imgAlt="article.thumbnail.alternativeText" />

        <span class="ns-cardList__message" v-if="filteredArticles.length <= 0">
          Oops. No articles found!
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ns-hero',
  data () {
    return {
      searchArticleText: ''
    }
  },
  props: {
    articles: {
      type: Array
    }
  },
  computed: {
    filteredArticles() {
      function compare(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;

        return 0;
      }

      let articles = this.articles.filter(article => {
        return (
          article.title
            .toLowerCase()
            .indexOf(this.searchArticleText.toLowerCase()) != -1
        );
      });

      articles.sort(compare);

      return articles;
    }
  }
}
</script>