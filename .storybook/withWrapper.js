import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QuanticProvider, GlobalStyles, createTheme } from '../src'

const withGlobalStyles = (storyFn) => (
  <QuanticProvider theme={createTheme()}>
    <BrowserRouter>
      <GlobalStyles />
      <div style={{ padding: '3%' }}>{storyFn()}</div>
    </BrowserRouter>
  </QuanticProvider>
)

export default withGlobalStyles
