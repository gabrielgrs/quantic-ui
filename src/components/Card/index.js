import React from 'react'
import styled from 'styled-components'
import './index.css'

export const StyledCard = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export const StyledCardInfo = styled.div`
  transform: translateY(0);
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  padding: 10px;
  color: #fff;
  transition: all 0.25s ease-in;
  transform: translateY(100%);
`

export const StyledCardTitle = styled.h4`
  font-size: 16px;
  margin: 0;
`

export const StyledCardDescription = styled.p`
  font-size: 16px;
  position: absolute;
  bottom: 10px;
`

export default function Card(props) {
  return (
    <StyledCard
      style={{
        'background-image': `url(${props.banner})`
      }}
      className="card"
    >
      <StyledCardInfo className="card-info">
        <StyledCardTitle>{props.title}</StyledCardTitle>
        <StyledCardDescription>{props.description}</StyledCardDescription>
      </StyledCardInfo>
    </StyledCard>
  )
}
