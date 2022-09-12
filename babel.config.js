module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@navigation': './src/core/presentation/navigation',
          '@feature-auth/screens': './src/feature-auth/presentation',
        },
      },
    ],
  ],
};
