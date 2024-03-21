import type { Config } from 'tailwindcss'

export default {
  content: [
    "./{.vitepress,src}/**/*.{html,js,ts,vue,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
