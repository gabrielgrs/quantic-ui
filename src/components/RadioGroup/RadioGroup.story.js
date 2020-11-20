import React from 'react'
import RadioGroup from './index'
import Radio from '../Radio'

export default {
  title: 'Components/RadioGroup',
  parameters: { jest: ['RadioGroup.spec.js'] },
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: ['firstItemId', 'secondItemId'],
      },
    },
  },
}

const Template = (args) => (
  <RadioGroup {...args}>
    <Radio id="firstItemId" />
    <Radio id="secondItemId" />
  </RadioGroup>
)

export const Default = Template.bind({})

Default.args = {
  name: 'radioGroup',
  value: 'firstItemId',
}
