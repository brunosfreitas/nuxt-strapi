<template>
    <article :class="['ns-card',`ns-card--${bgColor}`]">
        <NuxtLink :to="nuxtURL" class="ns-card__link">
            <img class="ns-card__thumbnail" :alt="imgAlt" :src="getStrapiMedia(imgSrc)">
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
        },
        bgColor: {
            type: String,
            default: ""
        }
    },
    computed: {
        nuxtURL: function() {
            return "/article/" + this.link;
        }
    },
    methods: {
        getStrapiMedia
    }
}
</script>

<style>
</style>
