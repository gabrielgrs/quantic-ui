import React from 'react'
import Drawer from './index'

export default {
  title: 'Components/Drawer',
  parameters: { jest: ['Drawer.spec.js'] },
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
}

const Template = (args) => {
  return <Drawer {...args} />
}

export const Default = Template.bind({})

Default.args = {
  isOpen: true,
  position: 'left',
  children: 'Children',
}
