import React, { Fragment } from 'react'
import { Select } from '..'

export default {
  title: 'Components/Select',
  component: Select
}

export const Base = () => {
  const options = [
    { value: 1, label: 'teste 1' },
    { value: 2, label: 'teste 2' }
  ]
  return (
    <Fragment>
      <Select options={options} label="With label" />
      <Select options={options} />
    </Fragment>
  )
}
