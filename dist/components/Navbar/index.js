import _slicedToArray from "/home/gabriel/Code/quantic-ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { StyledNav, StyledBrand, StyledCheckboxButton, StyledNavContent, StyledLink, StyledNavItem } from './styles';

function Navbar(_ref) {
  var brand = _ref.brand;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      navbarIsOpen = _useState2[0],
      setNavbarIsOpen = _useState2[1];

  return React.createElement(StyledNav, null, React.createElement(StyledCheckboxButton, {
    onClick: function onClick() {
      return setNavbarIsOpen(!navbarIsOpen);
    }
  }, "Menu"), React.createElement(StyledBrand, null, "Quantc UI"), React.createElement(StyledNavContent, {
    navbarIsOpen: navbarIsOpen
  }, React.createElement(StyledNavItem, null, React.createElement(StyledLink, {
    isActive: true,
    href: "#"
  }, "Home")), React.createElement(StyledNavItem, null, React.createElement(StyledLink, {
    href: "#"
  }, "About")), React.createElement(StyledNavItem, null, React.createElement(StyledLink, {
    href: "#"
  }, "Services")), React.createElement(StyledNavItem, null, React.createElement(StyledLink, {
    href: "#"
  }, "Contact")), React.createElement(StyledNavItem, null, React.createElement(StyledLink, {
    href: "#"
  }, "Feedback"))));
}

export default Navbar;