import { Box, HStack, List, ListItem, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"


function GenreSkeleton() {
  return (
  <Box padding='0' margin='10px' boxShadow='lg'>
      <HStack>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
    </HStack>
  </Box>
  )
}

export default GenreSkeleton
