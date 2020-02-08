import _objectWithoutProperties from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { StyledCheckbox, StyledCheckboxContainer, StyledHiddenCheckbox, StyledIcon } from './styles';
import { Label } from '..';

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      label = _ref.label,
      props = _objectWithoutProperties(_ref, ["className", "checked", "label"]);

  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, label), React.createElement("div", null, React.createElement(StyledCheckboxContainer, {
    className: className
  }, React.createElement(StyledHiddenCheckbox, Object.assign({
    checked: checked
  }, props)), React.createElement(StyledCheckbox, {
    checked: checked
  }, React.createElement(StyledIcon, {
    viewBox: "0 0 24 24"
  }, React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))))));
};

export default Checkbox;