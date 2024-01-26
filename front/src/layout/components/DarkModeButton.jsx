import { Box, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import componentKey from '../../key/keyComponent'
import { BsMoonStarsFill } from 'react-icons/bs'
import { RiSunFoggyFill } from 'react-icons/ri'

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box key={componentKey}>
      {colorMode === 'light'
        ? (
        <Button
          onClick={toggleColorMode}
          bgGradient="linear(to-r, purple.800, blue.700)"
          _hover={{
            bgGradient: 'linear(to-r, purple.600, blue.500)'
          }}>
            <BsMoonStarsFill fontSize={26} />
        </Button>
          )
        : (
          <Button
            onClick={toggleColorMode}
            bgGradient="linear(to-r, orange.500, red.600)"
            _hover={{
              bgGradient: 'linear(to-r, orange.400, red.500)'
            }}>
            <RiSunFoggyFill fontSize={26} />
          </Button>
          )}
    </Box>
  )
}

export default DarkModeButton
