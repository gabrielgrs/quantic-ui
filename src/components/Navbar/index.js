import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'

const StyledNav = styled.nav`
  z-index: 997;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`};
  color: white;
  height: 70px;
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
      width: ${({ itemSize }) => `${itemSize}%`};
    }
  }
`

const StyledItem = styled.div`
  cursor: pointer;
  text-align: center;
  opacity: 1;
  color: ${({ theme }) => theme.colors.white};
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
`

const StyledBrand = styled.div`
  position: absolute;
  left: 5%;
  font-size: 2em;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

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
`

const StyledCloseBar = styled.span`
  position: absolute;
  cursor: pointer;
  font-size: 1.5em;
  z-index: 999;
  right: 20px;
  top: 20px;
`

const StyledSearchButton = styled(Button)`
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`};
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 70px;
`

function NavItem({ icon, path, alt, onClick, children }) {
  return (
    <Link to={path} onClick={onClick}>
      <StyledItem>
        <img src={icon} alt={alt} />
        <span>{children}</span>
      </StyledItem>
    </Link>
  )
}

function Navbar({ children, brand, hasSearchBar, onSubmitSearch, ...props }) {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false)
  const [searchText, setSearchText] = useState(undefined)

  const itemSize = 100 / children.length

  return (
    <>
      {searchBarIsOpen && (
        <>
          <StyledSearchBar
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
            placeholder={'Faça sua busca'}
          />
          <StyledCloseBar
            onClick={() => {
              setSearchBarIsOpen(false)
              setSearchText(undefined)
            }}
          >
            X
          </StyledCloseBar>
          {searchText && (
            <StyledSearchButton
              onClick={() => {
                setSearchText(undefined)
                setSearchBarIsOpen(false)
                onSubmitSearch(searchText)
              }}
            >
              Pesquisar
            </StyledSearchButton>
          )}
        </>
      )}
      <StyledNav itemSize={itemSize}>
        <StyledBrand>
          <Link to="/">{brand}</Link>
        </StyledBrand>
        {hasSearchBar && (
          <NavItem
            icon="https://image.flaticon.com/icons/svg/751/751463.svg"
            onClick={() => setSearchBarIsOpen(!searchBarIsOpen)}
          >
            Pesquisar
          </NavItem>
        )}
        {children.map(c => React.cloneElement(c, { ...props, itemSize }))}
      </StyledNav>
    </>
  )
}

Navbar.NavItem = NavItem

export default Navbar
