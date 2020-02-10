import React from 'react';
import { Navbar } from '..';
export default {
  title: 'Components/Navbar'
};
export const Base = () => {
  return React.createElement(Navbar, {
    brand: "Quantic UI",
    hasSearchBar: true,
    onSubmitSearch: value => alert(value)
  }, React.createElement(Navbar.NavItem, {
    icon: "https://image.flaticon.com/icons/svg/2539/2539079.svg",
    alt: "Cursos"
  }, "Cursos"), React.createElement(Navbar.NavItem, {
    icon: "https://image.flaticon.com/icons/svg/2539/2539079.svg",
    alt: "Social"
  }, "Social"), React.createElement(Navbar.NavItem, {
    icon: "https://image.flaticon.com/icons/svg/2539/2539079.svg",
    alt: "Ajuda"
  }, "Ajuda"), React.createElement(Navbar.NavItem, {
    icon: "https://image.flaticon.com/icons/svg/2539/2539079.svg",
    alt: "Conta"
  }, "Conta"));
};