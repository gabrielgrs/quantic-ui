import React from 'react'
import PropTypes from 'prop-types'
import { StarFill } from '@styled-icons/bootstrap/StarFill'
import { Wrapper, Star } from './styles'

function Rate({ name, value, max, onChange }) {
  return (
    <Wrapper>
      {Array.from({ length: max }).map((_, index) => (
        <Star active={index < value} onClick={() => onChange({ target: { name, value: index + 1 } })}>
          <StarFill height={20} />
        </Star>
      ))}
    </Wrapper>
  )
}

Rate.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number,
  max: PropTypes.number,
}

Rate.defaultProps = {
  name: undefined,
  onChange: () => null,
  value: 0,
  max: 5,
}

export default Rate
