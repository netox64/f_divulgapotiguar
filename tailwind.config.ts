import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    'bg-red-500', 'hover:bg-red-700',
    'text-red-500', 'hover:text-red-700',
    'border-red-500', 'hover:border-red-700',

    'bg-blue-500', 'hover:bg-blue-700',
    'text-blue-500', 'hover:text-blue-700',
    'border-blue-500', 'hover:border-blue-700',

    'bg-green-500', 'hover:bg-green-700',
    'text-green-500', 'hover:text-green-700',
    'border-green-500', 'hover:border-green-700',

    'bg-yellow-500', 'hover:bg-yellow-700',
    'text-yellow-500', 'hover:text-yellow-700',
    'border-yellow-500', 'hover:border-yellow-700',

    'bg-pink-500', 'hover:bg-pink-700',
    'text-pink-500', 'hover:text-pink-700',
    'border-pink-500', 'hover:border-pink-700',

    'bg-indigo-500', 'hover:bg-indigo-700',
    'text-indigo-500', 'hover:text-indigo-700',
    'border-indigo-500', 'hover:border-indigo-700',

    'bg-teal-500', 'hover:bg-teal-700',
    'text-teal-500', 'hover:text-teal-700',
    'border-teal-500', 'hover:border-teal-700',

    'from-green-500', 'to-green-700',
    'from-blue-500', 'to-blue-700',
  ],
  plugins: [],
} satisfies Config;
