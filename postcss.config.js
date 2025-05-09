export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    '@fullhuman/postcss-purgecss'() {
      return {
        content: [
          './index.html',
          './src/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ['html', 'body']
      }
    }
  },
};