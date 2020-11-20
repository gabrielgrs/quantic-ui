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

export const Button = styled(ButtonUI)`
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

  ${({ theme }) => theme.breakPoints.sm} {
    width: 100%;
    border-radius: ${getBorderWhenColumn};
  }
`
