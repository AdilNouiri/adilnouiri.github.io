import { Grid } from '@mui/material';
import ArrayCompetences from '../components/ArrayCompetences/ArrayCompetences';
import {dataExpertise} from '../Datas/Datas.js'

const ExpertisePage = () => {

  const srcImg = 'https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png';

  const textTitle = {
    fontSize: '70px',
    textShadow: '1px 3px 11px rgba(0,0,0,.3)',
    letterSpacing: '-0.2px',
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    color: 'white',
    margin: '0',
    boxSizing: 'border-box',
    lineHeight: '1.4',
  };

  return (
    <Grid container
      direction='column'
      id='expertise'
      style={{
        alignItems: 'center',
      }}>
      <Grid item style={{ paddingBottom: '20px' }}>
        <span style={textTitle}>
          My Expertise
        </span>
      </Grid>
      <Grid item>
        <ArrayCompetences data={dataExpertise} />
      </Grid>
      <Grid item>
        <img src={srcImg} style={{opacity: '0.2', marginTop: '-50px', marginLeft: '50px', width: '90%'}} alt='ImageCode'/>
      </Grid>
    </Grid>
  );
}

export default ExpertisePage;
