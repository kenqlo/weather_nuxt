// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      weatherInfoUrl: "https://api.openweathermap.org/data/2.5/weather",
      weathermapAppid: process.env.NUXT_PUBLIC_WEATHERMAP_APPID,
      weatherIconUrl: "https://openweathermap.org/img/wn/"
    },
  },
});
