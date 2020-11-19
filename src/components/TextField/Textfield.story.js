import React from 'react'
import Textfield from './index'

export default {
  title: 'Components/Textfield',
  parameters: { jest: ['Textfield.spec.js'] },
}

const Template = (args) => {
  return <Textfield {...args} />
}

export const Default = Template.bind({})

Default.args = {
  value: 'Text',
  fullWidth: true,
}
