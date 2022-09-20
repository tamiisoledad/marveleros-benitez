import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../styles/ItemCount.css'
import ItemCount from './ItemCount';

const ItemDetail = (props) => {
  return (
    <>
      <Card style={{ width: '40rem', margin: '0 auto'}}>
      <Card.Img variant="top" className='w-50 m-auto' src={props.item.image} />
      <Card.Body className='m-auto'>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>
          {props.item.description}
        </Card.Text>
        <Card.Text>
          $ {props.item.price}
        </Card.Text>
        <ItemCount stock={5} initial={1} product={{
          title: props.title,
          price: props.price,
          description: props.description,
          image: props.image,
          id: props.id
        }}/>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail;