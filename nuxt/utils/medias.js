// https://github.com/strapi/strapi-starter-nuxt-blog/blob/master/frontend/utils/medias.js
export function getStrapiMedia(url) {
    // Check if URL is a local path
    if (url.startsWith("/")) {
      // Prepend Strapi address
      //   console.log(process)
      const strapiURL = 'http://localhost:1337'
      return `${strapiURL}${url}`;
    }
    // Otherwise return full URL
    return url;
}