import React, { Fragment } from 'react'
import { Textfield } from '..'

export default {
  title: 'Components/Textfield',
  component: Textfield
}

export const Base = () => (
  <Fragment>
    <Textfield fullWidth label="teste" />
    <Textfield fullWidth />
  </Fragment>
)
