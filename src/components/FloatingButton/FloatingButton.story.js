import React from 'react'
import FloatingButton from './index'

export default {
  title: 'Components/FloatingButton',
  // parameters: { jest: ['FloatingButton.spec.js'] },
}

const Template = (args) => <FloatingButton {...args} />

export const Default = Template.bind({})

Default.args = {
  ...FloatingButton.defaultProps,
  children: 'Floating Button',
}
