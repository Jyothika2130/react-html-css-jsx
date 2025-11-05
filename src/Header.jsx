import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  const headsty={
     backgroundImage: "linear-gradient(to right,rgb(56, 42, 42),rgb(127, 122, 122))"
  }
  return (
<>
 <Navbar expand="lg" style={headsty}>
      <Container>
        <Navbar.Brand href="#home" style={{color:'aqua',fontSize:'50px',fontWeight:'bolder'}}>React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-light'>
          <Nav className="ms-auto">
            <Link style={{textDecoration:'none',color:'white',marginRight:'50px',fontSize:'25px'}} to={'/'}>Home</Link>
             <Link  style={{textDecoration:'none',color:'white',marginRight:'50px',fontSize:'25px'}} to={'/about'}>About</Link>
              <Link style={{textDecoration:'none',color:'white',marginRight:'50px',fontSize:'25px'}} to={'/tutorial'}>Tutorial</Link>
               <Link style={{textDecoration:'none',color:'white',marginRight:'50px',fontSize:'25px'}} to={'/Example'}>Example</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  )
}

export default Header