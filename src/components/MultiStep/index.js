import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import { Wrapper, Content, Line, StepHeader } from './styles'

function MultiStep({ children, currentIndex, onChangeStep, uncontrolled, hiddenHeader, ...rest }) {
  const [activeTab, setActiveTab] = useState(currentIndex)

  return (
    <>
      <Wrapper {...rest}>
        {children.map((t, index) => {
          return (
            <Fragment key={index}>
              {!hiddenHeader && (
                <StepHeader
                  key={index}
                  onClick={() => {
                    if (!uncontrolled) {
                      setActiveTab(index)
                      onChangeStep(index)
                    }
                  }}
                  uncontrolled={uncontrolled}
                  active={index === activeTab || currentIndex === index}
                >
                  <>
                    <div>{t.props.title || index + 1}</div>
                  </>
                </StepHeader>
              )}
              {index < children.length - 1 && !hiddenHeader && (
                <Line active={index < currentIndex || index < activeTab} />
              )}
            </Fragment>
          )
        })}
      </Wrapper>
      <Content key={activeTab}>{children[currentIndex || activeTab]}</Content>
    </>
  )
}

function Step({ children }) {
  return <div>{children}</div>
}

MultiStep.propTypes = {
  children: PropTypes.node.isRequired,
  currentIndex: PropTypes.number,
  onChangeStep: PropTypes.func,
  uncontrolled: PropTypes.bool,
  hiddenHeader: PropTypes.bool,
}

MultiStep.defaultProps = {
  currentIndex: 0,
  onChangeStep: () => null,
  uncontrolled: false,
  hiddenHeader: false,
}

Step.propTypes = {
  children: PropTypes.node.isRequired,
}

MultiStep.Step = Step

export default MultiStep
