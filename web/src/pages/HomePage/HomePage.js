import { useState } from 'react'

import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import AppointmentsCell from 'src/components/AppointmentsCell'
import AuthorizeCell from 'src/components/AuthorizeCell/AuthorizeCell'

const HomePage = () => {
  const [showEvents, setShowEvents] = useState(false)
  const queryParams = new URLSearchParams(window.location.search)
  const code = queryParams.get('code')

  const start = '2023-05-01T12:00:00Z'
  const end = '2023-06-01T12:00:00Z'

  if (code === null) {
    return <AuthorizeCell></AuthorizeCell>
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Box borderRadius="lg" p={4} maxW="md" borderWidth="1px">
        <Button onClick={() => setShowEvents(true)}>Appointments</Button>
      </Box>
      {showEvents ? (
        <AppointmentsCell
          start={start}
          end={end}
          code={code}
        ></AppointmentsCell>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default HomePage
