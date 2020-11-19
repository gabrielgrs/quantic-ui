import React from 'react'
import ButtonGroup from './index'

export default {
  title: 'Components/ButtonGroup',
  parameters: { jest: ['ButtonGroup.spec.js'] },
}

const Template = (args) => (
  <ButtonGroup {...args}>
    <ButtonGroup.Button>Inactive</ButtonGroup.Button>
    <ButtonGroup.Button>Active</ButtonGroup.Button>
  </ButtonGroup>
)

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  primary: true,
  selectedIndex: 1,
}
