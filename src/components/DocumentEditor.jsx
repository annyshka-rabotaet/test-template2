import React, { useState, useCallback } from 'react'
import DocumentHeader from './DocumentHeader'
import DocumentEditingTools from './DocumentEditingTools'
import DocumentCanvas from './DocumentCanvas'
import AddFieldsSidebar from './AddFieldsSidebar'
import SidebarToggler from './SidebarToggler'
import './DocumentEditor.css'

const DocumentEditor = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true)
  const [hasDownloaded, setHasDownloaded] = useState(false)
  const [showRecoveryBar, setShowRecoveryBar] = useState(false)
  const [triggerSend, setTriggerSend] = useState(0)

  const handleDownloaded = useCallback(() => {
    setHasDownloaded(true)
    setTimeout(() => setShowRecoveryBar(true), 1500)
  }, [])

  const handleSendFromRecovery = useCallback(() => {
    setShowRecoveryBar(false)
    setTriggerSend(prev => prev + 1)
  }, [])

  return (
    <div className="document-editor">
      <DocumentHeader
        onDownloaded={handleDownloaded}
        triggerSend={triggerSend}
        hasDownloaded={hasDownloaded}
      />
      <DocumentEditingTools />
      
      <div className="editor-content">
        <DocumentCanvas />
        
        {rightSidebarOpen && (
          <AddFieldsSidebar
            hasDownloaded={hasDownloaded}
            onSendClick={handleSendFromRecovery}
          />
        )}
        
        <SidebarToggler 
          position="right" 
          isOpen={rightSidebarOpen}
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
        />
        
        <SidebarToggler 
          position="left" 
          isOpen={leftSidebarOpen}
          onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
        />
      </div>

      {/* Post-Download Recovery Bar — persistent bottom CTA */}
      {showRecoveryBar && (
        <div className="recovery-bar">
          <div className="recovery-bar-inner">
            <div className="recovery-bar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="#248567" opacity="0.15"/>
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="#248567" strokeWidth="1.5" fill="none"/>
                <path d="M9 12l2 2 4-4" stroke="#248567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="recovery-bar-text">
              You can still send this for signature securely.
            </span>
            <div className="recovery-bar-badges">
              <span className="recovery-badge">Signing certificate</span>
              <span className="recovery-badge">Audit trail</span>
              <span className="recovery-badge">Legally valid</span>
            </div>
            <button className="recovery-bar-cta" onClick={handleSendFromRecovery}>
              Send now — free
            </button>
            <button className="recovery-bar-close" onClick={() => setShowRecoveryBar(false)} aria-label="Dismiss">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DocumentEditor
