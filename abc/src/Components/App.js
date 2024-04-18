import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='header'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

         <Container className='Card_bloc'>
            <Card>
            <Card.Img src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is Card 1.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
            <Card.Img src="https://images.pexels.com/photos/1938348/pexels-photo-1938348.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                This is Card 2.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
            <Card.Img src="https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                This is Card 3.
                </Card.Text>
              </Card.Body>
            </Card>
         </Container>
    </div>
  )
}

export default App
