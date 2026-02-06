import React, { useState, useCallback, useEffect, useRef } from 'react'
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
  const [hasSent, setHasSent] = useState(false)
  const [triggerSend, setTriggerSend] = useState(0)

  // Idle timer — triggers sidebar transition after 25s of inactivity
  const [isIdle, setIsIdle] = useState(false)
  const idleTimerRef = useRef(null)

  const resetIdleTimer = useCallback(() => {
    if (isIdle) return // once idle, stay idle
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => setIsIdle(true), 25000)
  }, [isIdle])

  useEffect(() => {
    resetIdleTimer()
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart']
    events.forEach(e => window.addEventListener(e, resetIdleTimer, { passive: true }))
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      events.forEach(e => window.removeEventListener(e, resetIdleTimer))
    }
  }, [resetIdleTimer])

  // Signature page visibility — also triggers sidebar transition
  const [signaturePageSeen, setSignaturePageSeen] = useState(false)
  const [showInlinePrompt, setShowInlinePrompt] = useState(false)

  const handleSignatureVisible = useCallback(() => {
    if (!signaturePageSeen) {
      setSignaturePageSeen(true)
      // Slight delay for the inline prompt so it feels natural
      setTimeout(() => setShowInlinePrompt(true), 800)
    }
  }, [signaturePageSeen])

  const showReadyToSend = isIdle || signaturePageSeen

  const handleDownloaded = useCallback(() => {
    setHasDownloaded(true)
  }, [])

  const handleSent = useCallback(() => {
    setHasSent(true)
    setShowInlinePrompt(false)
  }, [])

  const handleSendFromAnywhere = useCallback(() => {
    setTriggerSend(prev => prev + 1)
  }, [])

  return (
    <div className="document-editor">
      <DocumentHeader
        onDownloaded={handleDownloaded}
        onSent={handleSent}
        triggerSend={triggerSend}
        hasDownloaded={hasDownloaded}
        hasSent={hasSent}
      />
      <DocumentEditingTools />
      
      <div className="editor-content">
        <DocumentCanvas
          hasSent={hasSent}
          onSignatureVisible={handleSignatureVisible}
          showInlinePrompt={showInlinePrompt}
          onSendFromPrompt={handleSendFromAnywhere}
        />
        
        {rightSidebarOpen && (
          <AddFieldsSidebar
            hasDownloaded={hasDownloaded}
            hasSent={hasSent}
            onSendClick={handleSendFromAnywhere}
            showReadyToSend={showReadyToSend}
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

    </div>
  )
}

export default DocumentEditor
