import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: default;\n  background: ", ";\n  border-radius: ", ";\n  text-align: center;\n  width: 200px;\n  padding: 7px 0px;\n  color: white;\n  margin-bottom: 3px;\n  color: ", ";\n  border: solid silver 1px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import theme from '../../config/theme';
var StyledTagColor = styled.div(_templateObject(), function (props) {
  return props.theme.colors[props.type];
}, function (props) {
  return "".concat(props.theme.border.radius, "px");
}, function (props) {
  return props.type === 'white' ? 'black' : 'white';
});

function TagColor(_ref) {
  var type = _ref.type;
  return React.createElement(StyledTagColor, {
    type: type
  }, React.createElement("strong", null, type, ":"), " ", theme.colors[type]);
}

export default (function () {
  return Object.keys(theme.colors).map(function (c) {
    return React.createElement(TagColor, {
      type: c
    });
  });
});