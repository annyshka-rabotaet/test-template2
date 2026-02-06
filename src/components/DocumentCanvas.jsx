import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from './icons'
import './DocumentCanvas.css'

const PageTitle = () => (
  <div className="page-title">
    <div className="page-info">
      <span className="page-info-text">Car Rental Agreement</span>
      <span className="page-separator">  ·  </span>
      <span className="page-info-text">Page 1 of 6</span>
    </div>
  </div>
)

const DocumentCanvas = () => {
  const documentRef = useRef(null)
  const [droppedFields, setDroppedFields] = useState([])
  const [isDraggingOver, setIsDraggingOver] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
    setIsDraggingOver(true)
  }

  const handleDragLeave = (e) => {
    if (!documentRef.current?.contains(e.relatedTarget)) {
      setIsDraggingOver(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDraggingOver(false)

    try {
      const fieldData = JSON.parse(e.dataTransfer.getData('application/json'))
      const rect = documentRef.current.getBoundingClientRect()
      
      const newField = {
        id: `field-${Date.now()}-${Math.random()}`,
        type: fieldData.type,
        label: fieldData.label,
        color: fieldData.color,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top + documentRef.current.scrollTop
      }

      setDroppedFields(prev => [...prev, newField])
    } catch (err) {
      console.error('Failed to parse field data:', err)
    }
  }

  const handleFieldClick = (fieldId) => {
    setDroppedFields(prev => prev.filter(f => f.id !== fieldId))
  }

  useEffect(() => {
    // Make text elements editable
    const makeTextEditable = () => {
      if (!documentRef.current) return

      // Find all text blocks
      const textBlocks = documentRef.current.querySelectorAll('.text-block')
      
      textBlocks.forEach(block => {
        const textElements = block.querySelectorAll('p, h1, h2, h3, h4, h5')
        
        textElements.forEach(element => {
          const hasOnlyTokens = element.querySelectorAll('.token').length === element.childNodes.length
          if (hasOnlyTokens && element.textContent.trim().length === 0) {
            return
          }
          
          element.setAttribute('contenteditable', 'true')
          
          const tokens = element.querySelectorAll('.token')
          tokens.forEach(token => {
            token.setAttribute('contenteditable', 'false')
          })
          
          element.addEventListener('paste', (e) => {
            e.preventDefault()
            const text = (e.clipboardData || window.clipboardData).getData('text/plain')
            document.execCommand('insertText', false, text)
          })
        })
      })

      // Make table cells editable
      const tableCells = documentRef.current.querySelectorAll('.table-cell p')
      tableCells.forEach(cell => {
        const hasOnlyTokens = cell.querySelectorAll('.token').length === cell.childNodes.length
        if (!hasOnlyTokens || cell.textContent.trim().length > 0) {
          cell.setAttribute('contenteditable', 'true')
          
          const tokens = cell.querySelectorAll('.token')
          tokens.forEach(token => {
            token.setAttribute('contenteditable', 'false')
          })
          
          cell.addEventListener('paste', (e) => {
            e.preventDefault()
            const text = (e.clipboardData || window.clipboardData).getData('text/plain')
            document.execCommand('insertText', false, text)
          })
        }
      })
    }

    makeTextEditable()
  }, [])

  return (
    <>
      <PageTitle />
      
      <div 
        className={`document-canvas ${isDraggingOver ? 'drag-over' : ''}`}
        ref={documentRef}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <article className="template-document">
          {/* Page 0 - Cover */}
          <div className="page cover page-0">
            <div className="text-block block" style={{position:'absolute', top:'16.2879%', left:'7.7206%', width:'84.6814%', height:'auto'}}>
              <div className="absolute-block-wrapper">
                <h1 style={{textAlign:'left'}}><span style={{fontSize:'2.27em', color:'#293249'}}>Car Rental Agreement Template</span></h1>
              </div>
            </div>
            <div className="text-block block" style={{position:'absolute', top:'83.4280%', left:'32.8431%', width:'59.8039%', height:'auto'}}>
              <div className="absolute-block-wrapper">
                <p style={{textAlign:'right'}}><b style={{fontFamily:'IBM Plex Sans', color:'#293249'}}>Prepared by</b></p>
                <p style={{textAlign:'right'}}>​<span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans', color:'#293249'}}><span className="token token-empty">[Sender.FirstName]</span></span>​</p>
                <p style={{textAlign:'right'}}>​<span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans', color:'#293249'}}><span className="token token-empty">[Sender.LastName]</span></span>​</p>
              </div>
            </div>
            <div className="text-block block" style={{position:'absolute', top:'73.2955%', left:'31.4951%', width:'61.1520%', height:'auto'}}>
              <div className="absolute-block-wrapper">
                <p style={{textAlign:'right'}}>
                  <b style={{fontFamily:'IBM Plex Sans', color:'#293249'}}>Prepared for</b>
                  <br />
                  ​<span className="token token-empty">[Client.FirstName]</span>
                  <br />
                  ​<span className="token token-empty">[Client.LastName]</span>​
                </p>
              </div>
            </div>
          </div>

          {/* Page 1 */}
          <div className="page content page-1">
            <div className="text-block block" style={{marginBottom:'3.51em'}}>
              <p>
                <span style={{fontSize:'1.31em'}}>This Car Rental Agreement is entered into between </span>
                <span style={{fontSize:'1.31em'}}><span className="token token-empty">[Sender.FirstName]</span></span>
                <span style={{fontSize:'1.31em'}}> </span>
                <span style={{fontSize:'1.31em'}}><span className="token token-empty">[Sender.LastName]</span></span>
                <span style={{fontSize:'1.31em'}}> ("Owner") and </span>
                <span style={{fontSize:'1.31em'}}><span className="token token-empty">[Client.FirstName]</span></span>
                <span style={{fontSize:'1.31em'}}> </span>
                <span style={{fontSize:'1.31em'}}><span className="token token-empty">[Client.LastName]</span></span>
                <span style={{fontSize:'1.31em'}}> ("Renter") (collectively the "Parties") and outlines the respective rights and obligations of the Parties relating to the rental of a car.</span>
              </p>
            </div>

            <div className="text-block block">
              <h2>1. Identification of rental vehicle</h2>
            </div>

            <div className="text-block block" style={{marginRight:'-0.31em', marginBottom:'0.38em', marginLeft:'-0.31em', padding:'0.31em'}}>
              <p><span style={{fontFamily:'IBM Plex Sans'}}>Owner hereby agrees to rent to Renter a passenger vehicle identified as follows:</span></p>
            </div>

            <div className="table-block block">
              <table className="table table-d0">
                <colgroup>
                  <col width="16.48%" />
                  <col width="83.52%" />
                </colgroup>
                <tbody>
                  <tr className="table-data-row">
                    <td className="table-cell"><p><span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans'}}>⚙️ Make</span></p></td>
                    <td className="table-cell"><p>​</p></td>
                  </tr>
                  <tr className="table-data-row">
                    <td className="table-cell"><p style={{textAlign:'left'}}><span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans'}}>🚗 Model</span></p></td>
                    <td className="table-cell"><p>​</p></td>
                  </tr>
                  <tr className="table-data-row">
                    <td className="table-cell"><p style={{textAlign:'left'}}><span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans'}}>🔢 VIN</span></p></td>
                    <td className="table-cell"><p>​</p></td>
                  </tr>
                  <tr className="table-data-row">
                    <td className="table-cell"><p style={{textAlign:'left'}}><span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans'}}>📅 Year </span></p></td>
                    <td className="table-cell"><p>​</p></td>
                  </tr>
                  <tr className="table-data-row">
                    <td className="table-cell"><p style={{textAlign:'left'}}><span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans'}}>🎨 Color</span></p></td>
                    <td className="table-cell"><p>​</p></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-block block" style={{marginRight:'-0.31em', marginBottom:'3.19em', marginLeft:'-0.31em', padding:'0.31em'}}>
              <p><span style={{fontFamily:'IBM Plex Sans'}}>(hereinafter referred to as "Rental Vehicle").</span></p>
            </div>

            <div className="text-block block">
              <h2>2. Rental term </h2>
            </div>

            <div className="text-block block" style={{padding:'0.31em'}}>
              <p style={{marginBottom:'1em', marginTop:0, lineHeight:1.5}}>
                The term of this Car Rental Agreement runs from the date and hour of vehicle pickup as indicated just above the signature line at the bottom of this agreement until the return of the vehicle to Owner, and completion of all terms of this agreement by both Parties. The estimated rental term is as follows:
              </p>
              <p style={{marginBottom:'1em', marginTop:0, lineHeight:1.5}}>⏱ Estimated start date: </p>
              <p style={{marginBottom:'1em', marginTop:0, lineHeight:1.5}}>⏱ Estimated end date: </p>
              <p style={{marginBottom:'1em', marginTop:0, lineHeight:1.5}}>The Parties may shorten or extend the estimate term of rental by mutual consent.</p>
            </div>
          </div>

          {/* Page 2 */}
          <div className="page content page-2">
            <div className="text-block block">
              <h2>3. Scope of use</h2>
            </div>
            <div className="text-block block">
              <p>Renter will use the Rented Vehicle only for personal or routine business use, and operate the Rented Vehicle only on properly maintained roads and parking lots. Renter will comply with all applicable laws relating to holding licensure to operate the vehicle, and pertaining to operation of motor vehicles.&nbsp;Renter will not sublease the Rental Vehicle or use it as a vehicle for hire. Renter will not take the vehicle location limit.</p>
            </div>
            <div className="text-block block" style={{marginTop:'-0.31em', marginRight:'-0.31em', marginBottom:'0.07em', marginLeft:'-0.31em', padding:'0.31em 0.31em 0.63em'}}>
              <p><span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans', color:'#000000'}}>Renter will not allow any other person to operate the Rented Vehicle unless identified here:</span></p>
            </div>
            <div className="table-block block" style={{marginBottom:'3.51em'}}>
              <table className="table table-d1">
                <colgroup>
                  <col width="31.844%" />
                  <col width="68.156%" />
                </colgroup>
                <tbody>
                  <tr className="table-data-row">
                    <td className="table-cell"><p>Primary vehicle operator:</p></td>
                    <td className="table-cell"><p style={{textAlign:'left'}}><span> DL #</span></p></td>
                  </tr>
                  <tr className="table-data-row">
                    <td className="table-cell"><p style={{textAlign:'left'}}>Additional vehicle operator: </p></td>
                    <td className="table-cell"><p style={{textAlign:'left'}}><span> DL #</span></p></td>
                  </tr>
                  <tr className="table-data-row">
                    <td className="table-cell"><p style={{textAlign:'left'}}><span>Additional vehicle operator: </span></p></td>
                    <td className="table-cell"><p style={{textAlign:'left'}}><span> DL #</span></p></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-block block">
              <h2>4. Mileage</h2>
            </div>
            <div className="text-block block" style={{marginBottom:'3.51em'}}>
              <p>Mileage of the Rental Vehicle is mileage at the time of commencement of this Car Rental Agreement. Mileage on the vehicle will be limited <span className="token token-empty">[Mileage.Limitations]</span>. Any mileage on the vehicle in excess of this limitation will be subject to an excess mileage surcharge of <span className="token token-empty">[Excess.Mileage.Fee]</span> per mile.</p>
            </div>
            <div className="text-block block">
              <h2><span style={{color:'#434343'}}>5. Rental fees</span></h2>
            </div>
            <div className="text-block block" style={{marginRight:'-0.31em', marginLeft:'-0.31em', padding:'0.31em'}}>
              <p>Renter will pay to Owner rental fees for use of the Rental Vehicle as follows:​</p>
              <p>💵 Base fee: </p>
              <p>​</p>
              <p>⛽️ Fuel:</p>
              <p>​</p>
              <p>Excess mileage fees as set forth in Paragraph 4, above.</p>
            </div>
          </div>

          {/* Page 3 */}
          <div className="page content page-3">
            <div className="text-block block">
              <h2><span style={{color:'#434343'}}>6. Security deposit</span></h2>
            </div>
            <div className="text-block block" style={{marginBottom:'3.19em'}}>
              <p>Renter will be required to provide a security deposit to Owner in the amount of <span className="token token-empty">[Security.Deposit]</span> dollars ("Security Deposit") to be used in the event of loss or damage to the Rental Vehicle during the term of this agreement. Owner may, in lieu of collection of a security deposit, place a hold on a credit card in the same amount. &nbsp;In the event of damage to the Rental Vehicle, Owner will apply this Security Deposit to defray the costs of necessary repairs or replacement.&nbsp;If the cost for repair or replacement of damage to the Rental Vehicle exceeds the amount of the Security Deposit, Renter will be responsible for payment to the Owner of the balance of this cost.</p>
            </div>
            <div className="text-block block">
              <h2><span style={{color:'#434343'}}>7. Insurance</span></h2>
            </div>
            <div className="text-block block" style={{marginBottom:'3.19em'}}>
              <p>Renter must provide to Owner with proof of insurance that would cover damage to the Rental Vehicle at the time this Car Rental Agreement is signed, as well as personal injury to the Renter, passengers in the Rented Vehicle, and other persons or property. If the Rental Vehicle is damaged or destroyed while it is in the possession of Renter, Renter agrees to pay any required insurance deductible and also assign all rights to collect insurance proceeds to Owner.</p>
            </div>
            <div className="text-block block">
              <h2><span style={{color:'#434343'}}>8. Indemnification</span></h2>
            </div>
            <div className="text-block block">
              <p>Renter agrees to indemnify, defend, and hold harmless the Owner for any loss, damage, or legal actions against Owner as a result of Renter's operation or use of the Rented Vehicle during the term of this Car Rental Agreement. This includes any attorney fees necessarily incurred for these purposes. Renter will also pay for any parking tickets, moving violations, or other citations received while in possession of the Rented Vehicle.</p>
            </div>
          </div>

          {/* Page 4 */}
          <div className="page content page-4">
            <div className="text-block block">
              <h2><span style={{color:'#434343'}}>9. Representations and warranties </span></h2>
            </div>
            <div className="text-block block" style={{marginBottom:'3.19em'}}>
              <p style={{marginBottom:'1em', marginTop:0, lineHeight:1.5}}>Owner represents and warrants that to Owner's knowledge, the Rental Vehicle is in good condition and is safe for ordinary operation of the vehicle. </p>
              <p style={{marginBottom:'1em', marginTop:0, lineHeight:1.5}}>Renter represents and warrants that Renter is legally entitled to operate a motor vehicle under the laws of this jurisdiction and will not operate it in violation of any laws, or in any negligent or illegal manner.</p>
              <p style={{marginBottom:'1em', marginTop:0, lineHeight:1.5}}>Renter has been given an opportunity to examine the Rental Vehicle in advance of taking possession of it, and upon such inspection, is not aware of any damage existing on the vehicle other than that notated by separate Existing Damage document.</p>
            </div>
            <div className="text-block block">
              <h2><span style={{color:'#434343'}}>10. Jurisdiction and venue</span></h2>
            </div>
            <div className="text-block block">
              <p>In the event of any dispute over this agreement, this Car Rental Agreement will be interpreted by the laws of <span className="token token-empty">[Sender.Country]</span>, and any lawsuit or arbitration must be brought in the corresponding region of <span className="token token-empty">[Sender.Country]</span>. If any portion of this agreement is found to be unenforceable by a court of competent jurisdiction, the remainder of the agreement would still have full force and effect.</p>
            </div>
          </div>

          {/* Page 5 - Signatures */}
          <div className="page content page-5">
            <div className="text-block block">
              <h2>11. Entire agreement</h2>
            </div>
            <div className="text-block block" style={{marginBottom:'3.19em'}}>
              <p>This Car Rental Agreement constitutes the entire agreement between the Parties with respect to this rental arrangement. No modification to this agreement can be made unless in writing signed by both Parties. Any notice required to be given to the other party will be made to the contact information below.</p>
            </div>
            <div className="row">
              <div className="column" style={{width:'93.26%'}}>
                <div className="text-block block" style={{marginBottom:'7.26em'}}>
                  <p>Date and time of vehicle pickup: &nbsp;</p>
                </div>
              </div>
              <div className="column" style={{width:'6.74%'}}>
                <div className="text-block block">
                  <p>​</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column" style={{width:'50%'}}>
                <div className="text-block block">
                  <p>​</p>
                  <p>​</p>
                  <p>​</p>
                  <p>​</p>
                  <p>​</p>
                  <p className="field date-field">
                    <span className="token-input date">
                      <span>MM / DD / YYYY</span>
                      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
                        <g fillRule="evenodd">
                          <path d="M18 19H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1m0-15h-1V2h-2v2H9V2H7v2H6C4.346 4 3 5.346 3 7v11c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3"></path>
                          <path d="M7 17h4v-4H7z"></path>
                        </g>
                      </svg>
                    </span>
                  </p>
                  <p className="field signature-field">
                    <span className="token-input signature">Signature</span>
                  </p>
                </div>
              </div>
              <div className="column" style={{width:'50%'}}>
                <div className="text-block block">
                  <p>​</p>
                  <p>​</p>
                  <p>​</p>
                  <p>​</p>
                  <p>​</p>
                  <p className="field date-field">
                    <span className="token-input date">
                      <span>MM / DD / YYYY</span>
                      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
                        <g fillRule="evenodd">
                          <path d="M18 19H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1m0-15h-1V2h-2v2H9V2H7v2H6C4.346 4 3 5.346 3 7v11c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3"></path>
                          <path d="M7 17h4v-4H7z"></path>
                        </g>
                      </svg>
                    </span>
                  </p>
                  <p className="field signature-field">
                    <span className="token-input signature">Signature</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column" style={{width:'50%'}}>
                <div className="text-block block">
                  <p>​<span className="token token-empty">[Sender.FirstName]</span> <span className="token token-empty">[Sender.LastName]</span>​</p>
                </div>
              </div>
              <div className="column" style={{width:'50%'}}>
                <div className="text-block block">
                  <p>​<span className="token token-empty">[Client.FirstName]</span> <span className="token token-empty">[Client.LastName]</span></p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Dropped Fields */}
        {droppedFields.map(field => (
          <div
            key={field.id}
            className={`dropped-field color-${field.color}`}
            style={{
              position: 'absolute',
              left: `${field.x}px`,
              top: `${field.y}px`,
              cursor: 'pointer'
            }}
            onClick={() => handleFieldClick(field.id)}
            title="Click to remove"
          >
            <span className="dropped-field-label">{field.label}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        ))}
      </div>
    </>
  )
}

export default DocumentCanvas
