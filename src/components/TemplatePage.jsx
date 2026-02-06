import React, { useState } from 'react'
import './TemplatePage.css'

const TemplatePage = ({ onUseTemplate }) => {
  const [rating, setRating] = useState(0)

  return (
    <div className="template-page-wrapper">
      <div className="template-viewer">
        <div className="viewer-main">
          {/* Document Preview - All 6 Pages */}
          <div className="document-preview">
            {/* Page 0 - Cover */}
            <div className="page cover page-0">
              <div className="text-block block" style={{position:'absolute', top:'16%', left:'8%', width:'85%'}}>
                <div className="absolute-block-wrapper">
                  <h1 style={{textAlign:'left'}}><span style={{fontSize:'2.27em', color:'#293249'}}>Car Rental Agreement Template</span></h1>
                </div>
              </div>
              <div className="text-block block" style={{position:'absolute', top:'83%', left:'33%', width:'60%'}}>
                <div className="absolute-block-wrapper">
                  <p style={{textAlign:'right'}}><b style={{fontFamily:'IBM Plex Sans', color:'#293249'}}>Prepared by</b></p>
                  <p style={{textAlign:'right'}}>​<span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans', color:'#293249'}}><span className="token token-empty">[Sender.FirstName]</span></span>​</p>
                  <p style={{textAlign:'right'}}>​<span style={{fontWeight:'normal', fontFamily:'IBM Plex Sans', color:'#293249'}}><span className="token token-empty">[Sender.LastName]</span></span>​</p>
                </div>
              </div>
              <div className="text-block block" style={{position:'absolute', top:'73%', left:'31%', width:'61%'}}>
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
                    <p>​</p><p>​</p><p>​</p><p>​</p><p>​</p>
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
                    <p>​</p><p>​</p><p>​</p><p>​</p><p>​</p>
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
          </div>
        </div>

        {/* Sidebar */}
        <aside className="viewer-sidebar">
          <div className="sidebar-content">
            <div className="template-sidebar-header">
              <h2 className="template-sidebar-title">Car Rental Agreement Template</h2>

              <div className="template-sidebar-stats">
              <p className="sidebar-stat">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill="#242424" fillOpacity=".7" fillRule="evenodd" d="M7.119 11.768 14 9.39l-4.587 5.653 1.803 6.062L21.373 4.23 2.039 8l5.08 3.768Z" clipRule="evenodd"></path>
                </svg>
                Used <strong>21,312</strong> times
              </p>

              <p className="sidebar-stat">
                <span className="ai-badge">✨</span> AI assistant included
              </p>
              </div>
            </div>

            <button className="use-template-btn" onClick={onUseTemplate}>
              Use this template — free
            </button>

            {/* Rating Section */}
            <div className="rating-section">
              <p className="rating-title"><strong>Care to rate this template?</strong></p>
              <p>Your rating will help others.</p>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className={rating >= star ? 'star-active' : ''}>
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      onChange={() => setRating(star)}
                    />
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none">
                      <path
                        d="m15.521 22.088-.518-.317-.52.314-7.242 4.369 1.895-8.214.135-.584-.451-.394-6.398-5.591 8.402-.748.595-.053.235-.549 3.343-7.78 3.348 7.851.235.551.596.053 8.386.747-6.378 5.515-.455.394.134.586 1.896 8.273-7.238-4.423Z"
                        stroke={rating >= star ? '#FFD700' : '#ADADAD'}
                        strokeWidth="2"
                        fill={rating >= star ? '#FFD700' : 'none'}
                      />
                    </svg>
                  </label>
                ))}
              </div>
              {rating > 0 && <p className="rating-thanks">Thanks for your rate!</p>}
            </div>

          </div>
        </aside>
      </div>

      {/* Footer Sections */}
      <footer className="template-footer-sections">
        {/* Related Templates */}
        <section className="footer-section">
          <div className="container">
            <h2>Related templates</h2>
            <div className="templates-grid">
              <div className="template-card">
                <div className="template-card-cover">
                  <div className="template-card-image"></div>
                </div>
                <span className="template-badge">TOP 100</span>
                <h3>Car Lease Agreement Template</h3>
                <p>Your customers can decide to lease a car from anywhere...</p>
              </div>
              <div className="template-card">
                <div className="template-card-cover">
                  <div className="template-card-image"></div>
                </div>
                <span className="template-badge popular">POPULAR</span>
                <h3>Exclusivity Agreement Template</h3>
                <p>This exclusivity agreement template can be used by a vendor...</p>
              </div>
              <div className="template-card">
                <div className="template-card-cover">
                  <div className="template-card-image"></div>
                </div>
                <span className="template-badge">TOP 100</span>
                <h3>Mobile Application Development Agreement</h3>
                <p>App developers can use this mobile application...</p>
              </div>
              <div className="template-card">
                <div className="template-card-cover">
                  <div className="template-card-image"></div>
                </div>
                <h3>Royalty Agreement Template</h3>
                <p>This royalty agreement template governs the payment...</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="footer-section faq-section">
          <div className="container">
            <h2>Car Rental Agreement FAQ</h2>
            <div className="faq-items">
              <details className="faq-item">
                <summary>What is a vehicle rental agreement?</summary>
                <p>A vehicle rental agreement is a legal document made between the owner of the vehicle and the person renting the vehicle. It typically lays down conditions about the rental period, mileage, payment, fuel, condition of the vehicle, etc.</p>
              </details>
              <details className="faq-item">
                <summary>How do I write a car rental agreement?</summary>
                <p>Each rental agreement needs to have a few critical details, such as the name of the parties, rental term, the scope of use, fee, mileage, insurance, indemnification, etc. There are many templates available online that you can borrow from for comparison.</p>
              </details>
              <details className="faq-item">
                <summary>What type of contract is a conditional sale?</summary>
                <p>A conditional sale contract is the one wherein the buyer takes possession of the purchase, but the title of the purchase remains with the person who sold the product.</p>
              </details>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default TemplatePage
