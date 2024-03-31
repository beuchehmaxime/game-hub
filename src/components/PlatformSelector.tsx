import { Button, Menu, MenuButton, MenuItem, MenuList, Skeleton } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../customhooks/usePlatforms"
import { Platform } from "../customhooks/useGames";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}


function PlatformSelector({onSelectPlatform, selectedPlatform}:Props) {
    const { data, errors, isLoading } = usePlatforms();
    if (errors) return null;
    if (isLoading) return <Skeleton height={'30px'} width={'150px'} />;
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform ? selectedPlatform.name : 'Filter By Platform'}</MenuButton>
                <MenuList>
                    {data.map(platform =>
                        <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                        </MenuItem>)}
                </MenuList>
            </Menu>
        </>
  )
}

export default PlatformSelector
