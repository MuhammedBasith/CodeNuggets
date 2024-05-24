'use client'

import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Spline from '@splinetool/react-spline';


{/* <Spline scene="https://prod.spline.design/kt6uNniTmojQsHqJ/scene.splinecode"/> */}


export default function Hero() {
  const [sceneUrl, setSceneUrl] = useState('https://prod.spline.design/bNohavNv4-GoBOwA/scene.splinecode');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setSceneUrl('https://prod.spline.design/sN1AsPintz2xQcOX/scene.splinecode'); // Mobile scene URL
      } else {
        setSceneUrl('https://prod.spline.design/bNohavNv4-GoBOwA/scene.splinecode'); // Desktop scene URL
      }
    };

    handleResize(); // Call it initially to set the right scene based on initial load
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => window.removeEventListener('resize', handleResize); // Clean up the event listener
  }, []);

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        {/* <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Code
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Nuggets
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Join Our Exclusive Community of Learners Today and Elevate Your Skills to Become a Part of the Top 1% of Programmers.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >

            <Button href='/upskill' variant='outlined' color="primary">
              Upskill Your Career
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            By clicking &quot;Upskill&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            height: { xs: 200, sm: 700 },
            width: '100%',
            backgroundImage:
              theme.palette.mode === 'light'
                ? 'url("https://images.beta.cosmos.so/674b0d47-9f26-4fba-ab8b-348030deaae2?format=jpeg")'
                : 'url("https://images.beta.cosmos.so/764377ba-8e8a-4429-b5be-48f7f5edc5a2?format=jpeg")',
            backgroundSize: 'cover',
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
          })}
        /> */}


        <Box
          sx={{
            width: '100%',
            height: { xs: '400px', sm: '500px', md: '700px' }, // Adjust the height based on screen size
          }}
        >
          <Spline scene={sceneUrl} />
        </Box>

      </Container>
    </Box>
  );
}
