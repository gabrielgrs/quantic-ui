import React, { Fragment } from 'react'
import { Checkbox } from '..'

export default {
  title: 'Components/Checkbox',
  component: Checkbox
}

export const Base = () => (
  <Fragment>
    <Checkbox label="Checkbox" />
    <Checkbox label="Checkbox" checked />
  </Fragment>
)
