import styled from 'styled-components'
import { rgba } from 'polished'

function getBackground({ theme, primary, secondary, gradient, info, link, danger }) {
  if (gradient)
    return `linear-gradient(to right, ${theme.colors.primary} 0%, ${rgba(
      theme.colors.primary,
      theme.opacities.default
    )} 100%);`
  if (danger) return theme.colors.danger
  if (primary) return theme.colors.primary
  if (secondary) return theme.colors.secondary
  if (info) return theme.colors.whiteDark
  if (link) return 'transparent'
}

function getFontColor({ theme, info, link }) {
  if (info) return theme.colors.black
  if (link) return theme.colors.black
  return theme.colors.white
}

function getOpacity({ theme, disabled, loading }) {
  if (disabled) return theme.opacities.default
  if (loading) return theme.opacities.soft
  return 1
}

function getBorder({ theme, isOutline, color, link }) {
  if (!isOutline || link) return 'none'
  return `solid ${theme.colors[color]}`
}

function getBoxShadowOnHover({ theme, info, link }) {
  if (link) return 'none'
  if (info) return theme.shadows.box.medium
  return theme.shadows.box.field
}

export const StyledButton = styled.button`
  cursor: ${({ disabled, loading }) => (disabled || loading ? 'not-allowed' : 'pointer')};
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

  #leftIcon {
    padding-right: 5px;
  }

  #rightIcon {
    padding-left: 5px;
  }

  :active,
  :focus {
    outline: none;
  }

  &:hover {
    box-shadow: ${getBoxShadowOnHover};
  }

  :active {
    transform: ${({ disabled, loading }) => (!disabled && !loading ? `translate(1px, -1px)` : null)};
  }
`
