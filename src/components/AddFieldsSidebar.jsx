import React, { useState, useEffect } from 'react'
import { Signature, Initials, TextIcon, Calendar, Reorder, ChevronDown } from './icons'
import './AddFieldsSidebar.css'

const UserAvatar = ({ initials, color }) => (
  <div className={`user-avatar color-${color}`}>
    <span className="avatar-text">{initials}</span>
  </div>
)

const FillableField = ({ icon: Icon, label, color = 1, fieldType }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'copy'
    e.dataTransfer.setData('application/json', JSON.stringify({
      type: fieldType,
      label: label,
      color: color
    }))
  }

  return (
    <div 
      className={`fillable-field color-${color}`}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <span className="field-left-icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="field-label">{label}</span>
      <span className="field-reorder" aria-hidden="true">
        <Reorder />
      </span>
    </div>
  )
}

const ReadinessTracker = ({ hasDownloaded, hasSent, onSendClick }) => (
  <div className="readiness-card">
    <div className="readiness-header">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="#248567" strokeWidth="1.5" fill="rgba(36,133,103,0.1)"/>
        <path d="M9 12l2 2 4-4" stroke="#248567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="readiness-title">Finalize your deal</span>
    </div>
    <div className="readiness-steps">
      <div className="readiness-step completed">
        <div className="step-check">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#248567"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <span>Template selected</span>
      </div>
      <div className="readiness-step completed">
        <div className="step-check">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#248567"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
        </div>
        <span>Document ready</span>
      </div>
      {hasSent ? (
        <div className="readiness-step completed">
          <div className="step-check">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#248567"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </div>
          <span>Sent for signature</span>
        </div>
      ) : hasDownloaded ? (
        <div className="readiness-step warning">
          <div className="step-circle">!</div>
          <span>Downloaded without protection</span>
        </div>
      ) : (
        <div className="readiness-step next-step">
          <div className="step-circle">3</div>
          <span>Send for signature</span>
        </div>
      )}
    </div>
    <div className="readiness-footer">
      {hasSent ? (
        <span className="readiness-hint readiness-done">
          Signing certificate and audit trail included
        </span>
      ) : hasDownloaded ? (
        <button className="readiness-cta" onClick={onSendClick}>
          Send now — get a signing certificate
        </button>
      ) : (
        <span className="readiness-hint">
          Sending adds a signing certificate and audit trail — free
        </span>
      )}
    </div>
  </div>
)

const ReadyToSendView = ({ onSendClick, onBackToFields, hasDownloaded, hasSent }) => {
  const [email, setEmail] = useState('')

  return (
    <div className="sidebar-content ready-content">
      <div className="ready-to-send-section">
        <div className="ready-checkmark">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="rgba(36,133,103,0.1)" stroke="#248567" strokeWidth="1.5"/>
            <path d="M8 12l3 3 5-5" stroke="#248567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="ready-question">Who needs to sign this agreement?</h3>
        <div className="ready-input-group">
          <label className="ready-label">Recipient email</label>
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ready-email-input"
          />
        </div>
        <button className="ready-send-btn" onClick={onSendClick}>
          Send for signature
        </button>
        <p className="ready-note">
          Your counterparty can sign in under 60 seconds. You'll both receive a signed copy with a legal certificate.
        </p>
      </div>

      <div className="divider-horizontal" />

      <ReadinessTracker hasDownloaded={hasDownloaded} hasSent={hasSent} onSendClick={onSendClick} />

      <button className="back-to-fields-btn" onClick={onBackToFields}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Back to fields
      </button>
    </div>
  )
}

const AddFieldsSidebar = ({ hasDownloaded = false, hasSent = false, onSendClick, showReadyToSend = false }) => {
  const [mode, setMode] = useState('fields')

  useEffect(() => {
    if (showReadyToSend && mode === 'fields') {
      setMode('ready')
    }
  }, [showReadyToSend])

  return (
    <div className="add-fields-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          {mode === 'ready' ? 'Almost done' : 'Add fillable fields'}
        </h2>
      </div>

      {mode === 'ready' ? (
        <ReadyToSendView
          onSendClick={onSendClick}
          onBackToFields={() => setMode('fields')}
          hasDownloaded={hasDownloaded}
          hasSent={hasSent}
        />
      ) : (
        <div className="sidebar-content">
          <div className="fields-section">
            <div className="person-card">
              <UserAvatar initials="NW" color={1} />
              <div className="person-info">
                <div className="person-name">Noah Walker</div>
                <div className="person-email">noah.walker@sealdocs.com</div>
              </div>
              <button type="button" className="person-card-btn" aria-label="Select person">
                <ChevronDown />
              </button>
            </div>

            <div className="fields-list">
              <FillableField icon={Signature} label="Signature" color={1} fieldType="signature" />
              <FillableField icon={Initials} label="Initials" color={1} fieldType="initials" />
              <FillableField icon={TextIcon} label="Text field" color={1} fieldType="text" />
              <FillableField icon={Calendar} label="Date" color={1} fieldType="date" />
            </div>
          </div>

          <div className="divider-horizontal" />

          <ReadinessTracker hasDownloaded={hasDownloaded} hasSent={hasSent} onSendClick={onSendClick} />
        </div>
      )}
    </div>
  )
}

export default AddFieldsSidebar
