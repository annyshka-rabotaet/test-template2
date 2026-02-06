import React, { useState } from 'react'
import DocumentHeader from './DocumentHeader'
import DocumentEditingTools from './DocumentEditingTools'
import DocumentCanvas from './DocumentCanvas'
import AddFieldsSidebar from './AddFieldsSidebar'
import SidebarToggler from './SidebarToggler'
import './DocumentEditor.css'

const DocumentEditor = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true)

  return (
    <div className="document-editor">
      <DocumentHeader />
      <DocumentEditingTools />
      
      <div className="editor-content">
        <DocumentCanvas />
        
        {rightSidebarOpen && <AddFieldsSidebar />}
        
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
