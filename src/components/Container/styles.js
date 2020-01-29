import styled from 'styled-components'

export const StyledContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 33.75em) {
    width: 90%;
  }

  @media only screen and (min-width: 60em) {
    width: 90%;
    max-width: 60rem;
  }
`
