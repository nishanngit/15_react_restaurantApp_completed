import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Cafe Tonico
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header