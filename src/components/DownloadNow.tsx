import React, { useState } from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import play_store from '../../public/assets/play_store.png';
import app_store from '../../public/assets/app_store.png';
import workspace from '../../public/assets/Group 1000007102.png';

const DownloadNow = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [slide, setSlide] = useState(0);

  const styles = {
    chooseUs: {
      fontSize: isMobile ? '20px' : '28px',
      color: isMobile ? '#263238' : '#605F5F',
      fontWeight: 700,
      marginBottom: isMobile ? '16px' : '300px',
      textAlign: 'left',
    },
    productivityChannel: {
      fontSize: '20px',
      color: '#605F5F',
      textAlign: isMobile ? 'center' : 'left',
    },
    storeButtons: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      marginTop: '20px',
      gap: 2,
    },
    arrow: {
      color: '#FFBB00',
      fontSize: 28,
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 8,
    },
    dot: (active: boolean) => ({
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: active ? '#FFBB00' : '#ccc',
      display: 'inline-block',
    }),
  };

  if (isMobile) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography sx={styles.chooseUs}>Download our app now</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: '20px',
            }}
          >
            {' '}
            <IconButton
              onClick={() => setSlide((prev) => (prev === 0 ? 1 : 0))}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 24, color: '#FFBB00' }} />
            </IconButton>
            <IconButton
              onClick={() => setSlide((prev) => (prev === 1 ? 0 : 1))}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 24, color: '#FFBB00' }} />
            </IconButton>
          </Box>
        </Box>
        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: 270,
              }}
            >
              {slide === 0 && (
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column', // Stack vertically
                    alignItems: 'center',
                    py: 2,
                  }}
                >
                  <Image
                    src={workspace}
                    alt="BHIVE Workspace app"
                    style={{
                      borderRadius: '12px',
                      width: '90%',
                      height: 'auto',
                      maxWidth: 300,
                    }}
                  />
                  <Box sx={styles.storeButtons} mt={2}>
                    <Image
                      src={play_store}
                      alt="Google Play"
                      width={120}
                      height={40}
                      style={{ borderRadius: '7px' }}
                    />
                    <Image
                      src={app_store}
                      alt="App Store"
                      width={120}
                      height={40}
                      style={{ borderRadius: '7px' }}
                    />
                  </Box>
                </Box>
              )}
              {slide === 1 && (
                <Box sx={{ width: '100%', py: 2 }}>
                  <Typography
                    sx={styles.productivityChannel}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    Boost your productivity with the BHIVE Workspace app.
                    Elevate your workspace, collaborate efficiently, and unlock
                    exclusive perks.
                  </Typography>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Container>
        <Box>
          <Box>
            <Typography sx={styles.chooseUs}>Download our app now</Typography>
          </Box>

          <Grid
            container
            spacing={2}
            style={{
              backgroundColor: '#FFF',
              padding: '20px',
              borderRadius: '8px',
              height: '190px',
              position: 'relative',
            }}
          >
            <Grid size={6}>
              <Box>
                <Image
                  src={workspace}
                  alt="behiveLogo"
                  //   width={400}
                  //   height={300}
                  style={{
                    borderRadius: '7px',
                    marginRight: '10px',
                    position: 'absolute',
                    left: 30,
                    top: -210,
                  }}
                />
              </Box>
            </Grid>
            <Grid size={6}>
              <Box>
                <Typography sx={styles.productivityChannel}>
                  Boost your productivity with the BHIVE Workspace app. Elevate
                  your workspace, collaborate efficiently, and unlock exclusive
                  perks.
                </Typography>
              </Box>
              <Box style={{ display: 'flex', marginTop: '20px' }}>
                <Box>
                  <Image
                    src={play_store}
                    alt="behiveLogo"
                    width={120}
                    height={40}
                    style={{ borderRadius: '7px', marginRight: '10px' }}
                  />
                </Box>
                <Box>
                  <Image
                    src={app_store}
                    alt="behiveLogo"
                    width={120}
                    height={40}
                    style={{ borderRadius: '7px' }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DownloadNow;
