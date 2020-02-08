import _objectWithoutProperties from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { StyledColumn } from './styles';

function Column(_ref) {
  var size = _ref.size,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["size", "children"]);

  return React.createElement(StyledColumn, Object.assign({
    size: size
  }, props), children);
}

Column.defaultProps = {
  size: 1
};
export default Column;