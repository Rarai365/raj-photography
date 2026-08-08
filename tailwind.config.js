/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a09',
        panel: '#121210',
        line: '#26251f',
        bone: '#f4f1ea',
        mute: '#9c988c',
        brass: '#c8a06a',
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
};
