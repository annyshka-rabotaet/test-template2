import React, { useState } from 'react'
import GoogleSearch from './components/GoogleSearch'
import TemplatePage from './components/TemplatePage'
import SignupPage from './components/SignupPage'
import DocumentEditor from './components/DocumentEditor'

function App() {
  const [currentPage, setCurrentPage] = useState('search') // 'search' | 'template' | 'signup' | 'editor'

  const handleResultClick = () => {
    setCurrentPage('template')
  }

  const handleUseTemplate = () => {
    setCurrentPage('signup')
  }

  const handleSignup = () => {
    setCurrentPage('editor')
  }

  // Render current page
  switch (currentPage) {
    case 'template':
      return <TemplatePage onUseTemplate={handleUseTemplate} />
    
    case 'signup':
      return <SignupPage onSignup={handleSignup} />
    
    case 'editor':
      return <DocumentEditor />
    
    case 'search':
    default:
      return <GoogleSearch onResultClick={handleResultClick} />
  }
}

export default App
