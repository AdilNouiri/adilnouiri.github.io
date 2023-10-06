import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import '../Styles/ScrollDownIndicator.css';
import { competencesLogo } from '../Datas/Datas.js';

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

const Project = ({ data, projectSelected }) => {

  const [isMouseOnShowProject, setIsMouseOnShowProject] = useState(false);

  const titleStyle = {
    color: "white",
    fontSize: "20px",
    marginBottom: "5px",
    lineHeight: "1.1",
    fontFamily: "ArabotoBold"
  };

  const typeStyle = {
    color: "#efefef",
    fontSize: "17px",
    marginBottom: "5px",
    lineHeight: "1.1",
    fontFamily: "ArabotoLight"
  };

  const showProjectStyle = {
    color: isMouseOnShowProject ? "#66d9ed" : "#efefef",
    fontSize: "17px",
    marginBottom: "5px",
    lineHeight: "1.1",
    fontFamily: "ArabotoLight"
  };

  return (
    <Grid container direction='column' style={{width: "380px" }}>
      <Grid item>
        <img
          src={data.imageSrc}
          style={{ borderRadius: '7px', width: "380px", height: '285px', cursor: 'pointer' }}
          alt="ImageProject"
        />
      </Grid>
      <Grid container direction='column'
        style={{
          padding: '30px',
          paddingBottom: '10px',
          marginTop: '-7px',
          borderBottomLeftRadius: '5px',
          borderBottomRightRadius: '5px',
          backgroundColor: "#262626"}}>
        <Grid item style={{ marginBottom: '-2px', width: '100%', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "#efefef", fontSize: "17px"  }}>
          <span style={titleStyle}>
            {data.title}
          </span>
        </Grid>
        { projectSelected !== data.title ? (
          <Grid item>
          <span style={typeStyle}>
            {data.categorie}
          </span>
        </Grid>
        ) : (
          <Grid container direction='row' style={{alignItems: 'center'}}>

            <Grid item
              style={{
                paddingRight: '10px',
                cursor: 'pointer'}}
                onMouseEnter={() => setIsMouseOnShowProject(true)}
                onMouseLeave={() => setIsMouseOnShowProject(false)}
                onClick={() => window.open(data.link, '_blank')}>
              <span style={showProjectStyle}>
                Show project
              </span>
            </Grid>
            <Grid item style={{color: 'grey', backgroundColor: 'grey', width: '50px', height: '2px', marginTop: '4px'}}/>
          </Grid>
        )}
       <Grid container direction='row' style={{paddingTop: '10px'}}>
          {data.langages.map((langage, index) => {

            const langageObjet = competencesLogo.find(item => item.langage === langage);

            return (
              <Grid item key={index}
                style={{
                  paddingRight: index === data.langages.length ? '0px' : '10px'
                }}>
                  <img
                    src={langageObjet ? langageObjet.logo : ''}
                    style={{ width: "40px", height: '40px', borderRadius: '50%' }}
                    alt="ImageCompetence"
                  />
              </Grid>
            );
          })}
        </Grid>

      </Grid>
    </Grid>
  );
}

const ProjectsList = ({ datas, sectionSelected }) => {

  const [projectsDatas, setProjectsDatas] = useState([]);
  const [projectSelected, setProjectSelected] = useState("");
  
  useEffect(() => {
    const tmpProjects = getProjectsData(sectionSelected);
    
    setProjectsDatas(tmpProjects);
  }, [sectionSelected, projectsDatas]);

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
        <Grid item key={index}
          onMouseEnter={() => setProjectSelected(projectData.title)}
          onMouseLeave={() => setProjectSelected("")}
          style={{paddingRight: index === projectsDatas.length ? '0px' : '36px', paddingBottom: '40px'}}>
          <Project data={projectData} projectSelected={projectSelected} />
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
      id='work'
      style={{width: '100%', maxWidth: '1250px', margin: '0 auto' }}>
      <Grid item>
        <Grid>
          <Title title1='My' title2='Works' />
        </Grid>
      </Grid>

      <Grid item style={{paddingBottom: '40px'}}>
        <FilterProjects datas={datas} sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
      </Grid>
      <Grid item>
        <ProjectsList datas={datas} sectionSelected={sectionSelected} />
      </Grid>
    </Grid>
  );
}

export default WorkPage;
