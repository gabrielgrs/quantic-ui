import styled from 'styled-components'

export const StyledRow = styled.div`
  display: ${({ inline }) => (inline ? 'flex' : null)};
  align-items: ${({ inline }) => (inline ? 'center' : null)};
  flex-direction: ${({ inline }) => (inline ? 'inline' : null)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
  position: relative;
  width: 100%;

  &::after {
    content: '';
    display: table;
    clear: both;
  }
`
