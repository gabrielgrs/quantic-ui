import React, { Fragment } from 'react'
import { TextField } from '..'

export default {
  title: 'Components/TextField',
  component: TextField
}

export const Base = () => (
  <Fragment>
    <TextField value={''} onChange={() => {}} fullWidth label="With Label" />
    <TextField
      value={''}
      onChange={() => {}}
      fullWidth
      placeholder="Placeholder"
    />
  </Fragment>
)
