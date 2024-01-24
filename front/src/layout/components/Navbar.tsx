import { Flex } from '@chakra-ui/react'
import Sidebar from './SideBar'

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
      </Flex>
    )
}
