import React from 'react'
import PropTypes from 'prop-types'
import { render, fireEvent } from '@testing-library/react'
import { QuanticProvider } from '../..'

const AllProviders = ({ children }) => <QuanticProvider>{children}</QuanticProvider>

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options })

AllProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
}

export const getStyles = (element) => window.getComputedStyle(element)

export * from '@testing-library/react'

export { customRender as render }
export { fireEvent }
