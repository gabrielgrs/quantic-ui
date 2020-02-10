function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledDatepicker } from './styles';
import { Label } from '..';

function Datepicker({
  placeholder,
  ...props
}) {
  return React.createElement(React.Fragment, null, ' ', React.createElement(Label, {
    isRequired: props.isRequired
  }, props.label), ' ', React.createElement(StyledDatepicker, _extends({
    placeholderText: placeholder,
    selected: props.value
  }, props)));
}

Datepicker.propTypes = {
  placeholder: PropTypes.string
};
Datepicker.defaultProps = {
  placeholder: 'dia / mês / ano'
};
export default Datepicker;