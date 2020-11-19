import React from 'react'
import Overlay from './index'

export default {
  title: 'Components/Overlay',
  parameters: { jest: ['Overlay.spec.js'] },
}

const Template = (args) => <Overlay {...args} />

export const Default = Template.bind({})

Default.args = {
  isOpen: true,
}
