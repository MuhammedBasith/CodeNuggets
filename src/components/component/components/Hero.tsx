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
import { Rings } from 'react-loader-spinner'; // Import the loader

export default function Hero() {
  const [sceneUrl, setSceneUrl] = useState('https://prod.spline.design/bNohavNv4-GoBOwA/scene.splinecode');
  const [isLoading, setIsLoading] = useState(true);

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

  // This function will be called when the scene is loaded
  const handleLoad = () => {
    setIsLoading(false);
  };

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
        <Box
          sx={{
            width: '100%',
            height: { xs: '400px', sm: '500px', md: '700px' }, // Adjust the height based on screen size
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isLoading && (
            <Rings
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="rings-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
          <Spline scene={sceneUrl} onLoad={handleLoad} style={{ display: isLoading ? 'none' : 'block' }} />
        </Box>
      </Container>
    </Box>
  );
}
