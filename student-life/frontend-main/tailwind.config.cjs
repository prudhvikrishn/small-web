// Tailwind 2 (via @tailwindcss/postcss7-compat) reads CommonJS config and only
// removes unused classes when `purge` lists the template files.
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
