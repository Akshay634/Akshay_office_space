import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  useMediaQuery,
  Container,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WeekendIcon from '@mui/icons-material/Weekend';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ChairIcon from '@mui/icons-material/Chair';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

const features = [
  {
    icon: <PhotoFilterIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'Community Events',
  },
  {
    icon: <SportsGymnasticsIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'Gym Facilities',
  },
  {
    icon: <NetworkWifiIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'High-Speed WiFi',
  },
  {
    icon: <CoffeeIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'Cafe & Tea Bar',
  },
  {
    icon: <CurrencyRupeeIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'Affordable',
  },
  {
    icon: <ChairIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'Comfort Lounges',
  },
  {
    icon: <QueryBuilderIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'Quick Booking',
  },
  {
    icon: <SportsTennisIcon sx={{ color: '#FFC727', fontSize: 32 }} />,
    label: 'Sports Area',
  },
];

const WhyChooseUs = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Container>
      <Box sx={{ mx: 'auto', marginBottom: '20px', marginTop: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            justifyContent: 'space-between',
          }}
        >
          <Typography
            style={{
              fontSize: '28px',
              color: '#263238',
              fontWeight: 700,
              marginBottom: '35px',
            }}
          >
            Why Choose us?
          </Typography>
          {isMobile && (
            <Box
              sx={{
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: 1,
              }}
            >
              <span style={{ color: '#FFC727', fontWeight: 700 }}>
                <KeyboardArrowRightIcon
                  sx={{ fontSize: 40, color: '#FFBB00' }}
                />
              </span>
            </Box>
          )}
        </Box>
        {isMobile ? (
          <Grid container spacing={2}>
            {features.map((feature, idx) => (
              <Grid size={6} key={feature.label}>
                <Paper
                  elevation={1}
                  sx={{
                    width: '154px',
                    height: '80px',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 2,
                    minHeight: 90,
                  }}
                >
                  {feature.icon}
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{
                      // mt: 1,
                      fontWeight: 500,
                      color: '#263238',
                      border: 'none',
                      borderRadius: 1,
                      px: 0,
                      background: 'none',
                    }}
                  >
                    {feature.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <Box>
              <Grid container spacing={2} style={{ paddingBottom: '15px' }}>
                <Grid size={3} style={{ borderRight: '1px solid #e1e1e1' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <PhotoFilterIcon
                        sx={{ fontSize: 30, color: '#FFBB00' }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        Community Events
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={3} style={{ borderRight: '1px solid #e1e1e1' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <SportsGymnasticsIcon
                        sx={{ fontSize: 30, color: '#FFBB00' }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        Gym Facilities
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={3} style={{ borderRight: '1px solid #e1e1e1' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <NetworkWifiIcon
                        sx={{ fontSize: 30, color: '#FFBB00' }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        High-Speed WiFi
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <CoffeeIcon sx={{ fontSize: 30, color: '#FFBB00' }} />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        Cafe & Tea Bar
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box>
              <Grid container spacing={2} style={{ paddingTop: '15px' }}>
                <Grid size={3} style={{ borderRight: '1px solid #e1e1e1' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <CurrencyRupeeIcon
                        sx={{ fontSize: 30, color: '#FFBB00' }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        Affordable
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={3} style={{ borderRight: '1px solid #e1e1e1' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <ChairIcon sx={{ fontSize: 30, color: '#FFBB00' }} />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        Comfort Lounges
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={3} style={{ borderRight: '1px solid #e1e1e1' }}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <QueryBuilderIcon
                        sx={{ fontSize: 30, color: '#FFBB00' }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        Quick Booking
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={3}>
                  <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <SportsTennisIcon
                        sx={{ fontSize: 30, color: '#FFBB00' }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        style={{ color: '#263238', paddingLeft: '10px' }}
                      >
                        Sports Area
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
