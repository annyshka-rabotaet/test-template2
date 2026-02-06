import React from 'react'
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

const ReadinessTracker = ({ hasDownloaded, onSendClick }) => (
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
      {hasDownloaded ? (
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
      {hasDownloaded ? (
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

const AddFieldsSidebar = ({ hasDownloaded = false, onSendClick }) => {
  return (
    <div className="add-fields-sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Add fillable fields</h2>
      </div>
      
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

        <ReadinessTracker hasDownloaded={hasDownloaded} onSendClick={onSendClick} />
      </div>
    </div>
  )
}

export default AddFieldsSidebar
