import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: ${props => props.theme.tipographies.type.primary};
  }
  
  button, input {
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
  }
`
