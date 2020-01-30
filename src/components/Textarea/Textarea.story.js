import React, { Fragment } from 'react'
import { Textarea } from '..'

export default {
  title: 'Components/Textarea',
  component: Textarea
}

export const Base = () => (
  <Fragment>
    <Textarea fullWidth rows={5} label="teste" />
    <Textarea />
  </Fragment>
)
