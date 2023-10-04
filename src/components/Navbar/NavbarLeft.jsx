import { Grid } from '@mui/material';

const NavbarLeft = () => {
  return (
    <Grid container direction='row'>
      <Grid item paddingRight='2px'>
        <span style={{ fontSize: '30px', fontFamily: 'ArabotoMedium', color: '#66d9ed' }}>
          Nouiri Adil
        </span>
      </Grid>
      <Grid item>
        <span style={{ fontSize: '30px', fontFamily: 'ArabotoMedium', color: 'white' }}>
          .
        </span>
      </Grid>
    </Grid>
  );
}

export default NavbarLeft;
