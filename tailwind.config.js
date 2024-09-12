
module.exports = {
  content: [
    './public/**/*.html',        
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cascadia Mono', 'ui-sans-serif', 'system-ui'],
        // Optionally, you can add other font stacks here
      },
    },
  },
  plugins: [],
}
