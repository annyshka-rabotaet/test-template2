import React from 'react'
import {
  Undo,
  Redo,
  FormatBold,
  FormatItalic,
  FormatUnderline,
  FormatColor,
  Link,
  FormatClear,
  MoreHorizontal,
  FormatAlignLeft,
  FormatListBulleted,
  IndentDecrease,
  IndentIncrease,
  FormatLineSpacing,
  BorderStyle,
  ChevronDown
} from './icons'
import './DocumentEditingTools.css'

const Divider = () => (
  <div className="toolbar-divider-wrapper">
    <div className="toolbar-divider"></div>
  </div>
)

const DocumentEditingTools = () => {
  return (
    <div className="document-editing-tools">
      <button className="editing-mode-btn">
        <span className="editing-mode-text">Editing</span>
        <ChevronDown />
      </button>
      
      <Divider />
      
      <button className="toolbar-icon-btn" title="Undo">
        <Undo />
      </button>
      
      <button className="toolbar-icon-btn" title="Redo">
        <Redo />
      </button>
      
      <Divider />
      
      <div className="toolbar-dropdown">
        <span className="dropdown-text">Regular text</span>
      </div>
      
      <Divider />
      
      <div className="toolbar-dropdown">
        <span className="dropdown-text">Poppins</span>
      </div>
      
      <Divider />
      
      <div className="toolbar-dropdown">
        <span className="dropdown-text">16</span>
      </div>
      
      <Divider />
      
      <button className="toolbar-icon-btn" title="Bold">
        <FormatBold />
      </button>
      
      <button className="toolbar-icon-btn" title="Italic">
        <FormatItalic />
      </button>
      
      <button className="toolbar-icon-btn" title="Underline">
        <FormatUnderline />
      </button>
      
      <button className="toolbar-icon-btn" title="Text color">
        <FormatColor />
      </button>
      
      <button className="toolbar-icon-btn" title="Link">
        <Link />
      </button>
      
      <button className="toolbar-icon-btn" title="Clear formatting">
        <FormatClear />
      </button>
      
      <button className="toolbar-icon-btn" title="More">
        <MoreHorizontal />
      </button>
      
      <Divider />
      
      <div className="toolbar-dropdown-group">
        <button className="toolbar-icon-btn">
          <FormatAlignLeft />
        </button>
        <ChevronDown />
      </div>
      
      <Divider />
      
      <div className="toolbar-dropdown-group">
        <button className="toolbar-icon-btn">
          <FormatListBulleted />
        </button>
        <ChevronDown />
      </div>
      
      <button className="toolbar-icon-btn" title="Decrease indent">
        <IndentDecrease />
      </button>
      
      <button className="toolbar-icon-btn" title="Increase indent">
        <IndentIncrease />
      </button>
      
      <Divider />
      
      <button className="toolbar-icon-btn" title="Line spacing">
        <FormatLineSpacing />
      </button>
      
      <button className="toolbar-icon-btn" title="Border style">
        <BorderStyle />
      </button>
    </div>
  )
}

export default DocumentEditingTools
