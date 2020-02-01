import React from 'react';
import InputMask from 'react-input-mask';
import { StyledTextField } from './styles';
import { Label } from '..';

function TextField(props) {
  var label = props.label,
      fullWidth = props.fullWidth;
  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, " ", label, " "), React.createElement("div", null, React.createElement(InputMask, props, function (inputProps) {
    return React.createElement(StyledTextField, Object.assign({
      fullWidth: fullWidth
    }, inputProps));
  })));
}

TextField.defaultProps = {
  fullWidth: false,
  type: 'text'
};
export default TextField;