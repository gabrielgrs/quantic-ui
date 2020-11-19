import React from 'react'
import PropTypes from 'prop-types'
import { StyledError } from './styles'

function InputError({ children }) {
  if (!children) return null

  return <StyledError>{children}</StyledError>
}

InputError.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
}

InputError.defaultProps = {
  children: undefined,
}

export default InputError
