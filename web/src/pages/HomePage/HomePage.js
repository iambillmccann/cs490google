import { useState } from 'react'

// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AppointmentsCell from 'src/components/AppointmentsCell'
import AuthorizeCell from 'src/components/AuthorizeCell/AuthorizeCell'

const HomePage = () => {
  const [showEvents, setShowEvents] = useState(false)
  const queryParams = new URLSearchParams(window.location.search)
  const code = queryParams.get('code')

  const start = '2022-11-01T12:00:00Z'
  const end = '2022-12-01T12:00:00Z'

  if (code === null) {
    return <AuthorizeCell></AuthorizeCell>
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Google API Demo</h1>
      <br />
      <button onClick={() => setShowEvents(true)}>Appointments</button>
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
