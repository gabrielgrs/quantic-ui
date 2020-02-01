import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0.3em 5px;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #564f64;\n  background-color: #ffffff;\n  background-image: none;\n  background-clip: padding-box;\n  border: ", ";\n  border-radius: ", ";\n  -webkit-transition: border-color 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,\n    -webkit-box-shadow 0.15s ease-in-out;\n  width: ", ";\n  box-sizing: border-box;\n\n  &:focus {\n    border: 2px solid ", ";\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
export var StyledTextField = styled.input(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return "2px ".concat(theme.colors.lightSilver, " solid");
}, function (props) {
  return "".concat(props.theme.border.radius, "px");
}, function (_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth ? '100%' : 'inherit';
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.primary;
});