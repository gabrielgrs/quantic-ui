import { useState, useEffect } from 'react'
import defaultTheme from './defaultTheme'

function useTheme(config) {
  const [currentTheme, setCurrentTheme] = useState()

  useEffect(() => {
    if (!config) return setCurrentTheme(defaultTheme)

    const { border, colors, opacities, shadows, tipographies } = defaultTheme

    return setCurrentTheme({
      border: {
        ...border,
        ...config.border
      },
      colors: {
        ...colors,
        ...config.colors
      },
      opacities: {
        ...opacities,
        ...config.opacities
      },
      shadows: {
        ...shadows,
        ...config.shadows
      },
      tipographies: {
        ...tipographies,
        ...config.tipographies
      }
    })
  }, [config])

  return [currentTheme, setCurrentTheme]
}

export default useTheme
