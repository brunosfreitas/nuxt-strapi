<template>
    <div class="employee-card">
        <div class="employee-card__item">
            <img class="employee-card__illustration" :src="getStrapiMedia(imgSrc)" :alt="imgAlt">
            <p class="employee-card__name">{{ name }}</p>
            <p class="employee-card__position">{{ position }}</p>

            <ul class="employee-card__social-links">
                <li v-for="item in socialMediaLinks" :key="item.id">
                    <a :href="item.url">
                        <img :src="getStrapiMedia(item.icon.url)" :alt="item.icon.alternativeText">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias.js';

export default {
    name: "EmployeeCard",
    props: {
        name: {
            type: String,
            default: ""
        },
        position: {
            type: String,
            default: ""
        },
        imgAlt: {
            type: String,
            default: ""
        },
        imgSrc: {
            type: String,
            default: ""
        },
        iconLink: {
            type: String,
            default: ""
        },
        socialMediaLinks: {
            type: Array
        }
    },
    methods: {
        getStrapiMedia
    }
}
</script>

<style>

</style>