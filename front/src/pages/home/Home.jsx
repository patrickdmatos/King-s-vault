import React from 'react'
import Navbar from '../../layout/components/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import { CardMenu, CardCreditcards } from '../../layout/components/Cards'

export default function Home () {
  return (
    <Box>
      <Navbar />
      <Flex flexDir={'column'} justifyContent={'space-between'} w={'100%'} h={'100%'} p={8} gap={4}>
        <CardMenu />
        <CardCreditcards />
      </Flex>
    </Box>
  )
}
