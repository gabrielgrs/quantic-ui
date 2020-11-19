import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLayout } from '../../hooks'
import { Wrapper } from './styles'

function Logo(props) {
  const { responsive, white } = props

  const { isMobile } = useLayout()

  const src = useMemo(() => {
    if (white) return '/assets/images/lit-onlearning-branco.png'
    if (isMobile && responsive) return '/assets/images/logoPersonalAzul.png'
    return '/assets/images/logo-blue.png'
  }, [white, isMobile, responsive])

  return (
    <Wrapper {...props}>
      <img src={src} alt="logo da LIT" />
    </Wrapper>
  )
}

Logo.propTypes = {
  responsive: PropTypes.bool,
  white: PropTypes.bool,
}

Logo.defaultProps = {
  responsive: false,
  white: false,
}

export default Logo
