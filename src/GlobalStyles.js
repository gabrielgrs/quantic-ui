import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: ${props => props.theme.tipographies.type.primary};
  }
`
