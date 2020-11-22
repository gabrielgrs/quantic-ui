module.exports = {
  stories: ['./docs/introduction.story.mdx', './docs/themification.story.mdx', '../src/**/*.story.@(mdx|js)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
  ],
}
