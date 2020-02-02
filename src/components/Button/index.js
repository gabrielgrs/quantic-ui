import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

function Button(props) {
  const { children } = props

  return (
    <StyledButton
      onClick={props.isDisabled || props.isLoading ? null : props.onClick}
      {...props}
    >
      {props.isLoading ? 'Loading' : children}
    </StyledButton>
  )
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'white'
  ]),
  onClick: PropTypes.func
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  size: 'default',
  color: 'primary',
  onClick: () => {}
}

export default Button
