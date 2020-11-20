import React from 'react'
import { opacities } from '../index'
import { Row, Column } from '../../../components'

export default {
  title: 'theme/opacities',
}

const Template = () => {
  return (
    <Row>
      <Column size={12}>
        <h2>Opacities</h2>
      </Column>
      {Object.keys(opacities).map((c) => (
        <Column size={12}>
          <strong>{c}:</strong> {opacities[c]}
        </Column>
      ))}
    </Row>
  )
}

export const Default = Template.bind({})

export const Structure = () => <div>opacities: theme.opacities.default</div>

Default.args = {}
