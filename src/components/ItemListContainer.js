import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <>
      <h1>ECOMMERCE EN DESARROLLO</h1>
      <ItemList/>
      {/* <ItemCount stock={5} initial={1}/> */}
    </>
  );
};

export default ItemListContainer;