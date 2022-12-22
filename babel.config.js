module.exports = (api) => {
  api.cache(true)
  return {
    "env": {
      "development": {
        "plugins": [
          "tailwindcss-react-native/babel",
          ["module-resolver", {
            "root": ["./src"]
          }]
        ]
      }
    },
    presets: ['babel-preset-expo']
  }
}