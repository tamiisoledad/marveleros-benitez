import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../styles/ItemCount.css'
import ItemCount from './ItemCount';

const ItemDetail = ({ title, description, price, image}) => {
  return (
    <>
      <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <ItemCount stock={5} initial={1}/>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail;