import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${({ theme }) => theme.breakPoints.sm} {
    font-size: 0.5em;
  }
`

const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.blackLight};
  margin: 40px 0 25px;
`

const H2 = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blackLight};
  margin: 30px 0 15px;
`

const H3 = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blackLight};
  margin: 20px 0 10px;
`

const Subtitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`

function Heading({ children, type }) {
  const renderContent = () => {
    if (type === 'h1') return <H1>{children}</H1>
    if (type === 'h2') return <H2>{children}</H2>
    if (type === 'h3') return <H3>{children}</H3>
    if (type === 'subtitle') return <Subtitle>{children}</Subtitle>
  }

  return <Wrapper>{renderContent()}</Wrapper>
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

Heading.defaultProps = {
  type: 'subtitle',
}

export default Heading
