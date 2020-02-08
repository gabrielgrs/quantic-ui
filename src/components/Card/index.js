import React from 'react'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  opacity: ${props => props.theme.opacities.soft};
  box-shadow: ${props => props.theme.shadows.box.soft};
  border: solid silver 1px;
  height: 280px;
  position: relative;

  &:hover {
    opacity: 1;
    box-shadow: ${props => props.theme.shadows.box.medium};
  }
`

export const StyledBanner = styled.img`
  width: 100%;
`

export const StyledContent = styled.div`
  padding: 10px;
`

function Card({ banner, children }) {
  return (
    <StyledWrapper>
      <StyledBanner src={banner} />
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  )
}

export default Card
