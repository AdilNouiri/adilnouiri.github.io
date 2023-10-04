import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';

const textTitle = {
  fontSize: '100px',
  textShadow: '1px 3px 11px rgba(0,0,0,.3)',
  letterSpacing: '-0.2px',
  fontFamily: 'Poppins-Medium',
  fontWeight: '600',
  color: 'white',
  margin: '0',
  boxSizing: 'border-box',
  lineHeight: '1.4',
};

const Title = ({ title1, title2 }) => {
  return (
    <Grid item>
      <Grid item>
        <span style={textTitle}>
          {title1}
        </span>
      </Grid>
      <Grid item style={{ paddingBottom: '20px', marginTop: '-20px' }}>
        <span style={textTitle}>
          {title2}
        </span>
      </Grid>
    </Grid>
  );
};


const FilterProjects = ({ datas, sectionSelected, setSectionSelected }) => {

  const [mouseOn, setMouseOn] = useState('');

  const basicTextStyle = {
    fontSize: '0.98em',
    fontWeight: '500',
    color: 'grey'
  };

  const ClickableText = ({ data }) => {

    const getNumberProjects = (categorie) => {
      if (categorie === 'all')
        return data.projects.length;
      else {
        const categoryItem = datas[0].projects.filter((project) => project.categorie === categorie);
        if (categoryItem)
          return categoryItem.length;
      }
      return 0;
    };

    const clickableTextStyle = (id) => {
      return {
        fontSize: '0.98em',
        fontWeight: '500',
        cursor: 'pointer',
        color: (sectionSelected === id || mouseOn === id) ? '#66d9ed' : 'grey'
      }
    };

    const numberTextStyle = (categorie) => {
      return {
        fontSize: '0.80em',
        fontWeight: '500',
        cursor: 'pointer',
        color: (sectionSelected === categorie || mouseOn === categorie) ? '#66d9ed' : 'grey'
      }
    };

    return (
      <Grid container direction='row'
        onMouseEnter={() => setMouseOn(data.categorie)}
        onMouseLeave={() => setMouseOn('')}
        onClick={() => setSectionSelected(data.categorie)}>
        <Grid item>
          <span style={clickableTextStyle(data.categorie)}>
            {data.text}
          </span>
        </Grid>
        <Grid item style={{ marginTop: '-7px' }}>
          <span style={numberTextStyle(data.categorie)}>
            {getNumberProjects(data.categorie)}
          </span>
        </Grid>
      </Grid>
    )
  };

  return (
    <Grid container direction='row'>
      <Grid item style={{ paddingRight: '15px' }}>
        <span style={basicTextStyle}>
          Filter by
        </span>
      </Grid>
      <Grid item style={{ paddingRight: '3px' }}>
        <ClickableText data={datas[0]} />
      </Grid>
      <Grid item style={{ paddingRight: '15px' }}>
        <span style={basicTextStyle}>
          /
        </span>
      </Grid>
      <Grid item style={{ paddingRight: '3px' }}>
        <ClickableText data={datas[1]} />
      </Grid>
      <Grid item style={{ paddingRight: '15px' }}>
        <span style={basicTextStyle}>
          /
        </span>
      </Grid>
      <Grid item style={{ paddingRight: '3px' }}>
        <ClickableText data={datas[2]} />
      </Grid>
    </Grid>
  );
}
const Project = ({ data }) => { // à continuer
  return (
    <Grid container direction='column'>
      <Grid item>
        <span>
          {data.title}
        </span>
      </Grid>
    </Grid>
  );
}

const ProjectsList = ({ datas, sectionSelected, setSectionSelected }) => {

  const [projectsDatas, setProjectsDatas] = useState([]);
  
  useEffect(() => {
    const tmpProjects = getProjectsData(sectionSelected);
    setProjectsDatas(tmpProjects);
  }, [sectionSelected]);

  const getProjectsData = (categorie) => {
    if (categorie === 'all')
      return datas[0].projects;
    else {
      const categoryItem = datas[0].projects.filter((project) => project.categorie === categorie);
      if (categoryItem)
        return categoryItem;
    }
    return [];
  };


  return (
    <Grid container direction='row'>
      {projectsDatas.map((projectData, index) => (
        <Grid item key={index}>
          <Project data={projectData} />
        </Grid>
      ))}
    </Grid>
  );
}


const WorkPage = ({ datas }) => {

  const [sectionSelected, setSectionSelected] = useState('all');

  return (
    <Grid container
      direction='column'
      id='workPage'
      style={{ border: '1px solid red', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <Grid item>
        <Grid>
          <Title title1='My' title2='Works' />
        </Grid>
      </Grid>

      <Grid item>
        <FilterProjects datas={datas} sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
      </Grid>
      <Grid item>
        <ProjectsList datas={datas} sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
      </Grid>
    </Grid>
  );
}

export default WorkPage;
