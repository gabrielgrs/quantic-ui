import React from 'react'
import RadioGroup from './index'

export default {
  title: 'Components/RadioGroup',
  parameters: { jest: ['RadioGroup.spec.js'] },
}

const Template = (args) => <RadioGroup {...args} />

export const Default = Template.bind({})

Default.args = {
  value: 'second',
  options: [
    { label: 'first', key: 'first' },
    { label: 'second', key: 'second' },
  ],
}
