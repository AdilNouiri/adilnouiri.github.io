import { Grid } from '@mui/material';
import './App.css';
import Home from './Pages/Home';
import ExpertisePage from './Pages/ExpertisePage';
import WorkPage from './Pages/WorkPage';
import { workDatas } from './Datas/Datas.js';

const App = () => {

  return (
    <Grid container direction='column' style={{ paddingLeft: '20px', paddingRight: '15px' }}>
      <Grid item >
        <Home />
      </Grid>
      <Grid item style={{ paddingTop: '50px' }}>
        <ExpertisePage />
      </Grid>
      <Grid item style={{ paddingTop: '200px' }}>
        <WorkPage datas={workDatas} />
      </Grid>
    </Grid>
  );
}

export default App;
