module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/assets': './src/assets',
          '~/screens': './src/screens',
          '~/styles': './src/styles',
          '~/shared': './src/shared',
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env"
      }
    ]
  ],
};
