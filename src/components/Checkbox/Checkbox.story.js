import React, { Fragment } from 'react'
import { Checkbox } from '..'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
}

export const Component = () => (
  <Fragment>
    <Checkbox label="Checkbox" />
  </Fragment>
)

Component.story = {
  name: 'Checkbox'
}
