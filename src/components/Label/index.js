import React from 'react'
import PropTypes from 'prop-types'
import { StyledLabel } from './styles'

function Label(props) {
  const { children, isRequired } = props

  if (!children) return null

  return (
    <StyledLabel>
      {children}
      {isRequired ? '*' : ''}
    </StyledLabel>
  )
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  isRequired: PropTypes.bool,
}

Label.defaultProps = {
  isRequired: false,
  children: undefined,
}

export default Label
