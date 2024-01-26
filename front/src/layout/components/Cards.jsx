import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'

export function CardMenu () {
  const { colorMode } = useColorMode()
  return (
    <Box w={'100%'} h={'fit-content'} boxShadow={'#404040 0px 0px 15px'} paddingBlock={4} rounded={6} bg={colorMode === 'light' ? 'gray.100' : 'gray.600'} color={colorMode === 'light' ? 'black' : 'white'}>
      <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid gray'} paddingInline={4} paddingBottom={4}>
        <Text fontWeight={'800'} fontSize={'xl'} textTransform={'uppercase'}>Balanço geral</Text>
        <Text fontWeight={'800'} fontSize={'28px'}><CiMenuKebab /></Text>
      </Flex>
      <Box pt={2} fontWeight={400}>
        <Flex textTransform={'uppercase'} justifyContent={'space-between'} mb={4} p={1} >
          <Text>receita</Text>
          <Text>R$1.000,00</Text>
        </Flex>
        <Flex textTransform={'uppercase'} justifyContent={'space-between'} mb={4} p={1} >
          <Text>dispesa</Text>
          <Text>R$1.000,00</Text>
        </Flex>
        <Flex textTransform={'uppercase'} justifyContent={'space-between'} mb={4} p={1} >
          <Text>cartão de credito</Text>
          <Text>R$1.000,00</Text>
        </Flex>
        <Flex textTransform={'uppercase'} p={1} pt={6} borderTop={'1px solid gray'} fontWeight={700} justifyContent={'space-between'} mb={4}>
          <Text>cartão de credito</Text>
          <Text>R$3.000,00</Text>
        </Flex>
      </Box>
    </Box>
  )
}

export function CardCreditcards () {
  const { colorMode } = useColorMode()
  return (
    <Box w={'100%'} h={'fit-content'} boxShadow={'#404040 0px 0px 15px'} paddingBlock={4} rounded={6} bg={colorMode === 'light' ? 'gray.100' : 'gray.600'} color={colorMode === 'light' ? 'black' : 'white'}>
      <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'} borderBottom={'1px solid gray'} paddingInline={4} paddingBottom={4}>
        <Text fontWeight={'800'} fontSize={'xl'} textTransform={'uppercase'}>Balanço geral</Text>
        <Text fontWeight={'800'} fontSize={'28px'}><CiMenuKebab /></Text>
      </Flex>
      <Box pt={2} fontWeight={400}>
        <Flex textTransform={'uppercase'} justifyContent={'space-between'} mb={4} p={1} >
          <Text>Cartão 1</Text>
          <Box>
          <Text>R$1.000,00</Text>
          <Text fontSize={12}>R$327,00</Text>
          </Box>
        </Flex>
        <Flex textTransform={'uppercase'} justifyContent={'space-between'} mb={4} p={1} >
          <Text>Cartão 2</Text>
          <Box>
          <Text>R$1.000,00</Text>
          <Text fontSize={12}>R$500,00</Text>
          </Box>
        </Flex>
        <Flex textTransform={'uppercase'} justifyContent={'space-between'} mb={4} p={1} >
          <Text>Cartão 3</Text>
          <Box>
          <Text>R$1.000,00</Text>
          <Text fontSize={12}>R$1.250,00</Text>
          </Box>
        </Flex>
        <Flex textTransform={'uppercase'} p={1} pt={6} borderTop={'1px solid gray'} fontWeight={700} justifyContent={'space-between'} mb={4}>
          <Text>cartão de credito</Text>
          <Text>R$3.000,00</Text>
        </Flex>
      </Box>
    </Box>
  )
}
