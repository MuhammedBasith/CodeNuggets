import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const logoStyle = {
  width: { xs: '60px', sm: '90px' },
  height: 'auto',
};

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      mt={1}
      sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
    >
      {'Copyright © '}
      <Link href="">CodeNuggets&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 4, sm: 10 },
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
            alignItems: { xs: 'center', sm: 'flex-start' },
          }}
        >
          {/* <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={'./logo-t.png'}
                style={logoStyle}
                alt="logo of CodeNuggets"
              />
              <h1
                style={{
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  fontWeight: 'bold',
                  margin: 0,
                }}
              >
                CodeNuggets
              </h1>
            </Box>
          </Box> */}
        </Box>
        {/* <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            fontWeight={600}
            sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
          >
            Product
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
          <Link color="text.secondary" href="#">
            Testimonials
          </Link>
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            Pricing
          </Link>
          <Link color="text.secondary" href="#">
            FAQs
          </Link>
        </Box> */}
        {/* <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            fontWeight={600}
            sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
          >
            Company
          </Typography>
          <Link color="text.secondary" href="#">
            About us
          </Link>
          <Link color="text.secondary" href="#">
            Careers
          </Link>
          <Link color="text.secondary" href="#">
            Press
          </Link>
        </Box> */}
        {/* <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            fontWeight={600}
            sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
          >
            Legal
          </Typography>
          <Link color="text.secondary" href="#">
            Terms
          </Link>
          <Link color="text.secondary" href="#">
            Privacy
          </Link>
          <Link color="text.secondary" href="/contact">
            Contact
          </Link>
        </Box> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: { xs: 4, sm: 8 },
          width: '100%',
        }}
      >
        <div>
          <Link color="text.secondary" href="/privacy">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="/privacy">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href=""
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href=""
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href=""
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
