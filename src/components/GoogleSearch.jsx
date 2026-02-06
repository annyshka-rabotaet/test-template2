import React, { useState, useEffect, useRef } from 'react'
import './GoogleSearch.css'

const GoogleSearch = ({ onResultClick }) => {
  const [inputValue, setInputValue] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    setShowSuggestions(value.trim().toLowerCase().startsWith('c'))
  }

  const handleSuggestionClick = (query) => {
    setInputValue(query)
    setShowSuggestions(false)
    setShowResults(true)
  }

  const handleResultClick = () => {
    if (onResultClick) {
      onResultClick()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setShowSuggestions(false)
      setShowResults(true)
    }
  }

  if (showResults) {
    return (
      <div className="google-search-wrapper results-view">
        <div className="results-page">
          <header className="results-header">
            <div className="logo-small">
              <svg width="120" height="40" viewBox="0 0 732 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1_47)">
                  <path d="M189.626 80.579H108.659V104.671H166.088C163.255 138.462 135.22 152.874 108.764 152.874C74.9017 152.874 45.3555 126.16 45.3555 88.7205C45.3555 52.25 73.5232 24.168 108.83 24.168C136.076 24.168 152.132 41.5815 152.132 41.5815L168.959 24.1015C168.959 24.1015 147.351 0 107.965 0C57.809 0 19.013 42.446 19.013 88.293C19.013 133.218 55.5179 177.023 109.239 177.023C156.505 177.023 191.09 144.561 191.09 96.558C191.09 86.4215 189.626 80.5695 189.626 80.5695" fill="#4285F4"/>
                  <path d="M256.295 85.4714C272.637 85.4714 288.113 98.7239 288.113 120.07C288.113 140.961 272.703 154.584 256.219 154.584C238.109 154.584 223.821 140.049 223.821 119.909C223.821 100.196 237.938 85.4714 256.295 85.4714ZM255.962 63.1274C222.737 63.1274 198.923 89.1764 198.923 119.557C198.923 150.385 222.024 176.918 256.352 176.918C287.438 176.918 312.897 153.092 312.897 120.222C312.897 82.5359 283.274 63.1274 255.962 63.1274Z" fill="#EB4335"/>
                  <path d="M380.355 85.4714C396.687 85.4714 412.173 98.7239 412.173 120.07C412.173 140.961 396.753 154.584 380.269 154.584C362.169 154.584 347.881 140.049 347.881 119.909C347.881 100.196 361.998 85.4714 380.355 85.4714ZM380.022 63.1274C346.787 63.1274 322.983 89.1764 322.983 119.557C322.983 150.385 346.084 176.918 380.402 176.918C411.489 176.918 436.956 153.092 436.956 120.222C436.956 82.5359 407.344 63.1274 380.022 63.1274Z" fill="#FBBC05"/>
                  <path d="M503.901 85.4999C518.855 85.4999 534.208 98.2964 534.208 120.156C534.208 142.386 518.893 154.631 503.578 154.631C487.322 154.631 472.188 141.388 472.188 120.365C472.188 98.5244 487.892 85.4999 503.901 85.4999ZM501.696 63.1844C471.199 63.1844 447.224 89.9744 447.224 120.032C447.224 154.28 475.021 176.994 501.173 176.994C517.334 176.994 525.937 170.553 532.288 163.172V174.382C532.288 194.018 520.405 205.77 502.466 205.77C485.126 205.77 476.437 192.85 473.414 185.516L451.616 194.655C459.344 211.052 474.916 228.161 502.646 228.161C532.972 228.161 556.073 209.009 556.073 168.843V66.6139H532.288V76.2469C524.968 68.3429 514.976 63.1844 501.696 63.1844Z" fill="#4285F4"/>
                  <path d="M662.84 84.93C673.202 84.93 680.665 90.459 683.84 97.09L633.028 118.38C630.841 101.897 646.413 84.9395 662.84 84.9395V84.93ZM661.852 63.0515C633.085 63.0515 608.929 86.0035 608.929 119.871C608.929 155.705 635.851 176.966 664.618 176.966C688.622 176.966 703.357 163.79 712.15 151.991L692.539 138.909C687.443 146.823 678.944 154.565 664.732 154.565C648.78 154.565 641.441 145.806 636.907 137.323L712.987 105.669L709.042 96.3965C701.684 78.223 684.544 63.0515 661.852 63.0515Z" fill="#EB4335"/>
                  <path d="M572.662 173.584H597.645V5.89001H572.671L572.662 173.584Z" fill="#34A853"/>
                </g>
              </svg>
            </div>
            <div className="results-search">
              <input 
                className="results-input" 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="results-icons">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#5f6368">
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                <div className="results-divider"></div>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#5f6368">
                  <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21h2v-3.07A7 7 0 0 0 19 11z"/>
                </svg>
                <svg viewBox="0 -960 960 960" width="20" height="20" fill="#5f6368">
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
              </div>
            </div>
          </header>

          <nav className="tabs">
            <span>AI Mode</span>
            <span className="tab-active">All</span>
            <span>Images</span>
            <span>Videos</span>
            <span>News</span>
            <span>Forums</span>
            <span>More</span>
            <span>Tools</span>
          </nav>

          <div className="results-content" onClick={handleResultClick}>
            <section className="result-item">
              <div className="result-main">
                <div className="result-meta">
                  <span className="result-logo">pd</span>
                  <span className="result-link">PandaDoc</span>
                  <span className="result-breadcrumbs">https://www.pandadoc.com › Templates › Agreements</span>
                </div>
                <div className="result-title">
                  Free Car Rental Agreement Template for Download (Doc, ...)
                </div>
                <div className="result-snippet">
                  Protect you and your customers with this <strong>free car rental agreement template</strong>.
                  Create, send, and eSign documents in a flash.
                </div>
                <div className="result-rating">
                  <span>4,0</span>
                  <span className="stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="inactive">★</span>
                  </span>
                  <span>(86)</span>
                </div>
              </div>
            </section>

            <section className="result-item">
              <div className="result-main">
                <div className="result-meta">
                  <span className="result-logo">pd</span>
                  <span className="result-link">PandaDoc</span>
                  <span className="result-breadcrumbs">https://www.pandadoc.com › Templates › Agreements</span>
                </div>
                <div className="result-title">Car Rental Agreement Template (Free Download)</div>
                <div className="result-snippet">
                  Use this template to draft a clear rental agreement, define mileage limits, and protect
                  both parties with simple, ready-to-sign terms.
                </div>
                <div className="result-rating">
                  <span>4,5</span>
                  <span className="stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </span>
                  <span>(112)</span>
                </div>
              </div>
            </section>

            <section className="result-item">
              <div className="result-main">
                <div className="result-meta">
                  <span className="result-logo">pd</span>
                  <span className="result-link">PandaDoc</span>
                  <span className="result-breadcrumbs">https://www.pandadoc.com › Templates › Agreements</span>
                </div>
                <div className="result-title">Vehicle Rental Agreement Template</div>
                <div className="result-snippet">
                  Create a professional car rental contract in minutes. Customize insurance, payment,
                  and return conditions for your clients.
                </div>
                <div className="result-rating">
                  <span>4,2</span>
                  <span className="stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="inactive">★</span>
                  </span>
                  <span>(64)</span>
                </div>
              </div>
            </section>

            <section className="result-item">
              <div className="result-main">
                <div className="result-meta">
                  <span className="result-logo">pd</span>
                  <span className="result-link">PandaDoc</span>
                  <span className="result-breadcrumbs">https://www.pandadoc.com › Templates › Agreements</span>
                </div>
                <div className="result-title">Free Car Rental Contract Sample &amp; Template</div>
                <div className="result-snippet">
                  Download a free car rental agreement sample and edit it online. Send, sign, and track
                  in one place.
                </div>
                <div className="result-rating">
                  <span>4,1</span>
                  <span className="stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span className="inactive">★</span>
                  </span>
                  <span>(39)</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="google-search-wrapper">
      <main className="search-page">
        <div className="logo">
          <svg width="294" height="94" viewBox="0 0 732 228" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_47)">
              <path d="M189.626 80.579H108.659V104.671H166.088C163.255 138.462 135.22 152.874 108.764 152.874C74.9017 152.874 45.3555 126.16 45.3555 88.7205C45.3555 52.25 73.5232 24.168 108.83 24.168C136.076 24.168 152.132 41.5815 152.132 41.5815L168.959 24.1015C168.959 24.1015 147.351 0 107.965 0C57.809 0 19.013 42.446 19.013 88.293C19.013 133.218 55.5179 177.023 109.239 177.023C156.505 177.023 191.09 144.561 191.09 96.558C191.09 86.4215 189.626 80.5695 189.626 80.5695" fill="#4285F4"/>
              <path d="M256.295 85.4714C272.637 85.4714 288.113 98.7239 288.113 120.07C288.113 140.961 272.703 154.584 256.219 154.584C238.109 154.584 223.821 140.049 223.821 119.909C223.821 100.196 237.938 85.4714 256.295 85.4714ZM255.962 63.1274C222.737 63.1274 198.923 89.1764 198.923 119.557C198.923 150.385 222.024 176.918 256.352 176.918C287.438 176.918 312.897 153.092 312.897 120.222C312.897 82.5359 283.274 63.1274 255.962 63.1274Z" fill="#EB4335"/>
              <path d="M380.355 85.4714C396.687 85.4714 412.173 98.7239 412.173 120.07C412.173 140.961 396.753 154.584 380.269 154.584C362.169 154.584 347.881 140.049 347.881 119.909C347.881 100.196 361.998 85.4714 380.355 85.4714ZM380.022 63.1274C346.787 63.1274 322.983 89.1764 322.983 119.557C322.983 150.385 346.084 176.918 380.402 176.918C411.489 176.918 436.956 153.092 436.956 120.222C436.956 82.5359 407.344 63.1274 380.022 63.1274Z" fill="#FBBC05"/>
              <path d="M503.901 85.4999C518.855 85.4999 534.208 98.2964 534.208 120.156C534.208 142.386 518.893 154.631 503.578 154.631C487.322 154.631 472.188 141.388 472.188 120.365C472.188 98.5244 487.892 85.4999 503.901 85.4999ZM501.696 63.1844C471.199 63.1844 447.224 89.9744 447.224 120.032C447.224 154.28 475.021 176.994 501.173 176.994C517.334 176.994 525.937 170.553 532.288 163.172V174.382C532.288 194.018 520.405 205.77 502.466 205.77C485.126 205.77 476.437 192.85 473.414 185.516L451.616 194.655C459.344 211.052 474.916 228.161 502.646 228.161C532.972 228.161 556.073 209.009 556.073 168.843V66.6139H532.288V76.2469C524.968 68.3429 514.976 63.1844 501.696 63.1844Z" fill="#4285F4"/>
              <path d="M662.84 84.93C673.202 84.93 680.665 90.459 683.84 97.09L633.028 118.38C630.841 101.897 646.413 84.9395 662.84 84.9395V84.93ZM661.852 63.0515C633.085 63.0515 608.929 86.0035 608.929 119.871C608.929 155.705 635.851 176.966 664.618 176.966C688.622 176.966 703.357 163.79 712.15 151.991L692.539 138.909C687.443 146.823 678.944 154.565 664.732 154.565C648.78 154.565 641.441 145.806 636.907 137.323L712.987 105.669L709.042 96.3965C701.684 78.223 684.544 63.0515 661.852 63.0515Z" fill="#EB4335"/>
              <path d="M572.662 173.584H597.645V5.89001H572.671L572.662 173.584Z" fill="#34A853"/>
            </g>
          </svg>
        </div>

        <form className="search-wrapper" onSubmit={handleSubmit}>
          <svg className="search-icon" viewBox="0 -960 960 960" width="20" height="20" fill="#9aa0a6">
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
          </svg>
          <input
            ref={inputRef}
            className="search-input"
            type="text"
            placeholder="Search Google or type a URL"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
          <svg className="mic-icon" viewBox="0 0 24 24" width="20" height="20" fill="#9aa0a6">
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21h2v-3.07A7 7 0 0 0 19 11z"/>
          </svg>
          <button className="ai-mode" type="button">AI Mode</button>
          
          {showSuggestions && (
            <div className="suggestions visible">
              <div className="suggestion-item" onClick={() => handleSuggestionClick('car rental agreement')}>
                <svg className="suggestion-icon" viewBox="0 0 24 24" width="18" height="18" fill="#5f6369">
                  <path d="M12 8a1 1 0 0 1 1 1v3.5l2.5 1.5-.75 1.3-3.25-1.95V9a1 1 0 0 1 1-1zm0-6a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                </svg>
                <span>car rental agreement - Google Search</span>
              </div>
              <div className="suggestion-item" onClick={() => handleSuggestionClick('car rental agreement template')}>
                <svg className="suggestion-icon" viewBox="0 -960 960 960" width="18" height="18" fill="#5f6369">
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
                <span>car rental agreement <strong>template</strong></span>
              </div>
              <div className="suggestion-item" onClick={() => handleSuggestionClick('car rental agreement sample')}>
                <svg className="suggestion-icon" viewBox="0 -960 960 960" width="18" height="18" fill="#5f6369">
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
                <span>car rental agreement <strong>sample</strong></span>
              </div>
              <div className="suggestion-item" onClick={() => handleSuggestionClick('car rental agreement pdf')}>
                <svg className="suggestion-icon" viewBox="0 -960 960 960" width="18" height="18" fill="#5f6369">
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
                <span>car rental agreement <strong>pdf</strong></span>
              </div>
            </div>
          )}
        </form>

        <div className="buttons">
          <button className="button" type="button" onClick={() => setShowResults(true)}>Google Search</button>
          <button className="button" type="button">I'm Feeling Lucky</button>
        </div>

        <p className="helper">Type anything in the search bar and press Enter.</p>
      </main>
    </div>
  )
}

export default GoogleSearch
