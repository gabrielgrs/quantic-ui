import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel } from './styles'

function Label(props) {
  const { children, required } = props

  if (!children) return null

  return (
    <StyledLabel>
      {children}
      {required ? '*' : ''}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  required: PropTypes.bool,
}

Label.defaultProps = {
  required: false,
  children: undefined,
}

export default Label
