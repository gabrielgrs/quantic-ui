import _taggedTemplateLiteral from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 17px;\n  padding: 7px 13px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  background: ", ";\n\n  @media screen and (max-width: 858px) {\n    font-size: 20px;\n\n    &:hover {\n      background: none;\n      color: #0082e6;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  line-height: 80px;\n  margin: 0 5px;\n\n  & :hover {\n    background: #1b9bff;\n    transition: 0.5s;\n  }\n\n  @media screen and (max-width: 858px) {\n    display: block;\n    margin: 50px 0;\n    line-height: 30px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n  margin-right: 20px;\n\n  @media screen and (max-width: 858px) {\n    position: fixed;\n    width: 100%;\n    height: 100vh;\n    background: ", ";\n    top: 80px;\n    left: ", ";\n    text-align: center;\n    transition: all 0.5s;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 35px;\n  line-height: 80px;\n  padding: 0 100px;\n  font-weight: bold;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n  color: white;\n  float: right;\n  line-height: 80px;\n  margin-right: 40px;\n  cursor: pointer;\n  display: none;\n\n  @media screen and (max-width: 858px) {\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  font-family: ", ";\n  height: 80px;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
export var StyledNav = styled.nav(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.tipographies.type.primary;
});
export var StyledCheckboxButton = styled.label(_templateObject2());
export var StyledBrand = styled.label(_templateObject3());
export var StyledNavContent = styled.ul(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.secondary;
}, function (_ref4) {
  var navbarIsOpen = _ref4.navbarIsOpen;
  return navbarIsOpen ? '0%' : '-100%';
});
export var StyledNavItem = styled.li(_templateObject5());
export var StyledLink = styled.a(_templateObject6(), function (_ref5) {
  var isActive = _ref5.isActive,
      theme = _ref5.theme;
  return isActive ? theme.colors.secondary : 'transparent';
});