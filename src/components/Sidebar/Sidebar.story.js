import React from 'react'
import Sidebar from './index'

export default {
  title: 'Components/Sidebar',
  parameters: { jest: ['Sidebar.spec.js'] },
}

const Template = (args) => {
  return <Sidebar {...args} />
}

export const Default = Template.bind({})

Default.args = {
  ...Sidebar.defaultProps,
  children: 'Children',
}
