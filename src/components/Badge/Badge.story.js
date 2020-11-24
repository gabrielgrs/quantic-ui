import React from 'react'
import Badge from './index'

export default {
  title: 'Components/Badge',
  parameters: { jest: ['Badge.spec.js'] },
}

const Template = (args) => <Badge {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Bedge Content',
  background: 'primary',
  color: 'white',
}
