import React, { Fragment } from 'react'
import { Textfield } from '..'

export default {
  title: 'Components/Textfield',
  component: Textfield
}

export const Component = () => (
  <Fragment>
    <Textfield label="teste" />
    <Textfield />
  </Fragment>
)

Component.story = {
  name: 'Textfield'
}
