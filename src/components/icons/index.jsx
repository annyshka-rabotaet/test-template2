import React from 'react'
import IconWrapper from './IconWrapper'

// Arrow icons
export const ChevronLeft = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
  </IconWrapper>
)

export const ChevronRight = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
  </IconWrapper>
)

export const ChevronDown = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/>
    </svg>
  </IconWrapper>
)

// Menu and actions
export const Menu = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  </IconWrapper>
)

export const MoreHorizontal = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  </IconWrapper>
)

export const Close = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  </IconWrapper>
)

export const Help = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
    </svg>
  </IconWrapper>
)

// Editing actions
export const Undo = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
    </svg>
  </IconWrapper>
)

export const Redo = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
    </svg>
  </IconWrapper>
)

// Text formatting
export const FormatBold = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
    </svg>
  </IconWrapper>
)

export const FormatItalic = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>
    </svg>
  </IconWrapper>
)

export const FormatUnderline = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>
    </svg>
  </IconWrapper>
)

export const FormatColor = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  </IconWrapper>
)

export const Link = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>
  </IconWrapper>
)

export const FormatClear = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/>
    </svg>
  </IconWrapper>
)

// Alignment and lists
export const FormatAlignLeft = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
    </svg>
  </IconWrapper>
)

export const FormatListBulleted = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/>
    </svg>
  </IconWrapper>
)

export const IndentIncrease = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>
    </svg>
  </IconWrapper>
)

export const IndentDecrease = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>
    </svg>
  </IconWrapper>
)

export const FormatLineSpacing = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z"/>
    </svg>
  </IconWrapper>
)

export const BorderStyle = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"/>
    </svg>
  </IconWrapper>
)

// Document and field icons
export const DocumentIcon = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
    </svg>
  </IconWrapper>
)

export const Signature = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <g transform="translate(3 2)">
        <path d="M5.0005 4.95L9.9495 0L11.0105 1.061L6.0605 6.011L5.0005 4.95Z" fill="currentColor" />
        <path d="M16.3604 3.4804L13.5304 0.6504L3.1704 11.0104L1.7304 15.2804L6.0004 13.8404L16.3604 3.4804Z" fill="currentColor" />
        <path d="M0 19.0107H18V17.0107H0V19.0107Z" fill="currentColor" />
      </g>
    </svg>
  </IconWrapper>
)

export const Calendar = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <g transform="translate(3 2)">
        <path d="M8 12V10H10V12H8ZM4 12V10H6V12H4ZM12 12V10H14V12H12ZM8 16V14H10V16H8ZM4 16V14H6V16H4ZM12 16V14H14V16H12ZM0 20V2H3V0H5V2H13V0H15V2H18V20H0ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z" fill="currentColor" />
      </g>
    </svg>
  </IconWrapper>
)

export const TextIcon = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <g transform="translate(4 4)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0L8 0.0002V2H5V8H3V2H0V0ZM0 12.0012V10.0002H16V12.0002L0 12.0012ZM0 16.0002V14.0002H16V16.0002H0ZM9 8.0002V6.0002H16V8.0002H9Z" fill="currentColor" />
      </g>
    </svg>
  </IconWrapper>
)

export const Reorder = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <g transform="translate(9 7)">
        <path d="M2 10H0V8H2V10ZM6 10H4V8H6V10ZM2 6H0V4H2V6ZM6 6H4V4H6V6ZM2 2H0V0H2V2ZM6 2H4V0H6V2Z" fill="currentColor" fillOpacity="0.32" />
      </g>
    </svg>
  </IconWrapper>
)

export const Folder = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
    </svg>
  </IconWrapper>
)

export const CloudCheck = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"/>
    </svg>
  </IconWrapper>
)

export const Person = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  </IconWrapper>
)

export const Dollar = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
    </svg>
  </IconWrapper>
)

export const Plus = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    </svg>
  </IconWrapper>
)

export const Initials = () => (
  <IconWrapper>
    <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <g transform="translate(2 4)">
        <path d="M20 16.9951H0V14.9951H20V16.9951ZM4 11.9121H2V0H4V11.9121ZM10 0L16 8.66309V0H18V11.9121H16L10 3.24902V11.9121H8V0H10Z" fill="currentColor" />
      </g>
    </svg>
  </IconWrapper>
)
