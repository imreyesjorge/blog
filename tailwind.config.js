module.exports = {
  purge: ['./pages/*', './pages/posts/*', './components/*'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Layout
        'layout': 'max-content 1fr max-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
