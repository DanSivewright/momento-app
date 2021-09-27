module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // THIS MUST BE LAST
      'react-native-reanimated/plugin',
    ]
  };
};
