import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"


function SearchInputs() {
  return (
      <InputGroup>
        <Input borderRadius={20} placeholder="Search games..." variant='filled'/>
        <InputRightElement children={<BsSearch />} />
      </InputGroup>
  )
}

export default SearchInputs
