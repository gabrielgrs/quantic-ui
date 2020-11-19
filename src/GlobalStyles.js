import './styles.css'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    outline: 0;
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  

  html {
    color: ${({ theme }) => theme.colors.black};
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.tipographies.type.primary};
    background: ${({ theme }) => theme.colors.silverSky};
    overflow-x: hidden;
  }
  

  button {
    text-transform: uppercase;
  }

  button, input, textarea, select {
    font-family: ${({ theme }) => theme.tipographies.type.secondary};
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar {
    cursor: pointer;
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.whiteDark};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: silver;
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  
`
