import { Grid } from '@mui/material';
import { useState } from 'react';

const MenuNavbar = () => {

  const [isMouseOn, setIsMouseOn] = useState(false);

  return (
    <Grid container
      direction='column'
      onMouseEnter={() => setIsMouseOn(true)}
      onMouseLeave={() => setIsMouseOn(false)}
      style={{
        height: '100%',
        justifyContent: 'center'
      }} >
      <Grid item style={{ backgroundColor: isMouseOn ? '#80808030' : '#80808005', borderRadius: '50%', width: '56px', height: '56px', position: 'absolute', zIndex: '0', marginLeft: '-17px' }} />
      <Grid item style={{ width: '20px', height: '2px', backgroundColor: isMouseOn ? '#66d9ed' : 'white', marginBottom: '7px', borderRadius: '20px', zIndex: '1' }} />
      <Grid item style={{ width: '20px', height: '2px', backgroundColor: isMouseOn ? '#66d9ed' : 'white', borderRadius: '90px', zIndex: '1' }} />
    </Grid>
  );
}

export default MenuNavbar;
