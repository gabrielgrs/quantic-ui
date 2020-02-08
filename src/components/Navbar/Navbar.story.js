import React from 'react'
import { Navbar } from '..'

export default {
  title: 'Components/Navbar'
}

export const Base = () => {
  return (
    <Navbar
      brand="Quantic UI"
      hasSearchBar
      onSubmitSearch={value => alert(value)}
    >
      <Navbar.NavItem
        icon="https://image.flaticon.com/icons/svg/2539/2539079.svg"
        alt="Cursos"
      >
        Cursos
      </Navbar.NavItem>

      <Navbar.NavItem
        icon="https://image.flaticon.com/icons/svg/2539/2539079.svg"
        alt="Social"
      >
        Social
      </Navbar.NavItem>

      <Navbar.NavItem
        icon="https://image.flaticon.com/icons/svg/2539/2539079.svg"
        alt="Ajuda"
      >
        Ajuda
      </Navbar.NavItem>

      <Navbar.NavItem
        icon="https://image.flaticon.com/icons/svg/2539/2539079.svg"
        alt="Conta"
      >
        Conta
      </Navbar.NavItem>
    </Navbar>
  )
}
