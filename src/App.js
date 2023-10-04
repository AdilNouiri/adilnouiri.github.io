import { Grid } from '@mui/material';
import './App.css';
import Home from './Pages/Home';
import ExpertisePage from './Pages/ExpertisePage';
import WorkPage from './Pages/WorkPage';

const workDatas = [
  {
    categorie: 'all',
    text: 'All',
    projects : [
      {
        title: 'RPG',
        imageSrc: 'https://static.wikia.nocookie.net/wikidoublage/images/8/8b/Pok%C3%A9mon_Donjon_Myst%C3%A8re_1.png/revision/latest?cb=20200507155148&path-prefix=fr',
        categorie: 'epitech',
        langages: 'C',
        link: 'google.com/'
      }
    ]
  },
  {
    categorie: 'epitech',
    text: 'Epitech'
  },
  {
    categorie: 'web',
    text: 'Web Development'
  }
];

const App = () => {

  return (
    <Grid container direction='column' style={{ paddingLeft: '15px', paddingRight: '15px', height: '900vh' }}>
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
