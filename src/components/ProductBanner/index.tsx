// Vendors

// Components
import { Box, chakra } from '@chakra-ui/react'
import Image from 'next/image'

// Types
export type ProductBannerProps = {
  image: string
}

const ChakraNextImage = chakra(Image)

/*
|-----------------------------------------------------------------------------
| Component
|-----------------------------------------------------------------------------
|
|
*/

export const ProductBanner = (props: ProductBannerProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants
  |-----------------------------------------------------------------------------
  |
  |
  */
  const { image } = props

  /*
  |-----------------------------------------------------------------------------
  | States
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Functions
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Effects
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Memos
  |-----------------------------------------------------------------------------
  |
  |
  */

  /*
  |-----------------------------------------------------------------------------
  | Renders
  |-----------------------------------------------------------------------------
  |
  |
  */
  return (
    <Box position="absolute" w="100vw" h="50vh" top={0} zIndex={-1}>
      <Box
        w="100%"
        h="100%"
        position="relative"
        opacity={0.2}
        overflow="hidden"
      >
        <ChakraNextImage
          src={image}
          layout="fill"
          alt="banner image"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>
    </Box>
  )
}
