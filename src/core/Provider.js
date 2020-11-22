import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { AuthProvider, LayoutProvider, AlertProvider } from '../hooks'
import createTheme from '../theme/helpers/createTheme'

function Provider({ children, theme, appName }) {
  return (
    <LayoutProvider appName={appName}>
      <AlertProvider>
        <AuthProvider>
          <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
        </AuthProvider>
      </AlertProvider>
    </LayoutProvider>
  )
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  theme: PropTypes.shape({}),
  appName: PropTypes.string,
}

Provider.defaultProps = {
  theme: createTheme(),
  appName: 'quantic',
}

export default Provider
