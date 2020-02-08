import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  position: absolute;\n  bottom: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  transform: translateY(0);\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  padding: 10px;\n  color: #fff;\n  transition: all 0.25s ease-in;\n  transform: translateY(100%);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 270px;\n  height: 150px;\n  border-radius: 3px;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  overflow: hidden;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n\n    .card-info {\n      transform: translateY(0%);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
export var StyledCard = styled.div(_templateObject());
export var StyledCardInfo = styled.div(_templateObject2());
export var StyledCardTitle = styled.h4(_templateObject3());
export var StyledCardDescription = styled.p(_templateObject4());
export default function Card(props) {
  return React.createElement(StyledCard, {
    style: {
      'background-image': "url(".concat(props.banner, ")")
    },
    className: "card"
  }, React.createElement(StyledCardInfo, {
    className: "card-info"
  }, React.createElement(StyledCardTitle, null, props.title), React.createElement(StyledCardDescription, null, props.description)));
}