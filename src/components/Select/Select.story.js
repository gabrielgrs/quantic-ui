import React from 'react'
import Select from './index'

export default {
  title: 'Components/Select',
  parameters: { jest: ['Select.spec.js'] },
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  options: [{ id: 'first', label: 'First' }],
  label: 'Label',
}
