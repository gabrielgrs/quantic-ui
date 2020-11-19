import React from 'react'
import theme from '../index'
import { Row, Column } from '../../components'

export default {
  title: 'theme/shadows',
}

export const Base = () => {
  return (
    <Row>
      <Column size={12}>
        <h2>Border Radius</h2>
      </Column>
      {Object.keys(theme.border).map((c) => (
        <Column size={12}>
          <strong>{c}:</strong> {theme.border[c]}
        </Column>
      ))}
    </Row>
  )
}
