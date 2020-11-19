import React from 'react'
import Tabs from './index'

export default {
  title: 'Components/Tabs',
  parameters: { jest: ['Tabs.spec.js'] },
}

const Template = (args) => {
  return (
    <Tabs {...args}>
      <Tabs.Item title="First">Teste</Tabs.Item>
      <Tabs.Item title="Second">Teste</Tabs.Item>
    </Tabs>
  )
}

export const Default = Template.bind({})

Default.args = {
  size: 'sm',
}
