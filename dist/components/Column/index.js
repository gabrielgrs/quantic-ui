function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import { StyledColumn } from './styles';

function Column({
  size,
  children,
  ...props
}) {
  return React.createElement(StyledColumn, _extends({
    size: size
  }, props), children);
}

Column.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};
Column.defaultProps = {
  size: 1
};
export default Column;