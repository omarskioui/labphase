import React from 'react'
import  { useState } from 'react'
function Contact() {
  
    const [show, setShow] = useState(false)
  const handleshow = () => setShow(true)

  return (
  <main style={{paddingTop:"200px"}} className="contact-page">
    <div className="container">
      <h1 className="page-title">Contact Us</h1>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-phone" />
            <h3>Phone</h3>
            <p>+216 00 000 000</p>
            <p>+216 00 000 000</p>
          </div>
          <div className="info-card">
            <i className="fas fa-envelope" />
            <h3>Email</h3>
            <p>
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="f39a9d959cb3968b929e839f96dd909c9e"
              >
                [email&nbsp;protected]
              </a>
            </p>
            <p>
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="0d7e787d7d627f794d68756c607d6168236e6260"
              >
                [email&nbsp;protected]
              </a>
            </p>
          </div>
          <div className="info-card">
            <i className="fas fa-map-marker-alt" />
            <h3>Location</h3>
            <p>123 Business Street</p>
            <p>Tunis,Tunisia</p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form id="contactForm">
            <div className="form-group">
              <input placeholder='Your Name' type="text" id="name" required="" />
             
            </div>
            <div className="form-group">
              <input placeholder='Your Email' type="email" id="email" required="" />
              
            </div>
            <div className="form-group">
              <textarea placeholder='Your Message' id="message" required="" defaultValue={""} />
              
            </div>
            <button onClick={handleshow} type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="map-container">
      <iframe
      id='map'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.41060509716!2d10.060876000792609!3d36.79499200037431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1739875250776!5m2!1sfr!2stn"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </div>
  </main>


   
  )
}

export default Contact