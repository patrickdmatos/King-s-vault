import { Flex, Image } from '@chakra-ui/react'
import Sidebar from './SideBar'
import code from '../../assets/code.png'

export default function Navbar () {
    return (
      <Flex
        h={20}
        as={"nav"}
        align={"center"}
        justify={"space-between"}
        padding={"1rem"}
        boxShadow={"md"}
        borderBottom={"1px solid gray"}
        color={"white"}
      >
        <Sidebar />
        <Image ml={-4} mb={-4} w="100px" src={code} alt="logo" />
      </Flex>
    )
}
