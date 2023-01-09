import { Box, HStack } from '@chakra-ui/react'
import { CableLineType, SetType } from '../../types'

interface ISetCardProps {
  cableLine: CableLineType
  creationDate: string
  userName: string
  userPhoneNumber: string
  setType: SetType
  trainerNickname: string
}

function SetCard({
  cableLine,
  creationDate,
  userName,
  userPhoneNumber,
  setType,
  trainerNickname,
}: ISetCardProps) {
  return (
    <Box>
      <HStack>
        <Box>{cableLine}</Box>
        <Box>{creationDate}</Box>
      </HStack>
      <Box>{userPhoneNumber}</Box>
      <Box>{userName}</Box>
      <Box>
        {setType}| {trainerNickname}
      </Box>
    </Box>
  )
}

export default SetCard
