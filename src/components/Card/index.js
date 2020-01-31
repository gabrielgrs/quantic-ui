import React from 'react'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  opacity: ${props => props.theme.opacities.soft};
  box-shadow: ${props => props.theme.shadows.box.soft};
  border: solid silver 1px;
  height: 300px;
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

export const StyledTitle = styled.div`
  font-weight: ${props => props.theme.tipographies.weight.bold};
  font-size: ${props => `${props.theme.tipographies.size.md}px`};
`

export const StyledDescription = styled.div``

export const StyledAuthor = styled.div`
  font-size: ${props => `${props.theme.tipographies.size.xs}px`};
`

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
`

function Card({ title, description, author, banner }) {
  return (
    <StyledWrapper>
      <StyledBanner src={banner} />
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
      </StyledContent>
      <StyledFooter>
        <StyledDescription>{description}</StyledDescription>
        <StyledAuthor>{author}</StyledAuthor>
      </StyledFooter>
    </StyledWrapper>
  )
}

export default Card
