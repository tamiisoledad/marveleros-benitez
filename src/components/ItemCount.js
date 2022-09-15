import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import '../styles/ItemCount.css'
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const ItemCount = ({ initial, stock, product }) => {
  const [count, setCount] = useState(initial);
  const [disable, setDisable] = useState(false);
  const { addItem } = useContext(CartContext);

  const changeCount = (value) => {
    if (count >= stock && value === 1) return setDisable(true);
    if (count === 0 && value === -1) return setDisable(true);

    setCount(count + value)
    setDisable(false)
  }

  const onAdd = () => {
    addItem(product)
  }

  return (
    <>
      <div className='d-flex p-2'>
        <Button onClick={() => changeCount(-1)} variant="outline-info">-</Button>
        <Form.Control className='w-25 p-2 arrow' value={count} type="number"/>
        <Button onClick={() => changeCount(1)} variant="outline-info">+</Button>
      </div>
      <Button
        style={{margin: '0 35px'}}
        onClick={onAdd}
        disabled={disable}
        variant="primary"
        size="lg"
        >
          Agregar al carrito
      </Button>
      <Link to='/cart'>Terminar compra</Link>
    </>
  );
};

export default ItemCount;