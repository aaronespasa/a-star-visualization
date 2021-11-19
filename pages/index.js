import { Container, Box, Heading } from "@chakra-ui/react"

export default function Home() {
  return (
    <Container maxW="container.xl" border="1px" borderColor="white.200" centerContent>
      <Box position="relative" pb="1.5rem">
        <Heading as="h2" variant="page-title">
          A Star Search Algorithm Visualization
        </Heading>
        <Box position="absolute" right="0">
          <p>@aaronespasa</p>
        </Box>
      </Box>
    </Container>
  )
}
