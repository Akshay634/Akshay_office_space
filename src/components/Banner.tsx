import Image from 'next/image';
import React from 'react';
import banner from '../../public/assets/banner.png';
import { Box } from '@mui/material';

const Banner = () => {
  const styles = {
    bannerVideo: {
      width: '28vw',
      maxWidth: '400px',
      minWidth: '260px',
      borderRadius: '12px',
      overflow: 'hidden',
      // background: '#fff',
      boxShadow: '0 6px 24px 0 rgba(0, 0, 0, 0.08)',
      '@media (max-width: 600px)': {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '65vw',
        minWidth: '0',
        maxWidth: '90vw',
        zIndex: 2,
        boxShadow: '0 6px 24px 0 rgba(0, 0, 0, 0.16)',
      },
      '@media (max-width: 900px)': {
        width: '40vw',
        maxWidth: '300px',
      },
    },
    bannerContainer: {
      position: 'relative',
      width: '100%',
      maxWidth: ' 1600px',
      margin: '0 auto',
      '@media (max-width: 600px)': {
        maxWidth: '100vw',
        minWidth: 0,
        padding: 0,
      },
    },
    bannerBg: {
      width: '100%',
      height: 'auto',
      display: 'block',
      '@media (max-width: 600px)': {
        width: '100vw',
        height: 'auto',
        minHeight: '220px',
      },
    },
    bannerContent: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5vw',
      boxSizing: 'border-box',
      '@media (max-width: 600px)': {
        position: 'static',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 0,
        height: 'auto',
      },
    },
    bannerText: {
      color: '#23272e',
      fontSize: '2.5rem',
      fontWeight: 700,
      maxWidth: '40vw',
      lineHeight: 1.2,
      borderRadius: '12px',
      padding: '2rem 2.5rem',
      '@media (max-width: 600px)': {
        position: 'static',
        margin: '0.5rem 0 0 0',
        maxWidth: '100vw',
        fontSize: '1.1rem',
        textAlign: 'center',
        padding: '1rem 0.5rem',
        borderRadius: '0 0 12px 12px',
      },
      '@media (max-width: 900px)': {
        fontSize: '1.5rem',
        padding: '1.2rem 1.5rem',
        // maxWidth: '60vw',
      },
    },
  };
  return (
    <Box sx={styles.bannerContainer}>
      <Image
        src={banner}
        alt="BHIVE Workspace app"
        className={styles.bannerBg}
        width={1600}
        height={400}
        priority
      />
      <Box sx={styles.bannerContent}>
        <Box sx={styles.bannerText}>
          Host your meeting with world-class amenities. <br />
          Starting at <span style={{ color: '#FFC727' }}>₹199/-!</span>
        </Box>
        <Box sx={styles.bannerVideo}>
          <video
            src="/assets/video_img.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 12,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
