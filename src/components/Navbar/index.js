import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  StyledBrand,
  StyledNav,
  StyledCloseBar,
  StyledItem,
  StyledSearchBar,
  StyledSearchButton,
  StyledSubnav
} from './styles'

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
        <StyledBrand onClick={() => setSubnavs(undefined)}>
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
              onClick={() => setSubnavs(undefined)}
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
