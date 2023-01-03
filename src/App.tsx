import { Icon, PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  VStack,
  Text,
  useDisclosure,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const { isOpen, onToggle } = useDisclosure()

  const handleOnClick = () => setCount((prev) => prev + 1)

  return (
    <>
      <PhoneIcon />
      <Icon />
      <AvatarGroup size={'lg'} spacing={-3}>
        <Avatar
          size={'xl'}
          bg="teal.200"
          name="Maks Chystyakov"
          //src="https://avatars.githubusercontent.com/u/74751903"
        ></Avatar>
        <Avatar
          size={'xl'}
          bg="red.200"
          name="K D"
          //src="https://avatars.githubusercontent.com/u/74751903"
        ></Avatar>
        <Avatar
          size={'xl'}
          bg="purple.200"
          name="A Ba"
          //src="https://avatars.githubusercontent.com/u/74751903"
        ></Avatar>
        <Avatar
          size={'xl'}
          bg="yellow.300"
          name="D K"
          //src="https://avatars.githubusercontent.com/u/74751903"
        ></Avatar>
        <Avatar
          size={'xl'}
          bg="blue.200"
          name="A Zh"
          //src="https://avatars.githubusercontent.com/u/74751903"
        ></Avatar>
      </AvatarGroup>
    </>
  )
}

export default App
