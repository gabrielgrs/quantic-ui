import React, { useState } from 'react'
import Sidebar from './index'
import Button from '../Button'

export default {
  title: 'Components/Sidebar',
  parameters: { jest: ['Sidebar.spec.js'] },
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ display: 'relative' }}>
      <Button info onClick={() => setIsOpen(true)}>
        Open Sidebar
      </Button>
      <Sidebar {...args} isOpen={isOpen} onSave={() => setIsOpen(false)} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  title: 'Sidebar Title',
  children: 'Children',
}
