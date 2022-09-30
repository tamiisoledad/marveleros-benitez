import React from 'react';
import { useCart } from './CartContext';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { productsCart, removeItem } = useCart();
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
    { productsCart ? productsCart.map((p) => (
      <tbody>
        <tr>
          <td>{p.title}</td>
          <td>{p.quantity}</td>
          <td>{p.price * p.quantity}</td>
          <td><button onClick={()=> removeItem(p.id)}>Eliminar</button></td>
        </tr>
    </tbody>
    ))  : <h2>No hay productos en el carrito, volver al <Link to='/'>Home</Link></h2>}
    </Table>
  )
}

export default Cart;
