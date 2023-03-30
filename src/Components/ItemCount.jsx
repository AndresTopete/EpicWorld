import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
  const [contador, setContador] = useState(1) 

    return (
    <div>  
        <button onClick={()=>{setContador(contador+1)}}>+</button>
        <p>{contador}</p>
        <button onClick={()=>{setContador(contador-1)}}>-</button>
    </div>
  )
}

export default ItemCount