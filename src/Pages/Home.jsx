import { Grid } from '@mui/material';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Description from '../components/Description';
import { useState } from 'react';
import SideNavbar from '../components/Navbar/SideNavbar';

const Home = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Grid>
      {isOpenMenu && (
        <SideNavbar setIsOpenMenu={setIsOpenMenu} />
      )}
      <Grid id='homePage' container direction='column' style={{ height: '100vh' }}>
        <Grid item>
          <Navbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        </Grid>
        <Grid item style={{ flex: 1 }}>
          <Description />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
