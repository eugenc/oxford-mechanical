/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0037ff",
          "primary-600": "#002edb",
          secondary: "#dc5608",
          accent: "#9cc59e",
          ink: "#0b0e1c"
        }
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: { 
        xl: "16px", 
        "2xl": "24px" 
      },
      boxShadow: {
        "brand-sm": "0 1px 2px rgba(0,0,0,0.06)",
        "brand-md": "0 4px 12px rgba(0,0,0,0.10)"
      },
      maxWidth: { 
        container: "1280px" 
      }
    }
  },
  plugins: []
}
