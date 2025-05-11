import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

// Replace with your actual image import or URL
const IMAGE_URL = '/banner-meeting.png'; // Place your image in the public folder or use an import

const MeetingBanner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'relative',
        width: isMobile ? 300 : 800,
        height: isMobile ? 300 : 350,
        margin: '0 auto',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        background: '#f5f6fa',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Image section */}
      <Box
        component="img"
        src={IMAGE_URL}
        alt="Host your meeting"
        sx={{
          width: isMobile ? '100%' : '60%',
          height: isMobile ? 180 : '100%',
          objectFit: 'cover',
        }}
      />
      {/* Text section */}
      <Box
        sx={{
          position: isMobile ? 'static' : 'absolute',
          left: isMobile ? 'auto' : 40,
          top: isMobile ? 'auto' : 60,
          width: isMobile ? '100%' : '60%',
          background: isMobile ? 'transparent' : 'rgba(255,255,255,0.85)',
          p: isMobile ? 2 : 4,
          display: 'flex',
          alignItems: isMobile ? 'center' : 'flex-start',
          justifyContent: isMobile ? 'center' : 'flex-start',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant={isMobile ? 'subtitle1' : 'h5'}
          sx={{
            fontWeight: 700,
            color: '#222',
            textAlign: isMobile ? 'center' : 'left',
            lineHeight: 1.2,
          }}
        >
          Host your meeting with world-class amenities. <br />
          Starting at <Box component="span" sx={{ color: '#FFC107', fontWeight: 800, fontSize: isMobile ? 20 : 28 }}>₹199/-!</Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default MeetingBanner;
