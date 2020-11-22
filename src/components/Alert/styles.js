import styled from 'styled-components'
import { rgba } from 'polished'

const getBackground = ({ theme, type }) => {
  if (type === 'danger') return rgba(theme.colors.dangerLight, 0.6)
  if (type === 'success') return rgba(theme.colors.successLight, 0.6)
  return rgba(theme.colors.primary, 0.6)
}

export const Wrapper = styled.div`
  padding: ${({ theme }) => `${theme.spacings.sm} ${theme.spacings.lg}`};
  background: ${getBackground};
  position: ${({ fixed }) => (fixed ? 'fixed' : null)};
  border-radius: ${({ theme, fixed }) =>
    fixed ? `0px 0px ${theme.borders.radius} ${theme.borders.radius}` : `${theme.borders.radius}`};
  top: 0;
  left: 0;
  width: 100%;

  animation: appear 500ms 300ms both;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
