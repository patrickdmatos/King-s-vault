import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text, Wrap, WrapItem, useColorMode, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import code from '../../assets/code.png'
import { GiExitDoor } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import DarkModeButton from './DarkModeButton'

export default function Sidebar () {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const { colorMode } = useColorMode()

  const sair = () => {
    localStorage.removeItem('KOA')
    navigate('/KingSafes')
    onClose()
  }

  return (
    <Box>
      <Button ref={btnRef} colorScheme={'transparent'} onClick={onOpen}>
            <Image ml={-4} mb={-4} w="100px" src={code} alt="logo" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mr={'85%'} />
          <DrawerHeader mt={4} display={'flex'} alignItems={'center'}>
            <Flex
              ml={3} mt={3} gap={5} alignItems={'flex-start'} p={2} w={"100%"} borderRadius={"md"}
              color={colorMode === 'light' ? 'black' : 'white'} bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
              >
              <Avatar size='md' name='Ryan Florence' src='https://media.licdn.com/dms/image/D4D03AQHkOrzKkqjTsQ/profile-displayphoto-shrink_800_800/0/1676591437408?e=1707350400&v=beta&t=tKLO7NqDWcvJ4hUci5OVQbo3RyLbcwDMlmvmacsN1Bk' />
              <Box>
              <Text fontSize={14}>Patrick M Reis</Text>
              <Text fontSize={10}>DEV FULLSTACK JR.</Text>
              </Box>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
          </DrawerBody>

          <DrawerFooter>
            <Flex gap={4} mr={-4}>
              <Button
                fontSize={20}
                gap={2}
                onClick={sair}
                mb={-2}
                color={'white'}
                bgGradient={"linear(to-r, purple.500, purple.800)"}
                _hover={{
                  bgGradient: 'linear(to-r, purple.600, purple.900)'
                }}
              >Sair <GiExitDoor fontSize={26} /></Button>
              <DarkModeButton />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
