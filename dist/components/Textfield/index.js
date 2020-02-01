import React from 'react';
import InputMask from 'react-input-mask';
import { StyledTextField } from './styles';
import { Label } from '..';

function Textfield(props) {
  var onChange = props.onChange,
      name = props.name,
      value = props.value,
      label = props.label,
      type = props.type,
      mask = props.mask,
      fullWidth = props.fullWidth;
  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, " ", label, " "), React.createElement("div", null, React.createElement(InputMask, {
    mask: mask,
    value: value,
    name: name,
    type: type,
    onChange: onChange
  }, function (inputProps) {
    return React.createElement(StyledTextField, Object.assign({
      fullWidth: fullWidth
    }, inputProps));
  })));
}

Textfield.defaultProps = {
  fullWidth: false,
  type: 'text'
};
export default Textfield;