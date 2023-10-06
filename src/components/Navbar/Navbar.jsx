import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import MenuNavbar from './MenuNavbar';
import NavbarDown from './NavbarDown';

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
        <NavbarRight isDown={false}/>
      </Grid>
    </Grid>
  )
};

const WrappedNavbar = ({ isLogoEnable, setIsOpenMenu, isDown }) => {

  const openMenu = () => {
    setIsOpenMenu(true);
  };

  const navbarBasicStyle = {
    paddingLeft: '4.4vh',
    paddingRight: '4.4vh',
    paddingTop: '45px',
  };

  const navbarDownStyle = {
    ...navbarBasicStyle,
    position: 'fixed',
    zIndex: 9999,
    background: 'rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
    marginLeft: '-20px',
    paddingBottom: '11px',
    width: '100%',
  };

  return (
    <Grid
      container
      direction='row'
      style={isDown ? navbarDownStyle : navbarBasicStyle}
    >
      <Grid item
        onClick={openMenu}
        style={{
          paddingRight: '30px',
          cursor: 'pointer',
          marginTop: isDown ? '-30px' : '0px'
        }}>
        <MenuNavbar />
      </Grid>
      {(isLogoEnable && !isDown) && (
        <Grid>
          <NavbarLeft />
        </Grid>
      )}
    </Grid>
  )
};

const Navbar = ({ isOpenMenu, setIsOpenMenu }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1300);
      setWindowSize(window.innerWidth);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isOpenMenu)
    return;
  else if (scrollY >= 500)
    return isSmallScreen ? <WrappedNavbar isLogoEnable={windowSize <= 290 ? false : true} setIsOpenMenu={setIsOpenMenu} isDown={true}/> : <NavbarDown/>
  else
    return isSmallScreen ? <WrappedNavbar isLogoEnable={windowSize <= 290 ? false : true} setIsOpenMenu={setIsOpenMenu} isDown={false}/> : <CompleteNavbar />
}

export default Navbar;