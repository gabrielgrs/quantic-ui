import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, ModalContent, ChildrenWrapper, CloseIcon } from './styles'
import Row from '../Row'
import Column from '../Column'
import Button from '../Button'
import Overlay from '../Overlay'

function Modal(props) {
  const { children, title, isOpen, onClose, onSubmit, closeText, submitText, submitType, ...rest } = props

  if (!isOpen) return null

  return (
    <>
      <Overlay zIndex={9} isOpen={isOpen} {...rest} />
      <Wrapper>
        <ModalContent>
          <Row>
            <Column justifyContent="space-between" size={12}>
              <h3>{title}</h3>
              <div>
                <CloseIcon name="FiX" onClick={() => onClose()} category="feather" />
              </div>
            </Column>
            <Column size={12}>
              <ChildrenWrapper>{children}</ChildrenWrapper>
            </Column>
            <Column justifyContent="flex-end" size={12}>
              {onClose && (
                <Button info onClick={onClose}>
                  {closeText}
                </Button>
              )}
              {onSubmit && (
                <Button
                  margin="0 0 0 10px"
                  primary={submitType !== 'danger'}
                  danger={submitType === 'danger'}
                  onClick={onSubmit}
                >
                  {submitText}
                </Button>
              )}
            </Column>
          </Row>
        </ModalContent>
      </Wrapper>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  closeText: PropTypes.string,
  submitText: PropTypes.string,
  submitType: PropTypes.string,
}

Modal.defaultProps = {
  title: '',
  onClose: undefined,
  onSubmit: undefined,
  closeText: 'Cancelar',
  submitText: 'Salvar',
  submitType: undefined,
}

export default Modal
