import { create } from '@storybook/theming/create'

import Logo from '../src/assets/images/logo-blue.png'

export default create({
  base: 'light',
  brandImage: Logo,
  brandTitle: 'Quantic UI - Storybook',
})
