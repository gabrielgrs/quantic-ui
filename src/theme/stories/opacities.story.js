import React from 'react'
import theme from '../index'
import { Row, Column } from '../../components'

export default {
  title: 'theme/opacities',
}

export const Base = () => {
  return (
    <Row>
      <Column size={12}>
        <h2>Opacities</h2>
      </Column>
      {Object.keys(theme.opacities).map((c) => (
        <Column size={12}>
          <strong>{c}:</strong> {theme.opacities[c]}
        </Column>
      ))}
    </Row>
  )
}
