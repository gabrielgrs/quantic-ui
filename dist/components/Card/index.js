import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0;\n  left: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-size: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 100%;\n  opacity: ", ";\n  box-shadow: ", ";\n  border: solid silver 1px;\n  height: 300px;\n  position: relative;\n\n  &:hover {\n    opacity: 1;\n    box-shadow: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
export var StyledWrapper = styled.div(_templateObject(), function (props) {
  return props.theme.opacities.soft;
}, function (props) {
  return props.theme.shadows.box.soft;
}, function (props) {
  return props.theme.shadows.box.medium;
});
export var StyledBanner = styled.img(_templateObject2());
export var StyledContent = styled.div(_templateObject3());
export var StyledTitle = styled.div(_templateObject4(), function (props) {
  return props.theme.tipographies.weight.bold;
}, function (props) {
  return "".concat(props.theme.tipographies.size.md, "px");
});
export var StyledDescription = styled.div(_templateObject5());
export var StyledAuthor = styled.div(_templateObject6(), function (props) {
  return "".concat(props.theme.tipographies.size.xs, "px");
});
export var StyledFooter = styled.div(_templateObject7());

function Card(_ref) {
  var title = _ref.title,
      description = _ref.description,
      author = _ref.author,
      banner = _ref.banner;
  return React.createElement(StyledWrapper, null, React.createElement(StyledBanner, {
    src: banner
  }), React.createElement(StyledContent, null, React.createElement(StyledTitle, null, title)), React.createElement(StyledFooter, null, React.createElement(StyledDescription, null, description), React.createElement(StyledAuthor, null, author)));
}

export default Card;