import React, { Fragment } from 'react'
import { TextArea } from '..'

export default {
  title: 'Components/TextArea',
  component: TextArea
}

export const Base = () => (
  <Fragment>
    <TextArea fullWidth rows={5} label="teste" />
    <TextArea />
  </Fragment>
)
