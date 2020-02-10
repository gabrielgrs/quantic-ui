function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

function Button(props) {
  const {
    children
  } = props;
  return React.createElement(StyledButton, _extends({
    onClick: props.isDisabled || props.isLoading ? null : props.onClick
  }, props), props.isLoading ? 'Loading' : children);
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'white']),
  onClick: PropTypes.func
};
Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  size: 'default',
  color: 'primary',
  onClick: () => {}
};
export default Button;