import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Quantic UI',
    brandUrl: 'http://quantic-ui.netlify.com/',
    brandImage: 'https://placehold.it/350x150'
  })
})
