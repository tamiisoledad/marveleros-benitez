import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import NavBar from './NavBar';

const ItemListContainer = () => {
  const {id} = useParams();

  return (
    <>
      <NavBar/>
      <ItemList id={id}/>
    </>
  );
};

export default ItemListContainer;