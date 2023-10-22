import { Grid } from '@mui/material';
import './App.css';
import Home from './Pages/Home';
import ExpertisePage from './Pages/ExpertisePage';
import WorkPage from './Pages/WorkPage';
import { workDatas } from './Datas/Datas.js';
import ExperiencePage from './Pages/ExperiencePage';
import ContactPage from './Pages/ContactPage';

const App = () => {

  return (
    <Grid container direction='column' style={{ paddingLeft: '20px', paddingRight: '15px' }}>
      <Grid item >
        <Home />
      </Grid>
      <Grid item style={{ width: '100%' }}>
        <ExpertisePage />
      </Grid>
      <Grid item style={{ paddingTop: '160px', width: '100%' }}>
        <WorkPage datas={workDatas} />
      </Grid>
      <Grid item style={{ paddingTop: '65px', width: '100%' }}>
        <ExperiencePage />
      </Grid>
      <Grid item style={{ paddingTop: '250px', paddingBottom: '50px', width: '100%' }}>
        <ContactPage />
      </Grid>
    </Grid>
  );
}

export default App;
