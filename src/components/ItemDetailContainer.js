import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const product = {
  id: 1,
  title: 'IronMan',
  description: 'Juguete super vendido',
  price: 500,
  image: 'https://http2.mlstatic.com/D_NQ_NP_857847-MLA48404780463_122021-O.webp'
}

const ItemDetailContainer = () => {
  const [item, setItem] = useState('');

  const getItem = async () => {
    setTimeout(() => setItem(product), 2000);
  }

  useEffect(() => {
    getItem()
  }, [])
  return (
    <>
      <ItemDetail item={item}/>
    </>
  );
};

export default ItemDetailContainer;