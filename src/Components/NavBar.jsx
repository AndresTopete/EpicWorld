import React from 'react'
import CardWidget from './CardWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    ChevronDownIcon
  } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div>
        Tienda
        <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Productos
        </MenuButton>
        <MenuList>
            <MenuItem>Nintendo</MenuItem>
            <MenuItem>PlayStation</MenuItem>
            <MenuItem>Xbox</MenuItem>
        </MenuList>
        </Menu>
        <CardWidget/>
    </div>
  )
}

export default NavBar