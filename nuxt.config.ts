export default defineNuxtConfig({
  modules: [
    "@nuxt/image"
  ],
  experimental: {
    // https://github.com/unjs/nitro/issues/1844
    appManifest: false
  }
});
