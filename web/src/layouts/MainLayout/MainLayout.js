import { Box } from '@chakra-ui/react'

const MainLayout = ({ children }) => {
  return (
    <>
      <Box bg="blue.700" w="100%" p={4} color="white" fontSize="xl">
        <h1>Google API Demo!</h1>
      </Box>
      <Box m={25}>
        <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
          {children}
        </main>
      </Box>
    </>
  )
}

export default MainLayout
