import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
   <>
    <div id='contact' className='contact-section'>
    <h1>Contact Us</h1>
    <ul className='contact-information'>
      <li><a href='https://www.facebook.com/'>Facebook: Fruit Source</a></li>
      <li>Contact Number(PH): 123-456-7890</li>
      <li>Email: JohnDoe@email.com</li>    
    </ul>
    </div>
   </>
  )
}

export default Footer