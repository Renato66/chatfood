module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
        `
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE || 'en',
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
