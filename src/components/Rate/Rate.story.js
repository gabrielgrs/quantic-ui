import React from 'react'
import Rate from './index'

export default {
  title: 'Components/Rate',
  parameters: { jest: ['Rate.spec.js'] },
}

const Template = (args) => <Rate {...args} />

export const Default = Template.bind({})

Default.args = {
  value: 1,
  max: 5,
}
