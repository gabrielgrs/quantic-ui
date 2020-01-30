import React from 'react'
import { ThemeProvider } from 'styled-components'
import { addDecorator, addParameters } from '@storybook/react'
import theme from '../src/config/theme'
import GlobalStyles from '../src/GlobalStyles'

addParameters({
  options: {
    showRoots: true
  }
})

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {story()}
  </ThemeProvider>
))
