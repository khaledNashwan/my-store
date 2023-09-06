import React from 'react'
import { Card } from 'react-bootstrap';
import './home.css'

const CardModel = ({icone , Header}) => {
  return (
<Card className='d-flex  flex-column justify-content-center align-items-center' style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title className='text-center icon__card fs-2'>{icone}</Card.Title>
        <Card.Title className='text-center icon__title'>
            {Header}
        </Card.Title>
      </Card.Body>
    </Card>
  );
  
}

export default CardModel