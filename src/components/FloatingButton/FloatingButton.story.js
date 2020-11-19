import React from 'react'
import FloatingButton from './index'

export default {
  title: 'Components/FloatingButton',
  // parameters: { jest: ['FloatingButton.spec.js'] },
}

const Template = (args) => <FloatingButton {...args}>Floating button</FloatingButton>

export const Default = Template.bind({})

Default.args = {}
