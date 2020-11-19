import React from 'react'
import Heading from './index'

export default {
  title: 'Components/Heading',
  // parameters: { jest: ['Heading.spec.js'] },
}

const Template = (args) => <Heading {...args}>Floating button</Heading>

export const Default = Template.bind({})

Default.args = {
  h1: true,
  h2: false,
  h3: false,
}
