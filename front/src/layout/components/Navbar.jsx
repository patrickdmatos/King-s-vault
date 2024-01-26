import { Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './SideBar'
import { verificarChave } from '../../auth/verificaChaveDeAutorizacao'
import NaoAutorizado401 from '../../pages/errorsPages/NaoAutorizado401'

export default function Navbar () {
  const { colorMode } = useColorMode()
  if (verificarChave('TESTE')) {
    return (
      <Flex
        h={20}
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        boxShadow="md"
        color={colorMode === 'light' ? 'black' : 'white'}
        bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      >
        <Sidebar />
      </Flex>
    )
  } else {
    return <NaoAutorizado401 />
  }
}
