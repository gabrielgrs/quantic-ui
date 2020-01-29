import { createGlobalStyle, css } from 'styled-components'

export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'

export const bodyStyles = css`
  font-family: ${props => props.theme.tipographies.type.primary};
`

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`
