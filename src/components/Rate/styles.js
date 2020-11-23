import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Star = styled.div`
  cursor: pointer;
  color: ${({ theme, active }) => (active ? theme.colors.warning : theme.colors.silver)};
  padding: 0 3px;
  transition: ${({ theme }) => theme.transitions('opacity')};

  &:hover {
    opacity: 0.9;
  }
`
