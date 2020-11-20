import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

function Button(props) {
  const { children, onClick, disabled, ...rest } = props

  return (
    <StyledButton
      {...rest}
      // hasIcon={LeftIcon || RightIcon}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  color: PropTypes.string,
  onClick: PropTypes.func,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  outline: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
  size: 'default',
  color: 'primary',
  onClick: () => {},
  leftIcon: undefined,
  rightIcon: undefined,
  outline: false,
}

export default Button
