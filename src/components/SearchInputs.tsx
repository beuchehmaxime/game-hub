import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { useRef } from "react";
import { BsSearch } from "react-icons/bs"

interface Props {
    onSearch: (searchText: string) => void;
}

function SearchInputs({onSearch}:Props) {
   const ref =  useRef<HTMLInputElement>(null);
  return (
      <form onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
              console.log(ref.current.value);
              onSearch(ref.current.value)
          }
      }}>
    <InputGroup>
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant='filled'/>
        <InputRightElement children={<BsSearch />} />
      </InputGroup>
     </form>
  )
}

export default SearchInputs
