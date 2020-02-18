import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Button from '../Button'

const StyledNav = styled.nav`
  height: 70px;
  z-index: 9997;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 5%;
  box-shadow: ${({ theme }) => theme.shadows.box.navbar};

  & > a {
    padding: 0 20px;
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
  color: ${({ theme }) => theme.colors.primary};
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
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  left: 5%;
  font-size: 2em;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

const StyledSearchBar = styled.input`
  z-index: 9998;
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
  position: fixed;
  cursor: pointer;
  font-size: 1.5em;
  z-index: 9999;
  right: 20px;
  top: 20px;
`

const StyledSearchButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.box.navbar};
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 70px;
`

const animatedSubnav = keyframes`
  from {
    opacity: 0;
    height: 0px;
  }

  to {
    opacity: 1;
    height: 100%;
  }
`

const StyledSubnav = styled.div`
  z-index: 9996;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;

  & > a {
    animation: ${animatedSubnav} 0.5s ease-in;
    font-size: 1em;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: 100%;
    position: fixed;
    top: 0;

    & > a {
      font-size: 2em;
      padding: 10px;
    }
  }
`

function NavItem({ icon, path, alt, onClick, subItems, children }) {
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
  const [subnavs, setSubnavs] = useState(undefined)

  const itemSize = 100 / children.length

  const isMobile = window.screen.width < 701

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
        {children.map((c, index) => {
          return React.cloneElement(c, {
            ...props,
            key: index,
            itemSize,
            onClick: () => {
              setSubnavs(c.props.subItems)
            }
          })
        })}
      </StyledNav>
      {subnavs && (
        <StyledSubnav>
          {subnavs.map(s => (
            <Link
              key={s.text}
              to={s.path}
              onClick={() => {
                if (isMobile) {
                  setSubnavs(undefined)
                }
              }}
            >
              {s.text}
            </Link>
          ))}
        </StyledSubnav>
      )}
    </>
  )
}

Navbar.NavItem = NavItem

export default Navbar
