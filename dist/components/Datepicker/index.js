import _objectWithoutProperties from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { StyledDatepicker } from './styles';
import { Label } from '..';

function Datepicker(_ref) {
  var placeholder = _ref.placeholder,
      props = _objectWithoutProperties(_ref, ["placeholder"]);

  return React.createElement(React.Fragment, null, ' ', React.createElement(Label, {
    isRequired: props.isRequired
  }, props.label), ' ', React.createElement(StyledDatepicker, Object.assign({
    placeholderText: placeholder,
    selected: props.value
  }, props)));
}

Datepicker.defaultProps = {
  placeholder: 'dia / mês / ano'
};
export default Datepicker;