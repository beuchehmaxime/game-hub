import { Box, HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputs from "./SearchInputs";

interface Props {
    onSearch: (searchText: string) => void;
}

function Navbar({onSearch}:Props) {
  return (
    <HStack justifyContent="space-between" paddingY='20px' paddingX='30px'>
      <Image src={logo} boxSize='60px ' />
      <SearchInputs onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
