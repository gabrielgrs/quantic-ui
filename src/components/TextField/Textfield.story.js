import React, { Fragment } from 'react'
import { TextField } from '..'

export default {
  title: 'Components/TextField',
  component: TextField
}

export const Base = () => (
  <Fragment>
    <TextField fullWidth label="With Label" />
    <TextField fullWidth placeholder="Placeholder" />
  </Fragment>
)
