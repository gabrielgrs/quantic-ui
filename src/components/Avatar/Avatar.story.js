import React from 'react'
import Avatar from './index'

export default {
  title: 'Components/Avatar',
  parameters: { jest: ['Avatar.spec.js'] },
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  src: 'https://www.w3schools.com/howto/img_avatar.png',
  alt: 'alt image',
  width: '100px',
  height: 'auto',
}
