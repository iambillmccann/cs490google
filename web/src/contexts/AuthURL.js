import React from 'react'
export const AuthURLContext = React.createContext(null)

export default ({ children }) => {
  const [authorizationUrl, setAuthorizationUrl] = React.useState(null)
  const store = {
    authorizationUrl: [authorizationUrl, setAuthorizationUrl],
  }

  return (
    <AuthURLContext.Provider value={store}>{children}</AuthURLContext.Provider>
  )
}
