import React from 'react'
import styled from 'styled-components'
import theme from '../../config/theme'

const StyledTagColor = styled.div`
  cursor: default;
  background: ${props => props.theme.colors[props.type]};
  border-radius: ${props => `${props.theme.border.radius}px`};
  text-align: center;
  width: 200px;
  padding: 7px 0px;
  color: white;
  margin-bottom: 3px;
  color: ${props => (props.type === 'white' ? 'black' : 'white')};
  border: solid silver 1px;
`

function TagColor({ type }) {
  return (
    <StyledTagColor type={type}>
      <strong>{type}:</strong> {theme.colors[type]}
    </StyledTagColor>
  )
}

export default () => Object.keys(theme.colors).map(c => <TagColor type={c} />)
