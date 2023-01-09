import { Box, Center, Container } from '@chakra-ui/react'
import SetCard from './components/SetCard/'

const App = () => {
  return (
    <>
      <Box>Login menu bar</Box>
      <Box>Trainers Avatar Section</Box>
      <Box>Schedule Controls Bar</Box>
      <Box>Schedule</Box>
      <Center>
        <SetCard />
      </Center>
    </>
  )
}

export default App
