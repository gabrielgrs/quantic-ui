import React, { Fragment } from 'react'
import { Textarea } from '..'

export default {
  title: 'Components/Textarea',
  component: Textarea
}

export const Component = () => (
  <Fragment>
    <Textarea label="teste" />
    <Textarea />
  </Fragment>
)

Component.story = {
  name: 'Textarea'
}
