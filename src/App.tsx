import { Box, Button, VStack, Text, Portal } from '@chakra-ui/react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleOnClick = () => setCount((prev) => prev + 1)

  return (
    <>
      <VStack>
        <Text>Main App flow</Text>
      </VStack>
      <Portal>
        <Box bg="green.400" px="8" py="10" my={10} mx={10} rounded="3xl">
          <VStack>
            <Text>Portal</Text>
            <Text>{count}</Text>
            <Button onClick={handleOnClick}>Increase</Button>
          </VStack>
        </Box>
      </Portal>
    </>
  )
}

export default App
