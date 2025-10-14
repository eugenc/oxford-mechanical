/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563eb",
          "primary-700": "#1d4ed8",
          secondary: "#ea580c",
          accent: "#eab308",
          ink: "#0f172a"
        }
      },
      fontFamily: {
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: { xl: "16px", "2xl": "24px" },
      boxShadow: {
        "brand-sm": "0 1px 2px rgba(0,0,0,0.06)",
        "brand-md": "0 4px 12px rgba(0,0,0,0.10)"
      },
      maxWidth: { container: "1280px" }
    }
  },
  plugins: []
};
