import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';

const NavbarDown = () => {
    return (
      <Grid
        container
        direction='row'
        style={{
          paddingLeft: '4.4vh',
          paddingRight: '4.4vh',
          paddingTop: '10px',
          paddingBottom: '10px',
          width: '100%',
          marginLeft: '-20px',
          justifyContent: 'center',
          zIndex: 9999,
          position: 'fixed',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Grid>
            <NavbarRight isDown={true} />
        </Grid>

      </Grid>
    )
  };

export default NavbarDown;