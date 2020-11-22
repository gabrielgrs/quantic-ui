import { useAlert } from 'hooks'
import React from 'react'
import Alert from './index'

export default {
  title: 'Components/Alert',
  parameters: { jest: ['Alert.spec.js'] },
}

const Template = (args) => {
  const alert = useAlert()

  alert.show()

  return <Alert {...args} />
}

export const Default = Template.bind({})

Default.args = {
  type: 'default',
  children: 'Alert Content',
  fixed: false,
}
