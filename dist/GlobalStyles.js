import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    padding: 0;\n    margin: 0;\n    text-decoration: none;\n    list-style: none;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: ", ";\n  }\n\n\n  \n  button, input {\n    display: inline-block;\n    border-radius: 0;\n    -webkit-appearance: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle(_templateObject(), function (props) {
  return props.theme.tipographies.type.primary;
});