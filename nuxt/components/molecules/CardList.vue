<template>
  <div class="card-list">
    <input
      class="card-list__search"
      placeholder="Ok, let's go..."
      type="text"
      v-model="searchArticleText">

    <transition-group tag="div" class="card-list__wrapper" name="card-list__wrapper--animation">
      <atoms-card
        v-for="article in filteredArticles"
        :key="article.id"
        :link="article.slug"
        :title="article.title"
        :imgSrc="article.thumbnail.url"
        :bgColor="article.background_color"
        :imgAlt="article.thumbnail.alternativeText" />

        <span class="card-list__message" v-if="filteredArticles.length <= 0">
          Oops. No articles found!
        </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "molecules-card-list",
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