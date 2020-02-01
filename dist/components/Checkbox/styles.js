import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background: ", ";\n  border-radius: ", ";\n  transition: all 150ms;\n\n  ", ":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  ", " {\n    visibility: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
export var StyledCheckboxContainer = styled.div(_templateObject());
export var StyledIcon = styled.svg(_templateObject2());
export var StyledHiddenCheckbox = styled.input.attrs({
  type: 'checkbox'
})(_templateObject3());
export var StyledCheckbox = styled.div(_templateObject4(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return "".concat(props.theme.border.radius, "px");
}, StyledHiddenCheckbox, StyledIcon, function (props) {
  return props.checked ? 'visible' : 'hidden';
});