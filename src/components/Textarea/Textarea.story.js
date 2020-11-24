import React from 'react'
import Textarea from './index'

export default {
  title: 'Components/Textarea',
  parameters: { jest: ['Textarea.spec.js'] },
}

const Template = (args) => {
  return <Textarea {...args} />
}

export const Default = Template.bind({})

Default.args = {
  value: 'Text',
  rows: 4,
  fullWidth: true,
}
