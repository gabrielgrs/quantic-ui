import React from 'react'
import Row from './index'

export default {
  title: 'Components/Row',
  parameters: { jest: ['Row.spec.js'] },
}

const Template = (args) => <Row {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Row content',
}
