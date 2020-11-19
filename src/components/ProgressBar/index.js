import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const StyledProgressBar = styled.div`
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  width: 100%;
  height: 4px;
`

export const StyledMarkPoint = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  width: ${({ currentProgress }) => `${currentProgress}%`};
  height: 100%;
`

function ProgressBar({ max, current, ...rest }) {
  const currentProgress = useMemo(() => {
    if (current > max) return max
    return (100 / max) * current
  }, [max, current])

  return (
    <StyledProgressBar {...rest}>
      <StyledMarkPoint data-testid={rest['fill-data-test-id']} currentProgress={currentProgress} />
    </StyledProgressBar>
  )
}

ProgressBar.propTypes = {
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
}

export default ProgressBar
