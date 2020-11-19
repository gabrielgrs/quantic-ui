import createColorsVariants from './createColorsVariants'
import * as defaultTheme from '../config'

export default (config = {}) => ({
  ...defaultTheme,
  borders: {
    ...defaultTheme.borders,
    ...config.borders,
  },
  colors: createColorsVariants({
    ...defaultTheme.colors,
    ...config.colors,
  }),
  opacities: {
    ...defaultTheme.opacities,
    ...config.opacities,
  },
  shadows: {
    ...defaultTheme.shadows,
    ...config.shadows,
  },
  tipographies: {
    ...defaultTheme.tipographies,
    ...config.tipographies,
  },
  mediaSizes: {
    ...defaultTheme.mediaSizes,
    ...config.mediaSizes,
  },
})
