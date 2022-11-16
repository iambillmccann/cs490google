export const getEvents = ({ start, end }) => {
  console.log(start, end) // temporary placeholder for parameters
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
  return { events }
}
