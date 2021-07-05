let isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  // Since we're using a custom domain, we don't really need this check as Vue will be running
  // at the root both in local dev and GitHub Pages.
  // publicPath: process.env.NODE_ENV === 'production' ? '/dannil.se' : '/',
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].isProduction = isProduction;
        args[0].gaTag = process.env.VUE_APP_GA_TAG;
        return args;
      })
  }
};
