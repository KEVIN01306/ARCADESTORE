import { Box, Container,Typography,IconButton } from '@mui/material';
import { Facebook, Instagram, X, GitHub, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'rgb(251, 251, 252)', color: '#1f2937', py: 6 }}>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="column" alignItems="flex-start" mb={4}>
          <Box>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><X /></IconButton>
            <IconButton color="inherit"><GitHub /></IconButton>
            <IconButton color="inherit"><YouTube /></IconButton>
          </Box>
        </Box>
        <Box mt={3} display={'flex'} justifyContent={'center'}>
          <Typography variant="body2" color="text.secondary">
            © 2025 Tecnico en desarrollo de software 202460522.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
