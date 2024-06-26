import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#004726",
          foreground: "#e6ede9",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary_green_light: "#e6ede9",
        primary_green: "#90e7b5",
        primary_green_dark: "#004726",

        primary_white: "#fafafa",
        primary_black: "#111111",

        secondary_red: "#A81600",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      backgroundImage: {
        hero: "linear-gradient(325deg, #e6ede9 10%, #90e7b5  63%)",

        donation:
          "linear-gradient(325deg, rgba(0, 20, 0, 0.85) 10%, rgba(0, 71, 38, 0.85) 63%), url('/donation.jpg')",

        patronize:
          "linear-gradient(325deg, rgba(0, 20, 0, 0.85) 10%, rgba(0, 71, 38, 0.85) 63%), url('/patronize.jpg')",

        adopt:
          "linear-gradient(325deg, rgba(0, 20, 0, 0.85) 10%, rgba(0, 71, 38, 0.85) 63%), url('/adopt.jpg')",

        primary_transparent:
          "linear-gradient(180deg, rgba(0,100,0,0) 50%, rgba(0,0,0,0.7) 90%)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-3d")({ legacy: true }),
  ],
} satisfies Config;

export default config;
