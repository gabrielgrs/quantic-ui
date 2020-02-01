import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  position: relative;\n  width: 100%;\n\n  &::after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
export var StyledRow = styled.div(_templateObject(), function (_ref) {
  var inline = _ref.inline;
  return inline ? 'flex' : null;
}, function (_ref2) {
  var inline = _ref2.inline;
  return inline ? 'inline' : null;
}, function (_ref3) {
  var wrap = _ref3.wrap;
  return wrap ? 'wrap' : null;
});