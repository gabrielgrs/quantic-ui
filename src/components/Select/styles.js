import ReactSelect from 'react-select'
import styled from 'styled-components'

export const StyledSelect = styled(ReactSelect)`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'inherit')};
  box-sizing: border-box;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    outline: 0;
  }
`

export const customStyles = (theme) => ({
  option: (provided) => ({
    ...provided,
    borderBottom: 'none',
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: theme.borders.radius,
    height: '44px',
  }),
  clearIndicator: (styles) => ({
    ...styles,
    borderRadius: theme.borders.radius,
  }),
  container: (styles) => ({
    ...styles,
    borderRadius: theme.borders.radius,
  }),
  menu: (styles) => ({ ...styles, borderRadius: theme.borders.radius }),
  menuList: (styles) => ({
    ...styles,
    borderRadius: theme.borders.radius,
  }),
})
