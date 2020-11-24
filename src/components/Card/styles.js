import styled from 'styled-components'

export const Wrapper = styled.div`
  border: ${({ theme }) => `solid 1px ${theme.colors.silver}`};
  border-radius: ${({ theme }) => theme.borders.radius};
  padding: ${({ theme }) => theme.spacings.xs};
  background: ${({ theme }) => theme.colors.silverSky};
  box-shadow: ${({ theme }) => theme.shadows.box.soft};
`
