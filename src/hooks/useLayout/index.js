import React, { createContext, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import createTheme from '../../theme/helpers/createTheme'
import darkTheme from './darkTheme'

const LayoutContext = createContext()

function LayoutProvider({ children, appName }) {
  const STORAGE_KEY = `@${appName}:darkMode`

  const [theme, setTheme] = useState(createTheme())
  const [language, setLanguage] = useState('pt-br')
  const [isMobile, setIsMobile] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem(STORAGE_KEY))
  const [navbarIsFixed] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setTheme(createTheme(darkTheme))
    }
  }, [STORAGE_KEY])

  useEffect(() => {
    setIsMobile(window.innerWidth < 700)
    const handleResize = () => setIsMobile(window.innerWidth < 700)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const onChangeTheme = () => {
    if (isDarkMode) {
      const initialTheme = createTheme()
      localStorage.removeItem(STORAGE_KEY)
      setIsDarkMode(false)
      setTheme(initialTheme)
    } else {
      localStorage.setItem(STORAGE_KEY, true)
      setIsDarkMode(true)
      setTheme(createTheme(darkTheme))
    }
  }

  return (
    <LayoutContext.Provider
      value={{
        onChangeTheme,
        navbarIsFixed,
        theme,
        language,
        setTheme,
        setLanguage,
        isMobile,
        appName,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayout() {
  const context = useContext(LayoutContext)
  const { navbarIsFixed, theme, language, setTheme, setLanguage, onChangeTheme, isMobile, appName } = context
  return {
    navbarIsFixed,
    theme,
    language,
    setTheme,
    setLanguage,
    onChangeTheme,
    isMobile,
    appName,
  }
}

LayoutProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  appName: PropTypes.string.isRequired,
}

export { LayoutProvider, useLayout }
