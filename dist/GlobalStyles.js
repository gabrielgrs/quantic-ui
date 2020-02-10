import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.tipographies.type.primary};
  }


  
  button, input {
    display: inline-block;
    border-radius: 0;
    -webkit-appearance: none;
  }
`;