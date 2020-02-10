function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledCheckbox, StyledCheckboxContainer, StyledHiddenCheckbox, StyledIcon } from './styles';
import { Label } from '..';

const Checkbox = ({
  className,
  checked,
  label,
  ...props
}) => React.createElement("div", null, React.createElement(Label, {
  isRequired: props.isRequired
}, label), React.createElement("div", null, React.createElement(StyledCheckboxContainer, {
  className: className
}, React.createElement(StyledHiddenCheckbox, _extends({
  checked: checked
}, props)), React.createElement(StyledCheckbox, {
  checked: checked
}, React.createElement(StyledIcon, {
  viewBox: "0 0 24 24"
}, React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}))))));

export default Checkbox;