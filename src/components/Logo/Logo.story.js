import React from 'react'
import Logo from './index'

export default {
  title: 'Components/Logo',
  parameters: { jest: ['Logo.spec.js'] },
}

const Template = (args) => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {}
