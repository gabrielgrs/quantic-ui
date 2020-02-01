import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    font-family: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle(_templateObject(), function (props) {
  return props.theme.tipographies.type.primary;
});