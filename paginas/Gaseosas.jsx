import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Gaseosas = () => {
  return (
    <div>
        <h1>Gaseosas</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/postobon uva.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Gaseosas