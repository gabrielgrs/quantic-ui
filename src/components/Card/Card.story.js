import React from 'react'
import { Card } from '..'

export default {
  title: 'Components/Card',
  parameters: { jest: ['Card.spec.js'] },
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Card Content',
}
