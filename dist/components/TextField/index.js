function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { StyledTextField } from './styles';
import { Label } from '..';

function TextField(props) {
  const {
    label,
    fullWidth
  } = props;
  return React.createElement("div", null, React.createElement(Label, {
    isRequired: props.isRequired
  }, " ", label, " "), React.createElement("div", null, React.createElement(InputMask, props, inputProps => React.createElement(StyledTextField, _extends({
    fullWidth: fullWidth
  }, inputProps)))));
}

TextField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  type: PropTypes.string
};
TextField.defaultProps = {
  fullWidth: false,
  type: 'text',
  name: ''
};
export default TextField;