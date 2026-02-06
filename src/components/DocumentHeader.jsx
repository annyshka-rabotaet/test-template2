import React, { useState, useRef, useEffect } from 'react'
import { Menu, ChevronDown, Folder, CloudCheck, Help } from './icons'
import './DocumentHeader.css'

const DocumentHeader = ({ autoOpenSend = false, onDownloaded, triggerSend = 0, hasDownloaded = false } = {}) => {
  const [isInviteOpen, setIsInviteOpen] = useState(false)
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [isFileMenuOpen, setIsFileMenuOpen] = useState(false)
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false)
  const [isInsertMenuOpen, setIsInsertMenuOpen] = useState(false)
  const [isViewMenuOpen, setIsViewMenuOpen] = useState(false)
  const [pageBackground, setPageBackground] = useState(true)
  const [fieldSuggestions, setFieldSuggestions] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [showCompletionDialog, setShowCompletionDialog] = useState(false)
  const [showDownloadNudge, setShowDownloadNudge] = useState(false)
  const [showCertificatePreview, setShowCertificatePreview] = useState(false)
  const [successMessage, setSuccessMessage] = useState({ title: '', description: '' })
  const [successAction, setSuccessAction] = useState(null)
  const inviteRef = useRef(null)
  const reviewRef = useRef(null)
  const fileMenuRef = useRef(null)
  const editMenuRef = useRef(null)
  const insertMenuRef = useRef(null)
  const viewMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inviteRef.current && !inviteRef.current.contains(event.target)) {
        setIsInviteOpen(false)
      }
      if (reviewRef.current && !reviewRef.current.contains(event.target)) {
        setIsReviewOpen(false)
      }
      if (fileMenuRef.current && !fileMenuRef.current.contains(event.target)) {
        setIsFileMenuOpen(false)
      }
      if (editMenuRef.current && !editMenuRef.current.contains(event.target)) {
        setIsEditMenuOpen(false)
      }
      if (insertMenuRef.current && !insertMenuRef.current.contains(event.target)) {
        setIsInsertMenuOpen(false)
      }
      if (viewMenuRef.current && !viewMenuRef.current.contains(event.target)) {
        setIsViewMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!autoOpenSend) return
    const t = setTimeout(() => setIsReviewOpen(true), 350)
    return () => clearTimeout(t)
  }, [autoOpenSend])

  useEffect(() => {
    if (triggerSend > 0) {
      setIsReviewOpen(true)
    }
  }, [triggerSend])

  const openSend = () => {
    setIsFileMenuOpen(false)
    setIsInviteOpen(false)
    setIsReviewOpen(true)
  }

  const handleDownloadClick = () => {
    setIsFileMenuOpen(false)
    proceedDownload()
  }

  const proceedDownload = () => {
    setShowDownloadNudge(false)
    setSuccessMessage({
      title: 'Downloaded as PDF',
      description: 'Your download doesn\u2019t include a signing certificate or audit trail.'
    })
    setSuccessAction({ label: 'Send for signature instead', onClick: openSend })
    setShowSuccessDialog(true)
    if (onDownloaded) onDownloaded()
    setTimeout(() => {
      setShowSuccessDialog(false)
      setSuccessAction(null)
    }, 4500)
  }

  const handleRecipientInvite = () => {
    setIsInviteOpen(false)
    setSuccessMessage({
      title: 'Recipient added! 👤',
      description: 'They can now sign the document'
    })
    setSuccessAction(null)
    setShowSuccessDialog(true)
    setTimeout(() => {
      setShowSuccessDialog(false)
      setTimeout(() => setShowCompletionDialog(true), 500)
    }, 3000)
  }

  const handleSendByEmail = () => {
    setIsReviewOpen(false)
    setSuccessMessage({
      title: 'Email sent successfully! 📧',
      description: 'Your document has been sent to all recipients'
    })
    setSuccessAction(null)
    setShowSuccessDialog(true)
    setTimeout(() => {
      setShowSuccessDialog(false)
      setTimeout(() => setShowCompletionDialog(true), 500)
    }, 3000)
  }

  const handleSendByLink = () => {
    setIsReviewOpen(false)
    setSuccessMessage({
      title: 'Link copied! 🔗',
      description: 'Share this link with anyone who needs to sign'
    })
    setSuccessAction(null)
    setShowSuccessDialog(true)
    setTimeout(() => {
      setShowSuccessDialog(false)
      setTimeout(() => setShowCompletionDialog(true), 500)
    }, 3000)
  }

  return (
    <div className="document-header">
      <div className="header-left">
        <button className="menu-button">
          <Menu />
        </button>
        
        <div className="app-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '24px', height: '24px' }}>
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        </div>
        
        <div className="document-title-section">
          <div className="document-heading">
            <div className="title-with-icons">
              <h1 className="document-title">Car Rental Agreement Template</h1>
              <span className="status-badge">Draft</span>
              <Folder />
              <CloudCheck />
            </div>
          </div>
          
          <div className="menu-bar">
            <div className="menu-bar-wrapper" ref={fileMenuRef}>
              <button 
                className={`menu-bar-item ${isFileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsFileMenuOpen(!isFileMenuOpen)}
              >
                File
              </button>
              
              {isFileMenuOpen && (
                <div className="file-menu">
                  <button className="file-menu-item has-submenu">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    <span>Create new</span>
                    <svg className="submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    <span>Convert to template</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                    <span>Make a copy</span>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
                    </svg>
                    <span>Workflow setup</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.5 11.5C3.5 7 6.25 3.5 12 3.5S20.5 7 20.5 11.5 18 19.5 12 19.5s-8.5-3.5-8.5-8zm8.5 4C14.43 15.5 16 13.93 16 12s-1.57-3.5-3.5-3.5S8.5 10.07 8.5 12s1.57 3.5 3.5 3.5zm0 4.5c-2 0-3.5 1.5-3.5 2.5h7c0-1-1.5-2.5-3.5-2.5z"/>
                    </svg>
                    <span>Signature settings</span>
                  </button>
                  
                  <button className="file-menu-item has-submenu">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                    <span>Recipients</span>
                    <svg className="submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  
                  <button className="file-menu-item has-submenu">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    <span>Document</span>
                    <svg className="submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                    <span>Rename</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
                    </svg>
                    <span>Auto-numbering</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/>
                    </svg>
                    <span>Move</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/>
                    </svg>
                    <span>Archive</span>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item has-submenu" onClick={handleDownloadClick}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    <span>Download</span>
                    <svg className="submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
                    </svg>
                    <span>Print</span>
                  </button>
                </div>
              )}
            </div>
            <div className="menu-bar-wrapper" ref={editMenuRef}>
              <button 
                className={`menu-bar-item ${isEditMenuOpen ? 'active' : ''}`}
                onClick={() => setIsEditMenuOpen(!isEditMenuOpen)}
              >
                Edit
              </button>
              
              {isEditMenuOpen && (
                <div className="file-menu">
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
                    </svg>
                    <span>Undo</span>
                    <span className="keyboard-shortcut">⌘ + Z</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
                    </svg>
                    <span>Redo</span>
                    <span className="keyboard-shortcut">⌘ + Shift + Z</span>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/>
                    </svg>
                    <span>Cut</span>
                    <span className="keyboard-shortcut">⌘ + X</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                    <span>Copy</span>
                    <span className="keyboard-shortcut">⌘ + C</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>
                    </svg>
                    <span>Paste</span>
                    <span className="keyboard-shortcut">⌘ + V</span>
                  </button>
                </div>
              )}
            </div>
            <div className="menu-bar-wrapper" ref={insertMenuRef}>
              <button 
                className={`menu-bar-item ${isInsertMenuOpen ? 'active' : ''}`}
                onClick={() => setIsInsertMenuOpen(!isInsertMenuOpen)}
              >
                Insert
              </button>
              
              {isInsertMenuOpen && (
                <div className="file-menu">
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    <span>Insert document</span>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    </svg>
                    <span>Cover page</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    <span>Blank page</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"/>
                    </svg>
                    <span>Attachment</span>
                  </button>
                  
                  <button className="file-menu-item has-submenu">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                    <span>Add from</span>
                    <svg className="submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  
                  <button className="file-menu-item has-submenu">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.5 11.5C3.5 7 6.25 3.5 12 3.5S20.5 7 20.5 11.5 18 19.5 12 19.5s-8.5-3.5-8.5-8zm8.5 4C14.43 15.5 16 13.93 16 12s-1.57-3.5-3.5-3.5S8.5 10.07 8.5 12s1.57 3.5 3.5 3.5zm0 4.5c-2 0-3.5 1.5-3.5 2.5h7c0-1-1.5-2.5-3.5-2.5z"/>
                    </svg>
                    <span>Fillable fields</span>
                    <svg className="submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <div className="menu-section-header">CONTENT</div>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                    <span>Text</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                    <span>Image</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                    </svg>
                    <span>Video</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10.02H3V19z"/>
                    </svg>
                    <span>Table</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                    <span>Pricing table</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                    <span>Quote builder</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/>
                    </svg>
                    <span>Table of contents</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    <span>Variable</span>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    </svg>
                    <span>Page break</span>
                  </button>
                </div>
              )}
            </div>
            <div className="menu-bar-wrapper" ref={viewMenuRef}>
              <button 
                className={`menu-bar-item ${isViewMenuOpen ? 'active' : ''}`}
                onClick={() => setIsViewMenuOpen(!isViewMenuOpen)}
              >
                View
              </button>
              
              {isViewMenuOpen && (
                <div className="file-menu">
                  <button className="file-menu-item has-submenu">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                    <span>Mode</span>
                    <span className="mode-label">Editing</span>
                    <svg className="submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    <span>Comments</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    <span>All variables</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                    <span>Content library</span>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                    </svg>
                    <span>Pages preview</span>
                  </button>
                  
                  <div className="file-menu-divider" />
                  
                  <button className="file-menu-item with-toggle" onClick={(e) => { e.stopPropagation(); setPageBackground(!pageBackground); }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"/>
                    </svg>
                    <span>Page background</span>
                    <div className={`toggle-switch ${pageBackground ? 'active' : ''}`}>
                      <div className="toggle-thumb"></div>
                    </div>
                  </button>
                  
                  <button className="file-menu-item with-toggle" onClick={(e) => { e.stopPropagation(); setFieldSuggestions(!fieldSuggestions); }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/>
                    </svg>
                    <span>Field suggestions</span>
                    <div className={`toggle-switch ${fieldSuggestions ? 'active' : ''}`}>
                      <div className="toggle-thumb"></div>
                    </div>
                  </button>
                  
                  <button className="file-menu-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                    <span>Full screen preview</span>
                  </button>
                </div>
              )}
            </div>
            <button className="menu-bar-item">Format</button>
            <button className="menu-bar-item">Integrations</button>
          </div>
        </div>
      </div>
      
      <div className="header-right">
        <div className="dropdown-wrapper" ref={inviteRef}>
          <button 
            className="btn-secondary"
            onClick={() => setIsInviteOpen(!isInviteOpen)}
          >
            <span>Invite</span>
            <ChevronDown />
          </button>
          
          {isInviteOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => setIsInviteOpen(false)}>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Collaborator</span>
                    <span className="dropdown-item-description">Can edit the document</span>
                  </div>
                </div>
              </button>
              
              <button className="dropdown-item" onClick={handleRecipientInvite}>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">Recipient</span>
                    <span className="dropdown-item-description">Can only sign the document</span>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
        
        <div className="dropdown-wrapper" ref={reviewRef}>
          <button 
            className={`btn-primary${hasDownloaded ? ' pulse-send' : ''}`}
            onClick={() => setIsReviewOpen(!isReviewOpen)}
          >
            <span>Review and send</span>
            <ChevronDown />
          </button>
          
          {isReviewOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleSendByEmail}>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">By Email</span>
                    <span className="dropdown-item-description">Send directly to recipients</span>
                  </div>
                </div>
              </button>
              
              <button className="dropdown-item" onClick={handleSendByLink}>
                <div className="dropdown-item-content">
                  <div className="dropdown-item-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                    </svg>
                  </div>
                  <div className="dropdown-item-text">
                    <span className="dropdown-item-title">By Link</span>
                    <span className="dropdown-item-description">Share a signing link</span>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
        
        <button className="btn-icon">
          <Help />
        </button>
      </div>

      {/* Success Dialog */}
      {showSuccessDialog && (
        <div className="success-dialog">
          <div className="success-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="success-content">
            <h3 className="success-title">{successMessage.title}</h3>
            <p className="success-description">{successMessage.description}</p>
            {successAction && (
              <button
                className="success-action-btn"
                onClick={() => {
                  try {
                    successAction.onClick?.()
                  } finally {
                    setShowSuccessDialog(false)
                    setSuccessAction(null)
                  }
                }}
              >
                {successAction.label}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Completion Dialog */}
      {showCompletionDialog && (
        <div className="completion-overlay" onClick={() => setShowCompletionDialog(false)}>
          <div className="completion-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="completion-confetti">
              <span className="confetti">🎉</span>
              <span className="confetti">✨</span>
              <span className="confetti">🎊</span>
              <span className="confetti">⭐</span>
              <span className="confetti">💫</span>
              <span className="confetti">🌟</span>
            </div>
            <div className="completion-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 className="completion-title">Prototype Completed!</h2>
            <p className="completion-message">
              Awesome work! You've successfully explored all the features of this document editor prototype. 
            </p>
            <div className="completion-stats">
              <div className="stat-item">
                <span className="stat-icon">📄</span>
                <span className="stat-label">Document Created</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">✍️</span>
                <span className="stat-label">Fields Added</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">📤</span>
                <span className="stat-label">Sent for Signing</span>
              </div>
            </div>
            <button className="completion-btn" onClick={() => setShowCompletionDialog(false)}>
              Amazing! 🚀
            </button>
          </div>
        </div>
      )}

      {/* Download Nudge - removed */}

      {/* Certificate Preview */}
      {showCertificatePreview && (
        <div className="modal-overlay" onClick={() => setShowCertificatePreview(false)}>
          <div className="modal-card certificate-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Sample signing certificate</div>
            <div className="certificate-preview">
              <div className="certificate-row"><strong>Document:</strong> Car Rental Agreement</div>
              <div className="certificate-row"><strong>Status:</strong> Completed</div>
              <div className="certificate-row"><strong>Audit trail:</strong> View, sign, and timestamp events recorded</div>
              <div className="certificate-row"><strong>Signers:</strong> Sender + Recipient</div>
              <div className="certificate-row"><strong>Hash:</strong> Generated on completion</div>
              <div className="certificate-footnote">
                The signing certificate is included when you send for signature.
              </div>
            </div>
            <div className="modal-actions">
              <button className="modal-btn modal-btn-primary" onClick={() => { setShowCertificatePreview(false); openSend() }}>
                Send for signature — free
              </button>
              <button className="modal-btn" onClick={() => setShowCertificatePreview(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DocumentHeader
