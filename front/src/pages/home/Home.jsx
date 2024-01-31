import React from 'react'
import Navbar from '../../layout/components/Navbar'
import { Box, Card, Divider, Flex, Text } from '@chakra-ui/react'

export default function Home () {
  return (
    <Box>
      <Navbar />
      <Flex flexDir={'column'} justifyContent={'space-between'} w={'100%'} h={'100%'} p={8} gap={4}>
        <Card p={6} boxShadow={'0 0 10px #808080'}>
          <Text fontWeight={'700'} letterSpacing={1} textTransform={'capitalize'} fontSize={'x-large'}>Resumo financeiro</Text>
          <Divider />
          <Box mt={2} letterSpacing={1} justifyContent={'space-between'} bg={'gray.600'} p={2} rounded={'0.5rem'}>
            <Flex justifyContent={'space-between'} fontWeight={'600'}>
              <Text>Receitas</Text>
              <Text color={'green.400'} opacity={0.8}>R$1000,00</Text>
            </Flex>
            <Divider marginBlock={1}/>
            <Flex fontSize={'xx-small'} justifyContent={'space-between'} color={'gray.200'} textTransform={'uppercase'} opacity={0.6}>
              <Text >previsto</Text>
              <Text >R$1000,00</Text>
            </Flex>
          </Box>
          <Box mt={2} letterSpacing={1} justifyContent={'space-between'} bg={'gray.600'} p={2} rounded={'0.5rem'}>
            <Flex justifyContent={'space-between'} fontWeight={'600'}>
              <Text>Dispesas</Text>
              <Text color={'red.400'} opacity={0.8}>R$500,00</Text>
            </Flex>
            <Divider marginBlock={1} />
            <Flex fontSize={'xx-small'} letterSpacing={1} justifyContent={'space-between'} color={'gray.200'} textTransform={'uppercase'} opacity={0.6}>
              <Text >previsto</Text>
              <Text >R$550,00</Text>
            </Flex>
          </Box>
          <Box mt={2} letterSpacing={1} justifyContent={'space-between'} bg={'gray.600'} p={2} rounded={'0.5rem'}>
            <Flex justifyContent={'space-between'} fontWeight={'600'}>
              <Text>Cartões de Crédito</Text>
              <Text color={'yellow.400'} opacity={0.8}>R$250,00</Text>
            </Flex>
            <Divider marginBlock={1} />
            <Flex fontSize={'xx-small'} letterSpacing={1} justifyContent={'space-between'} color={'gray.200'} textTransform={'uppercase'} opacity={0.6}>
              <Text >previsão faturas a pagar</Text>
              <Text >R$300,00</Text>
            </Flex>
          </Box>
          <Box mt={2} letterSpacing={1} justifyContent={'space-between'} bg={'gray.600'} p={2} rounded={'0.5rem'}>
            <Flex justifyContent={'space-between'} fontWeight={'600'}>
              <Text>Resumo</Text>
              <Text >R$250,00</Text>
            </Flex>
            <Divider marginBlock={1} />
            <Flex fontSize={'xx-small'} letterSpacing={1} justifyContent={'space-between'} color={'gray.200'} textTransform={'uppercase'} opacity={0.6}>
              <Text >previsto</Text>
              <Text >R$150,00</Text>
            </Flex>
          </Box>
        </Card>
      </Flex>
    </Box>
  )
}
