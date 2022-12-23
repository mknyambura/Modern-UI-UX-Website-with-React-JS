import React from 'react'

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

function Header() {
  return (
    <div className='header section-padding' id='home'>
      <div className="header-content">
        <h1 className="gradient-text">Let's Build Something Amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="header-content-input">
          <input type="email" placeholder="Your Email Address" name="" id="" />
          <button type="button">Get Started</button>
        </div>
        <div className="header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit the last 24 hours</p>
        </div>
        <div className="header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  )
}

export default Header