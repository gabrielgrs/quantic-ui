import React from 'react'
import Radio from './index'

export default {
  title: 'Components/Radio',
  parameters: { jest: ['Radio.spec.js'] },
}

const Template = (args) => <Radio {...args} />

export const Default = Template.bind({})

Default.args = {
  checked: true,
  label: '',
}
