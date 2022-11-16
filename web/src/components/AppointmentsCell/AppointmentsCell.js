export const QUERY = gql`
  query calendar_demo($start: String!, $end: String!, $code: String!) {
    getEvents(start: $start, end: $end, code: $code) {
      events {
        summary
        description
        start
        end
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getEvents, start, end, code }) => {
  alert(start, end)
  alert(code)
  return (
    <ul>
      {getEvents.events.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
