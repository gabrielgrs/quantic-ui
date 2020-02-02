import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.tipographies.type.primary};
  height: 80px;
  width: 100%;
`

export const StyledCheckboxButton = styled.label`
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
  margin-top: 20px;

  & > div {
    width: 35px;
    height: 5px;
    background: white;
    margin: 6px 0;
  }

  @media screen and (max-width: 858px) {
    display: block;
  }
`

export const StyledBrand = styled.label`
  cursor: pointer;
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
`

export const StyledNavContent = styled.ul`
  float: right;
  margin-right: 20px;

  @media screen and (max-width: 858px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.primary};
    top: 80px;
    left: ${({ navbarIsOpen }) => (navbarIsOpen ? '0%' : '-100%')};
    text-align: center;
    transition: all 0.5s;
  }
`

export const StyledNavItem = styled.li`
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;

  & :hover {
    background: rgba(0, 0, 0, 0.3);
    transition: 0.5s;
  }

  @media screen and (max-width: 858px) {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
`

export const StyledLink = styled(Link)`
  border-radius: ${({ theme }) => `${theme.border.radius}px`};
  color: white;
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
  background: ${({ isActive }) =>
    isActive ? `rgba(0, 0, 0, 0.3)` : 'transparent'};

  @media screen and (max-width: 858px) {
    font-size: 20px;
  }
`
