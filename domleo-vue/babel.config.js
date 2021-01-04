const devPresets = ['@vue/babel-preset-app'];
const buildPresets = ['@babel/preset-env', '@babel/preset-typescript'];
module.exports = {
  presets: (process.env.NODE_ENV === 'development' ? devPresets : buildPresets),
  "plugins": [
    ["@babel/plugin-transform-flow-strip-types"],
    ["@babel/plugin-proposal-decorators", { "legacy": true}],
    ["@babel/plugin-proposal-class-properties", { "loose": true}]
  ]
};
