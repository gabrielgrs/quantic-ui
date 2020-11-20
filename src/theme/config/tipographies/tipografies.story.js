import React from 'react'
import { tipographies } from '../index'
import { Row, Column } from '../../../components'

export default {
  title: 'theme/tipographies',
}

const Types = () => (
  <>
    <Column size={12}>
      <h3>Types</h3>
    </Column>
    {Object.keys(tipographies.type).map((t) => (
      <Column size={12}>
        <strong>{t}</strong>: {tipographies.type[t]}
      </Column>
    ))}
  </>
)

const Weight = () => (
  <>
    <Column size={12}>
      <h3>Weighties</h3>
    </Column>
    {Object.keys(tipographies.weight).map((t) => (
      <Column size={12}>
        <strong>{t}</strong>: {tipographies.weight[t]}
      </Column>
    ))}
  </>
)

const Size = () => (
  <>
    <Column size={12}>
      <h3>Sizes</h3>
    </Column>
    {Object.keys(tipographies.size).map((t) => (
      <Column size={12}>
        <strong>{t}</strong>: {tipographies.size[t]}
      </Column>
    ))}
  </>
)

const Template = () => {
  return (
    <Row>
      <Column size={12}>
        <h2>Tipografies</h2>
      </Column>
      <Types />
      <Weight />
      <Size />
    </Row>
  )
}

export const Default = Template.bind({})

export const Structure = () => <div>tipographies: theme.tipographies.type.primary</div>

Default.args = {}
