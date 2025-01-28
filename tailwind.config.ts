import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{scss,css}",
    "./src/utils/**/*.{js,ts}", // Añadir soporte para archivos en utils
    "./public/**/*.html" // Añadir soporte para archivos HTML en public
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#657786",
        success: "#17BF63",
        warning: "#FFAD1F",
        danger: "#E0245E",
        info: "#1E90FF", // Añadir color info
        light: "#F8F9FA", // Añadir color light
        dark: "#343A40" // Añadir color dark
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Source Code Pro", "monospace"] // Añadir fuente mono
      },
      spacing: {
        // Añadir espaciados personalizados
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        // Añadir radios de borde personalizados
        '4xl': '2rem'
      }
    },
  },
  plugins: [
  ],
} satisfies Config;