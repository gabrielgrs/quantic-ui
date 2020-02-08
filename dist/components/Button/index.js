import React from 'react';
import { StyledButton } from './styles';

function Button(props) {
  var children = props.children;
  return React.createElement(StyledButton, Object.assign({
    onClick: props.isDisabled || props.isLoading ? null : props.onClick
  }, props), props.isLoading ? 'Loading' : children);
}

Button.defaultProps = {
  isLoading: false,
  isDisabled: false,
  size: 'default',
  color: 'primary',
  onClick: function onClick() {}
};
export default Button;