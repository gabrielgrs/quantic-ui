import React from 'react'
import { Row, Column } from '../../../components'

export default {
  title: 'theme/breakpoints',
}

const Template = () => {
  return (
    <Row>
      <Column size={12}>
        <h2>Breakpoints</h2>
      </Column>
    </Row>
  )
}

export const Default = Template.bind({})

export const Structure = () => <div>color: theme.colors.primary</div>

Default.args = {}
