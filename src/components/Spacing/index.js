import styled from 'styled-components'

export default styled.div`
  padding-bottom: ${({ theme, size }) => {
    return theme.spacings[size]
  }};

  &:after {
    content: '.';
    color: transparent;
  }
`
