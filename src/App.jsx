import React from 'react'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
        <div>
        <NavBar />
        <ItemListContainer saludo={'Bienvenido a mi e-commerce'}/>
        </div>
    </ChakraProvider>
  )
}

export default App