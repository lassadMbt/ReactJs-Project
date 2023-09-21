import React from 'react';// Import React library
import 'bootstrap/dist/css/bootstrap.min.css';// Import Bootstrap CSS
import { Navbar, Container, Nav, Row, Col, Card } from 'react-bootstrap';// Import specific components from react-bootstrap


function App() {
  return (
    <div className='App'>

      {/*NavBar  */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Mrabet</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>

        {/* the header */}
        <h1 className="mt-5">Welcome to MY App</h1>


{/* the 3 cards */}
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>This is the content of Card 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>This is the content of Card 2.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>This is the content of Card 3.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
                  </Row>
      </Container>
    </div>
  );
}

export default App;
