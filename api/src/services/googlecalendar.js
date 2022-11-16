import { oauth2Client, google } from 'googleapis'

export const getEvents = async ({ start, end, code }) => {
  console.log(start)
  console.log(end)
  console.log(code)

  // ToDo implement error handling when no code is passed
  // let { tokens } = await oauth2Client.getToken(code)
  // oauth2Client.setCredentials(tokens)

  // const calendar = google.calendar({ version: 'v3', oauth2Client })
  // const res = await calendar.events.list({
  //   calendarId: 'primary',
  //   timeMin: start,
  //   timeMax: end,
  //   maxResults: 100,
  //   singleEvents: true,
  //   orderBy: 'startTime',
  // })

  // const events = res.data.items
  // if (!events || events.length === 0) {
  //   console.log('No upcoming events found.')
  //   return
  // }

  // console.log('Upcoming 100 events:')
  // const cleanedEvents = events.map((event, i) => {
  //   const start = event.start.dateTime || event.start.date
  //   const end = event.end.dateTime || event.end.date
  //   const cleanEvent = {
  //     summary: event.summary,
  //     description: event.description,
  //     start: start,
  //     end: end,
  //   }
  //   return cleanEvent
  // })

  const events = [
    {
      summary: 'The First Event',
      description:
        'This is an example demo of using the Google calendar API in RedwoodJS',
      start: '2022-11-14T09:00:00Z',
      end: '2022-11-14T09:30:00Z',
    },
    {
      summary: 'The Second Event',
      start: '2022-11-14T14:00:00Z',
      end: '2022-11-14T15:00:00Z',
    },
  ]
  return { code, events }
}
