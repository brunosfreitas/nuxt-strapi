<template>
    <ns-article-info :article="article"></ns-article-info>
</template>

<script>
export default {
    data () {
        return {
            error: null
        }
    },
    async asyncData({ params, $http }) {
        const slug = params.slug // When calling /abc the slug will be "abc"

        const response = await $http.$get(`http://localhost:1337/articles?slug=${slug}`);
        const article = response[0];


        return { slug, article }
    }
}
</script>

<style>

.ns-article {
    font-family: 'Arial', sans-serif;
}

.ns-article__title {
    font-size: 30px;
    font-weight: 700;
}

.ns-article__content {
    font-size: 20px;
    color: rgb(107, 106, 106);
}

.ns-article__informs {
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    width: 25%;
    color: black;
    font-size: 20px;
}

</style>