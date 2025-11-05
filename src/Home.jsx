import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';



export const Home = () => {
    const onbtnclick=()=>{
        window.location='/about'
    }
    const homeDes={
        minHeight:'90vh',
        textAlign:'center',
        marginTop:'200px'
    }
  return (
   <>
   <Container>
    <div style={homeDes}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4BY12d47WF9whSS59HVvTXTcXYOzPMT5WQ&s" rounded />
        <h1 style={{color:'aqua',fontSize:'50px',fontWeight:'bolder'}}>REACT</h1>
        <span style={{fontSize:'30px',color:'black'}}>Learn Once,write Anywhere</span><br />  <br />  
         <Button variant="primary" size="lg" onClick={onbtnclick}>
          Learn More
        </Button>
    </div>
   </Container>
   </>
  )
}
