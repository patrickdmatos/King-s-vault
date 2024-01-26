import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text, Wrap, WrapItem, useColorMode, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { GiExitDoor } from 'react-icons/gi'
import { CiMenuKebab } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import DarkModeButton from './DarkModeButton'

export default function Sidebar () {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { colorMode } = useColorMode()

  const sair = () => {
    localStorage.removeItem('TESTE')
    navigate('/KingsVault')
    onClose()
  }

  return (
    <Box>
      <Button fontSize={26} ref={btnRef} colorScheme='transparent' color={colorMode === 'light' ? 'black' : 'white'} onClick={onOpen}>
        <CiMenuKebab />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg={colorMode === 'light' ? 'gray.200' : 'gray.700'} p={'none'} display={'flex'} alignItems={'center'}>
          <DrawerCloseButton color={colorMode === 'light' ? 'gray.400' : 'gray.500'}/>
            <Wrap ml={4} mt={6} w={'100%'} p={'none'}>
              <WrapItem w={'100%'} rounded={'0.5rem'}>
                <Avatar size='md' name='Claudemar Silveira' src='https://media.licdn.com/dms/image/D4D03AQHkOrzKkqjTsQ/profile-displayphoto-shrink_800_800/0/1676591437408?e=1707350400&v=beta&t=tKLO7NqDWcvJ4hUci5OVQbo3RyLbcwDMlmvmacsN1Bk' />
                <Flex
                  ml={2} flexDir={'column'}
                  alignItems={'flex-start'}
                  color={colorMode === 'light' ? 'black' : 'white'}>
                  <Text fontSize={16}>Claudemar Silveira</Text>
                  <Text fontSize={12}>email@gmail.com</Text>
                </Flex>
              </WrapItem>
            </Wrap>
          </DrawerHeader>

          <DrawerBody bg={colorMode === 'light' ? 'white' : 'gray.800'}>
          </DrawerBody>

          <DrawerFooter bg={colorMode === 'light' ? 'white' : 'gray.800'}>
            <Flex gap={4} mr={-4}>
              <Button
                fontSize={20}
                gap={2}
                onClick={sair}
                mb={-2}
                color={colorMode === 'light' ? 'black' : 'white'}
                bg={colorMode === 'light' ? 'gray.500' : 'blue.800'}
                _hover={colorMode === 'light' ? { bg: 'gray.400' } : { bg: 'blue.700' }}
              >Sair <GiExitDoor fontSize={26} /></Button>
              <DarkModeButton />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
