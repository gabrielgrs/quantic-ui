import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media screen and (max-width: 700px) {
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

function Heading({ children, h1, h2, h3, subtitle }) {
  if (!h1 && !h2 && !h3 && !subtitle) throw Error('Should be one of type')

  const renderContent = () => {
    if (h1) return <H1>{children}</H1>
    if (h2) return <H2>{children}</H2>
    if (h3) return <H3>{children}</H3>
    if (subtitle) return <Subtitle>{children}</Subtitle>
  }

  return <Wrapper>{renderContent()}</Wrapper>
}

Heading.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  subtitle: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  subtitle: false,
}

export default Heading
