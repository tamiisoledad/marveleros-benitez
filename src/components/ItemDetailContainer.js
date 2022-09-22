import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import NavBar from './NavBar';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const products = [
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

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  const getItem = async () => {
    setTimeout(() => {
      const product = products.find((p) => p.id === +id);
      setItem(product)
    }, 2000);
  }

  useEffect(() => {
    getItem()
    const db = getFirestore();

    const biciRef = doc(db, 'items', 'wWQTlRFUTxYSMemhRi8q');
    getDoc(biciRef).then((snapshot) => {
      if (snapshot.exists()){
        setItem({id: snapshot.id, ...snapshot.data()});
      }
    })
  }, [])
  return (
    <>
      <NavBar/>
      {item && <ItemDetail item={item}/>}
    </>
  );
};

export default ItemDetailContainer;