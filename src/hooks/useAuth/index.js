import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
// import api from 'api'
import { initialState } from './initialState'
import useStorage from '../useStorage'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const { clearStorage, setItem, getItem } = useStorage()

  const [data, setData] = useState({
    isAuthenticated: Boolean(getItem('token')),
    token: getItem('token'),
    email: getItem('email'),
  })

  const signOut = () => {
    // api.defaults.headers.authorization = undefined
    clearStorage()
    setData(initialState)
  }

  const signIn = ({ token, email }) => {
    // api.defaults.headers.authorization = token
    setItem('token', token)
    setItem('email', email)
    setData({ ...initialState, isAuthenticated: true, token, email })
  }

  return <AuthContext.Provider value={{ ...data, signIn, signOut }}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = useContext(AuthContext)
  const { email, isAuthenticated, signIn, signOut } = context
  return { email, isAuthenticated, signIn, signOut }
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
}

export { AuthProvider, useAuth }
