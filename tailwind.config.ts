import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/public/.well-known/apple-app-site-association",
    "./{.vitepress,src}/**/*.{html,js,ts,vue,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
