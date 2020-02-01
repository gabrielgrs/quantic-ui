import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-weight: 600;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
export var StyledLabel = styled.label(_templateObject(), function (props) {
  return "".concat(props.theme.tipographies.size.md, "px");
});