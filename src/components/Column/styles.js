import styled from 'styled-components'

const getWidthByQuantity = quantity => {
  switch (quantity) {
    case 1:
      return '4.33%'
    case 2:
      return '12.66%'
    case 3:
      return '21%;'
    case 4:
      return '29.33%;'
    case 5:
      return '37.66%;'
    case 6:
      return '46%'
    case 7:
      return '54.33%'
    case 8:
      return '62.66%'
    case 9:
      return '71%'
    case 10:
      return '79.33%'
    case 11:
      return '87.66%'
    case 12:
      return '96%'
    default:
      return '4.33%'
  }
}

export const StyledColumn = styled.div`
  display: ${({ inline }) => (inline ? 'flex' : null)};
  width: 96%;

  /* This when column is inside row  */
  float: left;
  margin: 0.5rem 2%;
  min-height: 0.125rem;

  @media only screen and (min-width: 45em) {
    width: ${props => getWidthByQuantity(props.quantity)};
  }
`
