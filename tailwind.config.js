module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    //
    require('@tailwindcss/line-clamp'),
  ],
}
