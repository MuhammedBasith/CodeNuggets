import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@/components/ui/button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import BentoDemo from '@/components/component/BentoGridImplementation';


export default function Features() {



  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Typography component="h2" variant="h4" color="text.primary">
        Features
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: { xs: 2, sm: 4 } }}
      >
        Unlock the potential of our platform with these exciting features:
      </Typography>
          <BentoDemo />
    </Container>
  );
}
