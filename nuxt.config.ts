export default defineNuxtConfig({
  modules: [
    "@nuxt/image"
  ],
  image: {
    cloudflare: {
      baseURL: 'https://nuxt-image-issue-1-mry.pages.dev/'
    }
  },
  experimental: {
    // https://github.com/unjs/nitro/issues/1844
    appManifest: false
  }
});
