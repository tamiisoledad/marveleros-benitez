import React, { useEffect, useState } from 'react';
import Item from './Item';
import '../styles/ItemCount.css'


const products =[
  {
    id: 1,
    title: 'IronMan',
    description: 'Juguete super vendido',
    price: 500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_857847-MLA48404780463_122021-O.webp'
  },
  {
    id: 2,
    title: 'Capitan America',
    description: 'Juguete super vendido',
    price: 300,
    image: 'https://http2.mlstatic.com/D_NQ_NP_632516-MLA49389975458_032022-O.webp'
  },
  {
    id: 3,
    title: 'Spiderman',
    description: 'Juguete super vendido',
    price: 800,
    image: 'https://http2.mlstatic.com/D_NQ_NP_658757-MLA50820783045_072022-O.webp'
  }
]

const ItemList = () => {
  const [listProducts, setListProducts] = useState([])

  const getProducts = async () => {
    setTimeout(() => setListProducts(products), 2000);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      {!listProducts.length && <div>Cargando...</div>}
      <div className='list'>
      {listProducts.length && listProducts.map((p) => (
       <Item key={p.id} image={p.image} title={p.title} description={p.description} price={p.price}/>
      ))}
      </div>
    </>
  )
}

export default ItemList;
