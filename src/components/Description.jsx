import { Grid } from '@mui/material';
import '../Styles/ScrollDownIndicator.css'
import ScrollToComponent from '../Utils/ScrollToComponent';

const Description = () => {

  const textTitle = {
    fontSize: '9vw',
    textShadow: '1px 3px 11px rgba(0,0,0,.3)',
    letterSpacing: '2.2px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    color: 'white',
    margin: '0',
    boxSizing: 'border-box',
    lineHeight: '1',
  };

  const descriptionTitle = {
    fontSize: '22px',
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Poppins-Medium',
    wordWrap: 'break',
    textAlign: 'center',
    marginTop: '10px',
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{
        height: '100%'
      }}
    >
      <Grid item>
        <h1
          style={textTitle}>
          nouiri adil
        </h1>
      </Grid>
      <Grid item>
        <h5 style={descriptionTitle}>
          Computer science, Front end & App Developer.
        </h5>
      </Grid>
      <Grid item
        onClick={() => { ScrollToComponent('#expertise') }}
        style={{ position: 'absolute', bottom: '70px', cursor: 'pointer' }}>
        <div className="button scroll">
          <span className="scroll-down-arrow"></span>
        </div>
      </Grid>
    </Grid>
  );
}

export default Description;
