import styled from 'styled-components'

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};

  & > div {
    padding: ${({ isVertical }) => (isVertical ? '10px 0px' : '0 10px')};
  }
`
