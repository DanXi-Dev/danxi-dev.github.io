import type { Config } from 'tailwindcss'

export default {
  content: [
    "./{.vitepress,src}/**/*.{html,js,ts,vue,md}",
    "./src/public/.well-known/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
