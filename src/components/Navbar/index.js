import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  StyledNav,
  StyledBrand,
  StyledCheckboxButton,
  StyledNavContent,
  StyledLink,
  StyledNavItem
} from './styles'

function Item({ children, path, isActive }) {
  return (
    <StyledNavItem>
      <StyledLink isActive={isActive} to={path}>
        {children}
      </StyledLink>
    </StyledNavItem>
  )
}

function Navbar({ Brand, children }) {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  return (
    <StyledNav>
      <StyledCheckboxButton onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledCheckboxButton>
      <Link to="/">
        <StyledBrand>
          <Brand />
        </StyledBrand>
      </Link>
      <StyledNavContent navbarIsOpen={navbarIsOpen}>
        {children}
      </StyledNavContent>
    </StyledNav>
  )
}

Navbar.Item = Item

Navbar.propTypes = {
  Brand: PropTypes.func.isRequired
}

Navbar.Item.propTypes = {
  isActive: PropTypes.bool,
  path: PropTypes.string.isRequired
}

Navbar.Item.defaultProps = {
  isActive: false
}

export default Navbar
