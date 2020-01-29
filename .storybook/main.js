module.exports = {
  stories: ['../src/**/*.story.js', '../src/**/*.story.mdx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
  presets: ['@storybook/addon-docs/react/preset']
}
