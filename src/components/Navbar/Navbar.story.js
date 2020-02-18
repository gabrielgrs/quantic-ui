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
        path="cursos"
      >
        Cursos
      </Navbar.NavItem>

      <Navbar.NavItem
        icon="https://image.flaticon.com/icons/svg/2539/2539079.svg"
        alt="Social"
        subItems={[
          {
            path: '/',
            text: 'Item 01'
          },
          {
            path: '/',
            text: 'Item 02'
          }
        ]}
      >
        Social
      </Navbar.NavItem>
      <Navbar.NavItem
        icon="https://image.flaticon.com/icons/svg/2539/2539079.svg"
        alt="Ajuda"
        path="ajuda"
      >
        Ajuda
      </Navbar.NavItem>

      <Navbar.NavItem
        icon="https://image.flaticon.com/icons/svg/2539/2539079.svg"
        alt="Conta"
        path="conta"
      >
        Conta
      </Navbar.NavItem>
    </Navbar>
  )
}
