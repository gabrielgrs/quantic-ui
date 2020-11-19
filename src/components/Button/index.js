import React from 'react'
import * as reactIcons from 'react-icons/ai'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

function Button(props) {
  const { children, onClick, loadingText, leftIcon, rightIcon, ...rest } = props

  const LeftIcon = reactIcons[leftIcon]
  const RightIcon = reactIcons[rightIcon]

  return (
    <StyledButton
      {...rest}
      hasIcon={leftIcon || rightIcon}
      onClick={!rest.disabled && !rest.loading ? onClick : undefined}
    >
      {rest.loading ? (
        loadingText
      ) : (
        <div>
          {leftIcon && <LeftIcon id="leftIcon" size={20} />}
          {children}
          {rightIcon && <RightIcon id="rightIcon" size={20} />}
        </div>
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  loadingText: PropTypes.string,
  size: PropTypes.oneOf(['default', 'small']),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  gradient: PropTypes.bool,
  info: PropTypes.bool,
  onClick: PropTypes.func,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
}

Button.defaultProps = {
  loading: false,
  disabled: false,
  loadingText: 'Carregando',
  size: 'default',
  primary: false,
  secondary: false,
  gradient: false,
  info: false,
  onClick: () => {},
  leftIcon: undefined,
  rightIcon: undefined,
}

export default Button
