import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.spacings.xs}`};
  background: ${({ theme, background }) => theme.colors[background] || background};
  color: ${({ theme, color }) => theme.colors[color] || color};
  border-radius: ${({ theme }) => theme.borders.radius};

  width: fit-content;
`
