import React from 'react'
import Item from './Item'

const ItemList = ({prod}) => {
  return (
    <>
         {prod?.map(({producto}) => {
            <Item 
            key = {producto.id}
            nombre = {producto.nombre}
            precio = {producto.precio}
            />
          })
          } 
    </>
  )
}

export default ItemList