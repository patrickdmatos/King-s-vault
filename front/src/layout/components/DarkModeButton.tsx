import { Box, Button, useColorMode } from '@chakra-ui/react'
import { BsMoon, BsSun } from 'react-icons/bs'

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      {colorMode === 'light'
        ? (
          <Button
            onClick={toggleColorMode}
            bg="gray.300"
            _hover={{
              bgGradient: 'linear(to-r, blue.700, purple.800)',
              color: 'white'
            }}>
            <BsMoon fontSize={26} />
          </Button>
        )
        : (
          <Button
            onClick={toggleColorMode}
            bg="gray.600"
            _hover={{
              bgGradient: 'linear(to-r, red.500, yellow.500)'
            }}>
            <BsSun fontSize={26} />
          </Button>
        )}
    </Box>
  )
}

export default DarkModeButton
