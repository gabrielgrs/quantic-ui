import _objectSpread from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  -webkit-transition: border-color 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out;\n  width: ", ";\n  box-sizing: border-box;\n\n  &:focus {\n    border: 2px solid ", ";\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import ReactSelect from 'react-select';
import styled from 'styled-components';
export var StyledSelect = styled(ReactSelect)(_templateObject(), function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth ? '100%' : 'inherit';
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});
export var customStyles = {
  option: function option(provided) {
    return _objectSpread({}, provided, {
      borderBottom: 'none'
    });
  }
};