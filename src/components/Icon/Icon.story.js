import React from 'react'
import Icon from './index'

export default {
  title: 'Components/Icon',
  // parameters: { jest: ['Icon.spec.js'] },
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'FiSidebar',
  category: 'feather',
  fontSize: 50,
}
