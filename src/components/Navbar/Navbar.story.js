import React from 'react'
import { Navbar } from '..'

export default {
  title: 'Components/Navbar'
}

export const Base = () => {
  return (
    <Navbar Brand={() => <>Quantic UI</>}>
      <Navbar.Item path="/about" isActive={true}>
        About
      </Navbar.Item>
      <Navbar.Item path="/contact">Contact</Navbar.Item>
    </Navbar>
  )
}
