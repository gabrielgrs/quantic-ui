import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: ${({ theme }) => `solid 1px ${theme.colors.silver}`};
  border-radius: ${({ theme }) => theme.borders.radius};
  padding: ${({ theme }) => theme.spacings.xs};
  background: ${({ theme }) => theme.colors.silverSky};
`

function Card({ children, onClick, ...rest }) {
  return (
    <Wrapper {...rest} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Card.defaultProps = {
  children: null,
  onClick: () => null,
}

export default Card
