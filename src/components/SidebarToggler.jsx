import React from 'react'
import { ChevronLeft, ChevronRight } from './icons'
import './SidebarToggler.css'

const SidebarToggler = ({ position = 'right', isOpen = true, onClick }) => {
  const isLeft = position === 'left'
  const Icon = isLeft ? ChevronRight : ChevronLeft
  
  return (
    <button
      className={`sidebar-toggler ${isLeft ? 'left' : 'right'}`}
      onClick={onClick}
      aria-label={`Toggle ${position} sidebar`}
    >
      <Icon />
    </button>
  )
}

export default SidebarToggler
