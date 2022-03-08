import type { NextPage } from 'next'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Robota Express !
        </Typography>
        <Link href="/jobs">
          Find a job here
        </Link>
      </Box>
    </Container>
  )
}

export default Home
