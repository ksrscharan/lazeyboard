import { useState } from 'react'
import {
  Text,
  useMantineTheme,
} from '@mantine/core'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const theme = useMantineTheme()

  return (
    <>
      <Text c="ocean.8">Hello</Text>
    </>
  )
}

export default App
