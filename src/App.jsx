import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Welcome from './Components/Welcome'
import {Route, Routes} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './Components/ItemListContainer'


const App = () => {
  return (
    <>
    <ChakraProvider>
        <NavBar />
        <ItemListContainer/>
        <Routes>
          <Route exact path='/' element = {<Welcome/>}/>
        </Routes>
          
        <Footer />
    </ChakraProvider>
    </>
  )
}

export default App