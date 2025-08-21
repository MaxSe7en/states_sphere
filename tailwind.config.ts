// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#E9E3DF",   // background / neutral
        orange: "#FF7A30", // primary / accent
        navy: "#465C88",   // secondary
        black: "#000000",  // base text
      },
    },
  },
  plugins: [],
}
export default config
