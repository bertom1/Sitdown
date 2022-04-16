module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //move colors to extend so that default tailwind colors are available
      colors:{
        'pink': '#FFB7B7',
        'green': '#4caf50',
      },
    },
    
  },
  plugins: [],
}
