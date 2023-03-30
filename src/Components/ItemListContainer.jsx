import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import Data  from '../Data.json'

const ItemListContainer = () => {

const [producto, setProducto] = useState([]);

useEffect(() => {

async function fetchData () {
  try{
    const respuesta = await fetch (Data);
    const datos = await respuesta.json();
    setProducto(Data);
  } catch (error) {
    console.log('Error al cargar datos')
  }  
};
fetchData();
}), []; 

  return (
    <>
        {console.log(Data)}
        <h1>ContenedorItemList</h1>
        <ItemList prod = {Data}/>
    </>
  )
}

export default ItemListContainer

