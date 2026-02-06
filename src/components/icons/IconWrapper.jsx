import React from 'react'

const IconWrapper = ({ children, className = '' }) => {
  return (
    <div className={`icon-wrapper ${className}`} style={{ width: '24px', height: '24px', position: 'relative' }}>
      {children}
    </div>
  )
}

export default IconWrapper
