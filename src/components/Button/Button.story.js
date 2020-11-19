import React from 'react'
import Button from './index'

export default {
  title: 'Components/Button',
  parameters: { jest: ['Button.spec.js'] },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  primary: true,
}
