import { Box, Center, Container } from '@chakra-ui/react'
import SetCard from './components/SetCard/'

import { testSetData } from './mockData/tempMock'

const App = () => {
  return (
    <>
      <Box>Login menu bar</Box>
      <Box>Trainers Avatar Section</Box>
      <Box>Schedule Controls Bar</Box>
      <Box>Schedule</Box>
      <Center>
        <SetCard {...testSetData} />
      </Center>
    </>
  )
}

export default App
