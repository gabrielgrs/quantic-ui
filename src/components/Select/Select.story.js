import React, { Fragment } from 'react'
import { Select } from '..'

export default {
  title: 'Components/Select',
  component: Select
}

export const Component = () => {
  const options = [
    { id: 1, text: 'teste 1' },
    { id: 2, text: 'teste 2' }
  ]
  return (
    <Fragment>
      <Select options={options} label="With label" />
      <Select options={options} />
    </Fragment>
  )
}

Component.story = {
  name: 'Select'
}
