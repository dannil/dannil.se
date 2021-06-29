module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dannil.se' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
};
