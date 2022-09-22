import React, { useEffect, useState } from 'react';
import Item from './Item';
import '../styles/ItemCount.css'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const products =[
  {
    id: 1,
    title: 'IronMan',
    description: 'Pelicula',
    price: 500,
    image: 'https://http2.mlstatic.com/D_NQ_NP_857847-MLA48404780463_122021-O.webp'
  },
  {
    id: 2,
    title: 'CapitanAmerica',
    description: 'Disfraz!!!',
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

const ItemList = ({ id }) => {
  const [listProducts, setListProducts] = useState([])

  const getProducts = async (id) => {
    setTimeout(() => {
      if (id) {
        const newProducts = products.filter((p) => p.title.toLowerCase() === id.toLowerCase());

        setListProducts(newProducts);
      } else {
        setListProducts(products)
      }
    }, 2000);
  }

  useEffect(() => {
    setListProducts([])
    getProducts(id);

    const db = getFirestore();

    const itemCollection = collection(db, 'items');
    getDocs(itemCollection).then((snapshot) => {
      listProducts.push(snapshot.docs.map((doc) => (
        {id: doc.id, ...doc.data()}
      )))
    })
  }, [id])

  return (
    <>
      {!listProducts.length && <div>Cargando...</div>}
      <div className='list'>
      {listProducts.length && listProducts.map((p) => (
       <Item key={p.id} image={p.image} title={p.title} description={p.description} price={p.price} id={p.id}/>
      ))}
      </div>
    </>
  )
}

export default ItemList;
