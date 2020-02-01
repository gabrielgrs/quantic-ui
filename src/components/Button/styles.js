import styled from 'styled-components'
import { rgba } from 'polished'

function getBackground({ theme, color, isOutline }) {
  if (isOutline) return 'transparent'
  if (!color) return theme.colors.primary
  return theme.colors[color]
}

function getOpacity({ theme, isDisabled, isLoading }) {
  if (isDisabled) return theme.opacities.default
  if (isLoading) return theme.opacities.soft
  return 1
}

function getCursor({ isDisabled, isLoading }) {
  if (isDisabled || isLoading) return 'not-allowed'
  // if (isLoading) return 'default'
  return 'pointer'
}

function getWidth({ fullWidth }) {
  if (fullWidth) return '100%'
  return 'initial'
}

function getBorder({ theme, isOutline, color }) {
  if (!isOutline) return 'none'
  return `solid ${theme.colors[color]}`
}

export const StyledButton = styled.button`
  color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.box.soft};
  font-size: ${props => `${props.theme.tipographies.size.sm}px`};
  background: ${getBackground};
  border: ${getBorder};
  opacity: ${getOpacity};
  cursor: ${getCursor};
  padding: 10px 12px;
  min-width: 120px;
  width: ${getWidth};
  border-radius: ${props => `${props.theme.border.radius}px`};

  /* Teste  */
  position: relative;
  overflow: hidden;
  -webkit-appearance: none;

  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  vertical-align: top;
  white-space: nowrap;
  margin: 0;

  :active,
  :focus {
    outline: none;
  }

  :active {
    transform: ${props =>
      !props.isDisabled && !props.isLoading && `translate(1px, -1px)`};
    box-shadow: ${props => rgba(props.theme.colors.primary, 0.2)} 0 1px 3px 2px;
  }
`
