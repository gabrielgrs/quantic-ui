import React from 'react'
import Container from './index'

export default {
  title: 'Components/Container',
  parameters: { jest: ['Container.spec.js'] },
}

const Template = (args) => <Container {...args}>Container</Container>

export const Default = Template.bind({})

Default.args = {}
