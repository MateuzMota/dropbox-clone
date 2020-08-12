import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {

  function handleToggle() {
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return(
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        
        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>

      <Form>
        <span className="title">Sign up</span>
        <span className="subtitle">fill out the form below</span>

        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Passoword"/>

        <button>Sign up</button>

        <span className="terms">
        This page is protected by reCAPTCHA, and subject to the Google Privacy Policy and Terms of service.
        </span>
      </Form>
    </Container>
  );
}

export default MenuForm;