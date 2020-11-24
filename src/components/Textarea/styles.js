import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
  display: block;
  padding: 0.3em 1.3em;
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.silverSkyLight};
  border: ${({ theme, error }) => `2px ${error ? theme.colors.danger : theme.colors.silver} solid`};
  background-image: none;
  background-clip: padding-box;
  border-radius: ${({ theme }) => theme.borders.radius};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
  box-sizing: border-box;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  transition: ${({ theme }) => theme.transitions('all')};

  &:focus {
    border: 2px solid ${({ theme, error }) => (error ? theme.colors.danger : theme.colors.primary)};
    box-shadow: ${({ theme }) => theme.shadows.box.field};
    outline: 0;
    background: ${({ theme }) => theme.colors.white};
  }
`
