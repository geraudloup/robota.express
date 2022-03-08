import type { NextPage } from 'next'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Jobs: NextPage = () => {
  return (
    <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
            List of jobs
        </Typography>
        <Button variant="contained">Find a job</Button>
        </Box>
    </Container>
  )
}

export default Jobs
