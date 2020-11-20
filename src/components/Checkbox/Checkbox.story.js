import React from 'react'
import Checkbox from './index'

export default {
  title: 'Components/Checkbox',
  parameters: { jest: ['Checkbox.spec.js'] },
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {
  ...Checkbox.defaultProps,
  checked: true,
}
