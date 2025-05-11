import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Image from 'next/image';
import { Space } from '@/utils/util-const';
import { useTypedSelector } from '@/store';

const SpaceOverview = () => {
  const styles = {
    chooseUs: {
      fontSize: '28px',
      color: '#263238',
      fontWeight: 700,
      marginBottom: '35px',
    },
    phoneIconStyle: {
      fontSize: '18px',
    },
  };

  const isMobile = useMediaQuery('(max-width:600px)');
  const [carouselIdx, setCarouselIdx] = useState(0);
  const responceDataArr = useTypedSelector(
    (state) => state?.responceData?.responceData
  );

  const handlePrev = () => {
    setCarouselIdx((prev) => (prev === 0 ? 2 : prev - 1));
  };
  const handleNext = () => {
    setCarouselIdx((prev) => (prev === 2 ? 0 : prev + 1));
  };

  // Card rendering function
  const renderCard = (space: Space) => (
    <Card
      sx={{
        maxWidth: '370px',
        height: '390px',
        borderRadius: 3,
        boxShadow: 3,
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          pb: 0,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, fontSize: '20px', width: '75%' }}
        >
          {space.name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '7px',
            border: '1px solid #EEE7E7',
            gap: 0.5,
          }}
        >
          <AssistantDirectionIcon sx={{ fontSize: 18, color: '#1C1B1F' }} />
          <Typography variant="body2" color="#26323880" sx={{ fontSize: 8 }}>
            {space.distance}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '15px' }}>
        <Image
          style={{ borderRadius: '6px' }}
          src={space.image}
          alt={space.name}
          width={330}
          height={202}
        />
      </Box>
      <CardContent sx={{ pt: '22px' }}>
        <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
          {/* Day Pass */}
          <Button
            variant="outlined"
            disableElevation
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              background: '#F9F9F9',
              borderRadius: '6px',
              width: '155px',
              height: '58px',
              minWidth: 0,
              boxShadow: 'none',
              textTransform: 'none',
              border: '1px solid #EEE7E7',
              '&:hover': {
                background: '#e0dad7',
                boxShadow: 'none',
              },
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <Typography
                variant="body2"
                color="#263238"
                sx={{ fontSize: isMobile ? '10px' : '12px' }}
              >
                Day Pass
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontSize: '15px', color: '#263238' }}
              >
                ₹ {space.dayPrice}
                <span
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: 400,
                    color: '#263238CC',
                  }}
                >
                  /Day
                </span>
              </Typography>
            </div>
            <KeyboardDoubleArrowRightIcon style={{ color: '#263238' }} />
          </Button>
          <Button
            variant="contained"
            disableElevation
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              background: '#FFC422',
              borderRadius: '6px',
              width: '155px',
              height: '58px',
              position: 'relative',
              minWidth: 0,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': {
                background: '#FFB300',
                boxShadow: 'none',
              },
            }}
          >
            <Chip
              label={`${space.discount}% Discount`}
              size="small"
              sx={{
                position: 'absolute',
                top: -14,
                left: 44,
                bgcolor: '#263238',
                color: '#FFFDF7',
                borderRadius: '3px',
                fontWeight: 500,
                fontSize: 8,
                zIndex: 1,
              }}
            />
            <div style={{ textAlign: 'left' }}>
              <Typography
                variant="body2"
                color="#514D2D"
                sx={{ fontSize: isMobile ? '10px' : '12px' }}
              >
                Bulk Pass
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, fontSize: '15px', color: '#263238' }}
              >
                ₹ {space.bulkPrice}
                <span
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: 400,
                    color: '#263238CC',
                  }}
                >
                  /10 Days
                </span>
              </Typography>
            </div>
            <KeyboardDoubleArrowRightIcon style={{ color: '#263238' }} />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Container>
        {isMobile ? (
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography sx={styles.chooseUs}>Our Space</Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: '33px',
                }}
              >
                {' '}
                <IconButton onClick={handlePrev}>
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: 24, color: '#FFBB00' }}
                  />
                </IconButton>
                <IconButton onClick={handleNext}>
                  <ArrowForwardIosIcon
                    sx={{ fontSize: 24, color: '#FFBB00' }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        ) : (
          <Typography sx={styles.chooseUs}>Our Space Overview</Typography>
        )}
        {isMobile ? (
          <>
            {/* Carousel Controls */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 360 }}>
                {renderCard(responceDataArr[carouselIdx])}
              </Box>
            </Box>
            {/* Second Row: Corresponding card (idx+3) */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 360 }}>
                {renderCard(responceDataArr[carouselIdx + 3])}
              </Box>
            </Box>
          </>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {responceDataArr.map((space, idx) => (
              <Grid item xs={12} sm={6} md={4} key={space.name + space.address}>
                {renderCard(space)}
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default SpaceOverview;
