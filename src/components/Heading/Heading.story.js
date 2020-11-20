import React from 'react'
import Heading from './index'

export default {
  title: 'Components/Heading',
  // parameters: { jest: ['Heading.spec.js'] },
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})

Default.args = {
  ...Heading.defaultProps,
  children: '',
}
