function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect, customStyles } from './styles';
import { Label } from '..';

function Select({
  label,
  ...props
}) {
  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, " ", label, " "), React.createElement(StyledSelect, _extends({}, props, {
    styles: customStyles
  })));
}

Select.propTypes = {
  placeholder: PropTypes.string
};
Select.defaultProps = {
  placeholder: 'Selecione'
};
export default Select;