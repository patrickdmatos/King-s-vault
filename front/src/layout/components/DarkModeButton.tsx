import { Box, Button, useColorMode } from '@chakra-ui/react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { RiSunFoggyFill } from 'react-icons/ri'

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      {colorMode === 'light'
        ? (
        <Button
          onClick={toggleColorMode}
            bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
          _hover={{
            bg: `{colorMode === 'light' ? 'gray.200' : 'gray.600'}`
          }}>
            <BsMoonStarsFill fontSize={26} />
        </Button>
          )
        : (
          <Button
            onClick={toggleColorMode}
            bgGradient="linear(to-r, red.500, yellow.500)"
            _hover={{
              bgGradient: 'linear(to-r, gray.500, blue.800)'
            }}>
            <RiSunFoggyFill fontSize={26} />
          </Button>
          )}
    </Box>
  )
}

export default DarkModeButton
