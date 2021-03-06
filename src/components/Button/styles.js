import styled from 'styled-components'
import { rgba } from 'polished'

function getBackground({ theme, background, outline }, isHovered) {
  if (background === 'gradient')
    return `linear-gradient(to right, ${theme.colors.primary} 0%, ${rgba(
      theme.colors.primary,
      theme.opacities.default
    )} 100%);`
  if (background === 'link' || outline) {
    if (isHovered) return theme.colors[background]
    return 'transparent'
  }
  if (background === 'danger') return theme.colors.danger
  if (background === 'secondary') return theme.colors.secondary
  if (background === 'info') return theme.colors.whiteDark
  if (background === 'primary') return theme.colors.primary
}

function getFontColor({ theme, color, background, outline }, isHovered) {
  if (outline) {
    if (isHovered) {
      if (['secondary'].includes(background)) return theme.colors.whiteLight
      return theme.colors.white
    }
    return theme.colors[background]
  }
  if (['info', 'link'].includes(background)) return theme.colors.black
  return theme.colors[color]
}

function getOpacity({ theme, disabled }) {
  if (disabled) return theme.opacities.default
  return 1
}

function getBorder({ theme, outline, color }) {
  if (!outline || color === 'link') return 'none'
  return `solid ${theme.colors[color]}`
}

function getBoxShadowOnHover({ theme, color }) {
  if (color === 'link') return 'none'
  if (color === 'info') return theme.shadows.box.medium
  return theme.shadows.box.field
}

export const StyledButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${getFontColor};
  background: ${getBackground};
  border: ${getBorder};
  opacity: ${getOpacity};
  box-shadow: ${({ theme, link }) => (link ? null : theme.shadows.box.soft)};
  font-size: ${({ theme }) => theme.tipographies.size.xs};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  padding: ${({ hasIcon }) => (hasIcon ? '0px 12px' : '10px 12px')};
  min-width: 160px;
  border-radius: ${({ theme }) => theme.borders.radius};
  font-weight: ${({ theme }) => theme.tipographies.weight.bold};
  letter-spacing: 1px;
  transition: ${({ theme }) => theme.transitions('background-color')};

  position: relative;
  overflow: hidden;
  -webkit-appearance: none;

  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  margin: ${({ margin }) => margin || '0'};
  padding: 0.3em 1.3em;
  height: 44px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :active,
  :focus {
    outline: none;
  }

  &:hover {
    box-shadow: ${getBoxShadowOnHover};
    background: ${(props) => getBackground(props, true)};
    color: ${(props) => getFontColor(props, true)};
  }

  :active {
    transform: ${({ disabled }) => (!disabled ? `translate(1px, -1px)` : null)};
  }
`
