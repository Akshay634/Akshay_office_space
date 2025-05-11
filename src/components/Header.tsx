import { Box, Container, Grid, ListItem } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import beHive from '../../public/assets/Bhive-Workspace.f1670267326.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Header = () => {
  const styles = {
    phoneIconStyle: {
      fontSize: 24,
      color: '#F2B304',
    },
    phoneIcon: {
      width: '42px',
      height: '42px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #F2B304',
    },
    gridPhone: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  return (
    <div>
      <Container>
        <div>
          <Grid container spacing={2}>
            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
              <ListItem>
                <Image src={beHive} alt="behiveLogo" width={130} height={70} />
              </ListItem>
            </Grid>
            <Grid size={{ xs: 8, sm: 8, md: 8 }}></Grid>
            <Grid size={{ xs: 2, sm: 2, md: 2 }} sx={styles.gridPhone}>
              <Box sx={styles.phoneIcon}>
                <LocalPhoneIcon sx={styles.phoneIconStyle} />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Header;
