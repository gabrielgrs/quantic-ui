import styled from 'styled-components'

export const StyledImage = styled.img`
  color: transparent;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
  border-radius: 100%;
  text-align: center;
  text-indent: 10000px;
`
