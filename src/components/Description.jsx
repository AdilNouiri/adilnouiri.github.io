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

  const CVTitle = {
    fontSize: '18px',
    color: 'white',
    fontFamily: 'Poppins-Medium',
    wordWrap: 'break',
    textAlign: 'center',
    margin: '20px'
  };

  const openCV = () => {
    const pdfLink = 'https://drive.google.com/file/d/1NiKOkaPxNp8ULEw7dhx7jiAYZVGPfaqX/view';
  
    window.open(pdfLink, '_blank');
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
      <Grid item style={{
          backgroundColor: '#66d9ed',
          borderRadius: '15px',
          paddingTop: '5px',
          paddingBottom: '5px',
          cursor: 'pointer',
          textAlign: 'center'
          }}
          onClick={openCV}>
        <span style={CVTitle}>
          Download CV
        </span>
      </Grid>
      <Grid item
        onClick={() => { ScrollToComponent('#expertise') }}
        style={{ position: 'absolute', bottom: '40px', cursor: 'pointer' }}>
        <div className="button scroll">
          <span className="scroll-down-arrow"></span>
        </div>
      </Grid>
    </Grid>
  );
}

export default Description;
