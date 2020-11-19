import styled from 'styled-components'

// eslint-disable-next-line
export const Wrapper = styled.div`
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'initial')};

  display: flex;
  justify-content: center;

  & img {
    height: ${({ height }) => height || 'auto'};
    max-width: ${({ width }) => width || '100%'};
  }
`
