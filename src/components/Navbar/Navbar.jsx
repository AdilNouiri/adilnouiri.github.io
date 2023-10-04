import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import MenuNavbar from './MenuNavbar';

const CompleteNavbar = () => {
  return (
    <Grid
      container
      direction='row'
      style={{
        paddingLeft: '4.4vh',
        paddingRight: '4.4vh',
        paddingTop: '45px'
      }}
    >
      <Grid item style={{ position: 'absolute' }}>
        <NavbarLeft />
      </Grid>
      <Grid item style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <NavbarRight />
      </Grid>
    </Grid>
  )
};

const WrappedNavbar = ({ isLogoEnable, setIsOpenMenu }) => {

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  return (
    <Grid
      container
      direction='row'
      style={{
        paddingLeft: '4.4vh',
        paddingRight: '4.4vh',
        paddingTop: '45px',
      }}
    >
      <Grid item
        onClick={openMenu}
        style={{
          paddingRight: '30px',
          cursor: 'pointer'
        }}>
        <MenuNavbar />
      </Grid>
      {isLogoEnable && (
        <Grid item>
          <NavbarLeft />
        </Grid>
      )}
    </Grid>
  )
};

const Navbar = ({ isOpenMenu, setIsOpenMenu }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1300);
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isOpenMenu)
    return;
  else
    return isSmallScreen ? <WrappedNavbar isLogoEnable={windowSize <= 290 ? false : true} setIsOpenMenu={setIsOpenMenu} /> : <CompleteNavbar />
}

export default Navbar;