import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AppointmentsCell from 'src/components/AppointmentsCell'
import AuthorizeCell from 'src/components/AuthorizeCell/AuthorizeCell'

const HomePage = () => {
  const [firstTime, setFirstTime] = useState(true)
  const [showEvents, setShowEvents] = useState(false)
  const queryParams = new URLSearchParams(window.location.search)
  const code = queryParams.get('code')

  const start = '2022-11-01T12:00:00Z'
  const end = '2022-12-01T12:00:00Z'

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <button onClick={() => setFirstTime(false)}>Authorize</button>
      {firstTime ? <div></div> : <AuthorizeCell></AuthorizeCell>}
      <br />
      <button onClick={() => setShowEvents(true)}>appointments</button>
      {showEvents ? (
        <AppointmentsCell start={start} end={end}></AppointmentsCell>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default HomePage
