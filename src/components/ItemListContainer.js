import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = () => {
  return (
    <>
      <h1>ECOMMERCE EN DESARROLLO</h1>
      <ItemCount stock={5} initial={1}/>
    </>
  );
};

export default ItemListContainer;