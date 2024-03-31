import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"


function SortSelector() {
      return (
        <>
            <Menu>
                  <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                    Order by: Relevance
                  </MenuButton>
                <MenuList>
                  <MenuItem>Relevance</MenuItem>
                  <MenuItem>Date Added</MenuItem>
                  <MenuItem>Name</MenuItem>
                </MenuList>
            </Menu>
        </>
  )
}

export default SortSelector