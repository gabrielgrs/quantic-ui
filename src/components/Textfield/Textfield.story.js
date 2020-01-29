import React, { Fragment } from 'react'
import { Textfield } from '..'

export default {
  title: 'Components/Textfield',
  component: Textfield
}

export const Component = () => (
  <Fragment>
    <Textfield fullWidth label="teste" />
    <Textfield fullWidth />
  </Fragment>
)

Component.story = {
  name: 'Textfield'
}
