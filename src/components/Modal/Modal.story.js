import React, { useState } from 'react'
import Modal from './index'
import Button from '../Button'

export default {
  title: 'Components/Modal',
  parameters: { jest: ['Modal.spec.js'] },
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button info onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onSave={() => setIsOpen(false)} onClose={() => setIsOpen(false)} />
    </>
  )
}

export const Default = Template.bind({})

Default.args = {
  title: 'Modal Title',
  children: 'Children',
}
