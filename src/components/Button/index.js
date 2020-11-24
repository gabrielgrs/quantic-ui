import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

function Button(props) {
  const { children, onClick, disabled, ...rest } = props

  return (
    <StyledButton {...rest} disabled={disabled} onClick={disabled ? undefined : onClick}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
  size: 'default',
  background: 'primary',
  color: 'white',
  onClick: () => {},
  outline: false,
}

export default Button
