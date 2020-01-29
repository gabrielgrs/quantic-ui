import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/config/theme/GlobalStyle'
import { addDecorator, addParameters } from '@storybook/react'
import theme from '../src/config/theme'

addParameters({
  options: {
    showRoots: true
  }
})

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{ width: '100%', padding: '15px' }}>
      <GlobalStyle />
      {story()}
    </div>
  </ThemeProvider>
))
