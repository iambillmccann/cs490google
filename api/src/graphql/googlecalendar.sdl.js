export const schema = gql`
  type Event {
    summary: String!
    description: String
    start: String!
    end: String!
  }

  type Events {
    events: [Event!]
  }

  type Query {
    getEvents(start: String!, end: String!): Events! @skipAuth
  }
`
