import {
  Box,
  Button,
  VStack,
  Text,
  Portal,
  Fade,
  useDisclosure,
  Slide,
  SlideFade,
  Collapse,
} from '@chakra-ui/react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const { isOpen, onToggle } = useDisclosure()

  const handleOnClick = () => setCount((prev) => prev + 1)

  return (
    <>
      <VStack>
        <Text onClick={onToggle}>Main App flow</Text>
      </VStack>
      <Portal>
        <Collapse in={isOpen} animateOpacity>
          <Box bg="green.400" px="8" py="10" my={10} mx={10} rounded="3xl">
            <VStack>
              <Text>Portal</Text>
              <Text>{count}</Text>
              <Button onClick={handleOnClick}>Increase</Button>
            </VStack>
          </Box>
        </Collapse>
      </Portal>
    </>
  )
}

export default App
