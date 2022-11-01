import { Box, Grid, Flex, Image, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../api/getProducts'
import { Contador } from '../components/Contador'

const ProductDetailContainer = () => {
  const productId = useParams().productId
  const [product, setProduct] = useState(null)

  useEffect(() => {
    setProduct(getProductsById(productId))
  }, [productId])

  return (
    <>
      {product ? (
        <Flex direction='column' align='center' justify='center' h='90vh'>
          <Grid templateRows='1fr'>
            <Image
              src={product.img}
              alt='ropa'
              w={['300px', '300px', '300px', '400px']}
              h={['350px', '350px', '350px', '450px']}
              borderRadius='4px'
            />

            <Flex
              direction='column'
              m='0 5px'
              fontSize='20px'
              fontWeight='bold'
            >
              <Flex justify='space-between' mt='10px' mb='0'>
                <Box>{product.name}</Box>
                <Box>{product.price}</Box>
              </Flex>
              <Box fontSize='20px' mb='8px' color='#525151' fontWeight='normal'>
                {product.category}
              </Box>
              <Contador />

              <Flex justify='center' margin={5}>
                <Button w='80%' textAlign='center'>
                  Añadir al carrito
                </Button>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      ) : (
        <Box>...</Box>
      )}
    </>
  )
}

export default ProductDetailContainer
