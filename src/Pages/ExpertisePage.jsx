import { Grid } from '@mui/material';
import ArrayCompetences from '../components/ArrayCompetences/ArrayCompetences';

const ExpertisePage = () => {

  const srcImg = 'https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png';

  const data = [
    {
      title1: 'Software',
      title2: 'Development',
      bandColor: '#9b51e0',
      bandSize: '110px',
      description: 'Experienced in both functional and OOP: JavaScript, TypeScript, C, C++, Haskell, Python.',
      type: 'computer'
    },
    {
      title1: 'Frontend Dev',
      title2: 'React, Angular',
      bandColor: '#2c3599',
      bandSize: '160px',
      description: 'Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, Redux, React and Angular frameworks.',
      type: 'web'
    },
    {
      title1: 'React Native Dev',
      title2: 'Android, iOS',
      bandColor: '#ff6900',
      bandSize: '198px',
      description: 'Skilled in developing hybrid mobile apps and cross-platform solutions using the React Native framework.',
      type: 'mobile'
    }
  ]

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
        <ArrayCompetences data={data} />
      </Grid>
      <Grid item>
        <img src={srcImg} style={{opacity: '0.2', marginTop: '-50px', marginLeft: '50px', width: '90%'}} alt='ImageCode'/>
      </Grid>
    </Grid>
  );
}

export default ExpertisePage;
