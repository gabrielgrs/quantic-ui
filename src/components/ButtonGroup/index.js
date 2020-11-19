import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonUI from '../Button'

const getBorder = ({ theme, isFirst, isLast }) => {
  if (isFirst) return `${theme.borders.radius} 0px 0px ${theme.borders.radius}`
  if (isLast) return `0px ${theme.borders.radius} ${theme.borders.radius} 0px`
  return 0
}

const getBorderWhenColumn = ({ theme, isFirst, isLast }) => {
  if (isFirst) return `${theme.borders.radius} ${theme.borders.radius} 0px 0px`
  if (isLast) return `0px 0px ${theme.borders.radius} ${theme.borders.radius}`
  return 0
}

const Button = styled(ButtonUI)`
  background: ${({ theme, isActive, color }) => {
    if (color) return theme.colors[color]
    if (isActive) return theme.colors.primary
    return 'transparent'
  }};
  color: ${({ theme, isActive, color }) => {
    if (color) return theme.colors.white
    if (isActive) return theme.colors.white
    return theme.colors.primary
  }};

  border-radius: ${getBorder};
  width: ${({ buttonSize }) => `${buttonSize}%`};
  min-width: 10px;
  padding: ${({ small }) => (small ? '4px 2px' : undefined)};

  /* Ignore grid rules */
  margin: 0 !important;

  @media screen and (max-width: 700px) {
    width: 100%;
    border-radius: ${getBorderWhenColumn};
  }
`

function ButtonGroup({ children, selectedIndex, ...rest }) {
  const [activeItem, setActiveItem] = useState(selectedIndex)

  return children.map((c, index) =>
    React.cloneElement(c, {
      ...c,
      key: index,
      onClick: () => {
        if (c.onClick) c.onClick()
        setActiveItem(index)
      },
      isActive: index === activeItem,
      isFirst: index === 0,
      isLast: index === children.length - 1,
      buttonSize: 100 / children.length,
      ...rest,
    })
  )
}

ButtonGroup.Button = Button
export default ButtonGroup
