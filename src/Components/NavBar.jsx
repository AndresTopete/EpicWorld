import React from 'react'
import CardWidget from './CardWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Box,
    Spacer,
    Image
  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navbar'>

      <Flex>
        <Link to={'/'}>
        <Box w='70px' h='10'>
           <Image src='src\assets\Epic World.png' alt='logo'/>
        </Box>
        </Link>
        <Spacer />
        <Box>
          <Menu>
          <MenuButton as={Button}>
              Productos
          </MenuButton>
          <MenuList>
              <MenuItem>Nintendo</MenuItem>
              <MenuItem>PlayStation</MenuItem>
              <MenuItem>Xbox</MenuItem>
          </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box w='180px' h='10'>
          <CardWidget/>
        </Box>
      </Flex>
            
    </div>
  )
}

export default NavBar

