module.exports = {
  // Since we're using a custom domain, we don't really need this check as Vue will be running
  // at the root of all URLs.
  // publicPath: process.env.NODE_ENV === 'production' ? '/dannil.se' : '/',
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
};
