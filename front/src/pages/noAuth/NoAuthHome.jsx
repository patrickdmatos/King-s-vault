import { Button, Heading, Image, Text, VStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import componentKey from '../../key/keyComponent'
import cofrepng from '../../assets/images/cofre.png'
import { useNavigate } from 'react-router-dom'

export default function NoAuthHome () {
  const { colorMode } = useColorMode()
  const navigate = useNavigate()

  return (
    <VStack key={componentKey} p={2} w={'100%'}>
      <Heading
        borderBottom={'1px solid #ccc'}
        color={colorMode === 'light' ? 'gray.700' : 'white'} mt={4} fontSize={26}>
        Welcome to the King´s Vault App
      </Heading>
      <Text fontWeight={'bold'}>Your finance control app</Text>
      <Image src={cofrepng} />
      <Button onClick={navigate('/login')}>
        Fazer Login
      </Button>
    </VStack>
  )
}
