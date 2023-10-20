export default defineNuxtConfig({
  modules: [
    "@nuxt/image"
  ],
  image: {
    cloudflare: {
      baseURL: ''
    }
  },
  experimental: {
    // https://github.com/unjs/nitro/issues/1844
    appManifest: false
  }
});
