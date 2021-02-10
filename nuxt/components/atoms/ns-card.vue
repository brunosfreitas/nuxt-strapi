<template>
    <article class="ns-card">
        <NuxtLink :to="nuxtURL" class="ns-card__link">
            <img class="ns-card__thumbnail" :alt="imgAlt" :src="strapiSrc">
            <h2 class="ns-card__title">{{ title }}</h2>
        </NuxtLink>
    </article>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias.js';

export default {
    name: "ns-card",
    props: {
        imgAlt: {
            type: String, 
            default: ""
        },
        imgSrc: {
            type: String, 
            default: ""
        },
        title: {
            type: String, 
            default: ""
        },
        link: {
            type: String,
            default: ""
        }
    },
    computed: {
        strapiSrc: function() {
            return getStrapiMedia(this.imgSrc);
        },
        nuxtURL: function() {
            return "/article/" + this.link;
        }
    }
}
</script>

<style>

</style>