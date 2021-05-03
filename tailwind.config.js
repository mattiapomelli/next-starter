module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {},
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1,h2,h3,h4,strong,code': {
              color: 'white',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
