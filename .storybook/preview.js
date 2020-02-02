import React from 'react'
import { ThemeProvider } from 'styled-components'
import { addDecorator, addParameters } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import theme from '../src/config/theme'
import GlobalStyles from '../src/GlobalStyles'

addParameters({
  options: {
    showRoots: true
  }
})

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      {story()}
    </BrowserRouter>
  </ThemeProvider>
))
