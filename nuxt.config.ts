export default defineNuxtConfig({
  modules: [
    "@nuxt/image"
  ],
  nitro: {
    preset: "cloudflare-pages"
  },
  experimental: {
    // https://github.com/unjs/nitro/issues/1844
    appManifest: false
  }
});
