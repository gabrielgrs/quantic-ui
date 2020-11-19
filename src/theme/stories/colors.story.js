import React from 'react'
import theme from '../index'
import { Row, Column } from '../../components'

export default {
  title: 'theme/colors',
}

export const Base = () => {
  return (
    <Row>
      <Column size={12}>
        <h2>Colors</h2>
      </Column>
      {Object.keys(theme.colors).map((c) => (
        <Column size={12} style={{ background: theme.colors[c], padding: 5 }}>
          <strong>{c}:</strong> {theme.colors[c]}
        </Column>
      ))}
    </Row>
  )
}
