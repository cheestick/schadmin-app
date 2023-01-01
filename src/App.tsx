import { Box, Button, VStack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleOnClick = () => setCount((prev) => prev + 1)

  return (
    <>
      <Box>
        <VStack>
          <Text>{count}</Text>
          <Button onClick={handleOnClick}>Increase</Button>
        </VStack>
      </Box>
    </>
  )
}

export default App
