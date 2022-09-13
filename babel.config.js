module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@navigation': './src/core/presentation/navigation',
          '@feature-auth/screens': './src/feature-auth/presentation',
          '@components': './src/core/presentation/components',
          '@images': './src/assets/images',
          '@feature-chat/screens': './src/feature-chat/presentation',
        },
      },
    ],
  ],
};
