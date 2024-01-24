import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
import code from '../../assets/code.png'
import { TbDoorExit } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'
import DarkModeButton from './DarkModeButton'

export default function Sidebar () {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()

  const sair = () => {
    localStorage.removeItem('KOA')
    navigate('/KingSafes')
    onClose()
  }

  return (
    <Box>
      <Button colorScheme={'transparent'} onClick={onOpen}>
            <Image ml={-4} mb={-4} w="100px" src={code} alt="logo" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mr={'85%'} />
          <DrawerHeader mt={4} display={'flex'} alignItems={'center'}>
            <Flex
              ml={3} mt={3} gap={5} alignItems={'flex-start'} p={2} w={"100%"} borderRadius={"md"}
              color={colorMode === 'light' ? 'black' : 'white'} bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
              >
              <Avatar size='md' name='Patrick Reis' src='https://media.licdn.com/dms/image/D4D03AQHkOrzKkqjTsQ/profile-displayphoto-shrink_800_800/0/1676591437408?e=1707350400&v=beta&t=tKLO7NqDWcvJ4hUci5OVQbo3RyLbcwDMlmvmacsN1Bk' />
              <Box>
              <Text fontSize={16}>Patrick M Reis</Text>
              <Text fontSize={12}>Sem contas pendentes.</Text>
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
              >Sair <TbDoorExit fontSize={26} /></Button>
              <DarkModeButton />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
