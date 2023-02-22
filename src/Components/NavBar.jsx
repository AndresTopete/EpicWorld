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
    Spacer
  } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div>
       <Flex>
            <Box p='4'>
            Logo
            </Box>
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
            <Box p='4'>
            <CardWidget/>
            </Box>
        </Flex>
        
    </div>
  )
}

export default NavBar

