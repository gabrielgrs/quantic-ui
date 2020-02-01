import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 5%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import ColorsDefaults from './colors';
export default {
  title: 'Theme/defaults'
};
var StyledWrapper = styled.div(_templateObject());
var StyledTitle = styled.div(_templateObject2());
export var Colors = function Colors() {
  return React.createElement(StyledWrapper, null, React.createElement(StyledTitle, null, "Colors"), React.createElement(ColorsDefaults, null));
};