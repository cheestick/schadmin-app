import { Box } from '@chakra-ui/react'

interface SetCardProps {
  cableLine: string
  creationDate: string
  userName: string
  userPhoneNumber: string
  setType: 'training' | 'freeride'
  trainerNickname: string
}

function SetCard() {
  return (
    <Box>
      <Box>Tab Name | Tab Creation</Box>
      <Box>Time User Number</Box>
      <Box>User Fullname</Box>
      <Box>Set type Badge | Trainer Nickname</Box>
    </Box>
  )
}

export default SetCard
