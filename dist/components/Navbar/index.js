import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
const StyledNav = styled.nav`
  height: 70px;
  z-index: 997;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({
  theme
}) => `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`};
  color: white;
  padding: 0 5%;

  & > a {
    width: 110px;
  }

  @media screen and (max-width: 700px) {
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;

    & > a {
      width: ${({
  itemSize
}) => `${itemSize}%`};
    }
  }
`;
const StyledItem = styled.div`
  cursor: pointer;
  text-align: center;
  opacity: 1;
  color: ${({
  theme
}) => theme.colors.white};
  font-size: 20px;

  & > img {
    display: none;
    height: 50px;

    &:hover {
      height: 60px;
    }
  }

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 700px) {
    & > span {
      display: none;
    }

    & > img {
      display: inline;
    }
  }
`;
const StyledBrand = styled.div`
  font-weight: 600;
  position: absolute;
  left: 5%;
  font-size: 2em;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const StyledSearchBar = styled.input`
  z-index: 998;
  position: fixed;
  border: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  font-size: 2em;
  text-align: center;
`;
const StyledCloseBar = styled.span`
  position: fixed;
  cursor: pointer;
  font-size: 1.5em;
  z-index: 999;
  right: 20px;
  top: 20px;
`;
const StyledSearchButton = styled(Button)`
  background: ${({
  theme
}) => `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`};
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 70px;
`;

function NavItem({
  icon,
  path,
  alt,
  onClick,
  children
}) {
  return React.createElement(Link, {
    to: path,
    onClick: onClick
  }, React.createElement(StyledItem, null, React.createElement("img", {
    src: icon,
    alt: alt
  }), React.createElement("span", null, children)));
}

function Navbar({
  children,
  brand,
  hasSearchBar,
  onSubmitSearch,
  ...props
}) {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [searchText, setSearchText] = useState(undefined);
  const itemSize = 100 / children.length;
  return React.createElement(React.Fragment, null, searchBarIsOpen && React.createElement(React.Fragment, null, React.createElement(StyledSearchBar, {
    value: searchText,
    onChange: ({
      target
    }) => setSearchText(target.value),
    placeholder: 'Faça sua busca'
  }), React.createElement(StyledCloseBar, {
    onClick: () => {
      setSearchBarIsOpen(false);
      setSearchText(undefined);
    }
  }, "X"), searchText && React.createElement(StyledSearchButton, {
    onClick: () => {
      setSearchText(undefined);
      setSearchBarIsOpen(false);
      onSubmitSearch(searchText);
    }
  }, "Pesquisar")), React.createElement(StyledNav, {
    itemSize: itemSize
  }, React.createElement(StyledBrand, null, React.createElement(Link, {
    to: "/"
  }, brand)), hasSearchBar && React.createElement(NavItem, {
    icon: "https://image.flaticon.com/icons/svg/751/751463.svg",
    onClick: () => setSearchBarIsOpen(!searchBarIsOpen)
  }, "Pesquisar"), children.map(c => React.cloneElement(c, { ...props,
    itemSize
  }))));
}

Navbar.NavItem = NavItem;
export default Navbar;