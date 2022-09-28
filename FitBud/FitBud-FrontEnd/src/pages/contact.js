import React from 'react';
import ContactStyle from '../styles/contact.style.js';

const Contacts = () => {
  return (
    <ContactStyle>
      <div className="contact">
        <header className="contact-header">
          <h1>Contact Us</h1>
          <h2>Email:</h2>
          <p>austinsohn@csu.fullerton.edu</p>
          <p>josearce@csu.fullerton.edu</p>
          <p>pgupta24@csu.fullerton.edu</p>
        </header>
     </div>
    </ContactStyle>
  );
};

export default Contacts;