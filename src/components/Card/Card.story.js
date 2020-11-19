import React from 'react'
import { Card } from '..'

export default {
  title: 'Components/Card',
  parameters: { jest: ['Card.spec.js'] },
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  alt: 'Sociologia da Administração, 2ª edição',
  banner: 'https://app.lit.com.br/api/images/courses/1$_$660.jpg',
}
