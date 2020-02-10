function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledTextarea } from './styles';
import { Label } from '..';

function TextArea({
  onChange,
  value,
  label,
  type,
  ...props
}) {
  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, " ", label, " "), React.createElement("div", null, React.createElement(StyledTextarea, _extends({}, props, {
    value: value,
    type: type,
    onChange: onChange
  }))));
}

export default TextArea;