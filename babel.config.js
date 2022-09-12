module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
        },
      },
    ],
  ],
};
