import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext(null)

function AlertProvider({ children }) {
  const show = () => null

  const hide = () => null

  return <Context.Provider value={{ show, hide }}>{children}</Context.Provider>
}

function useAlert() {
  const { hide, show } = useContext(Context)

  return { hide, show }
}

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { AlertProvider, useAlert }
