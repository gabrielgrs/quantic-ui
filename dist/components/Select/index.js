import _objectWithoutProperties from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { StyledSelect, customStyles } from './styles';
import { Label } from '..';

function Select(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, " ", label, " "), React.createElement(StyledSelect, Object.assign({}, props, {
    styles: customStyles
  })));
}

Select.defaultProps = {
  placeholder: 'Selecione'
};
export default Select;