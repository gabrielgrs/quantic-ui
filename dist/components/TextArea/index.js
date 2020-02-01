import _objectWithoutProperties from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { StyledTextarea } from './styles';
import { Label } from '..';

function TextArea(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      label = _ref.label,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["onChange", "value", "label", "type"]);

  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, " ", label, " "), React.createElement("div", null, React.createElement(StyledTextarea, Object.assign({}, props, {
    value: value,
    type: type,
    onChange: onChange
  }))));
}

export default TextArea;