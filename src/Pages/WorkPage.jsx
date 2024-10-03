import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { competencesLogo } from '../Datas/Datas.js';

const Title = ({ title1, title2, windowWidth }) => {

  const textTitle = {
    fontSize: windowWidth  <= 340 ? '27vw' : '100px',
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

const Project = ({ data, projectSelected, windowWidth }) => {

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
    cursor: 'pointer',
    fontSize: "17px",
    marginBottom: "5px",
    lineHeight: "1.1",
    fontFamily: "ArabotoLight"
  };

  return (
    <Grid container direction='column' style={{width: windowWidth <= 438 ? '80vw' : '380px' }}>
      <Grid item style={{ position: 'relative' }}>
        <img
          src={data.imageSrc}
          style={{
            borderRadius: '7px',
            width: windowWidth <= 438 ? '80vw' : '380px',
            height: '285px',
            cursor: 'pointer',
            filter: data.inprogress ? 'grayscale(100%)' : 'none',
            opacity: data.inprogress ? 0.4 : 1 
          }}
          alt="ImageProject"
        />
        {data.inprogress && (
          <span style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
            pointerEvents: 'none'
          }}>
            IN PROGRESS
          </span>
        )}
      </Grid>

      <Grid container direction='column'
        style={{
          padding: '30px',
          paddingBottom: '10px',
          marginTop: '-7px',
          height: '200px',
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
          <Grid container direction='row' style={{ alignItems: 'center' }}>
            <Grid item
              style={{
                paddingRight: '10px',
              }}
              onMouseEnter={() => {
                if (!data.inprogress)
                  setIsMouseOnShowProject(true)
              }}
              onMouseLeave={() => setIsMouseOnShowProject(false)}
              onClick={() => {
                if (!data.inprogress) {
                  window.open(data.link, '_blank');
                }
              }}>
              <span style={showProjectStyle}>
                {data.inprogress ? 'In Progress' : 'Show project'}
              </span>
            </Grid>
            <Grid item style={{ color: 'grey', backgroundColor: 'grey', width: '50px', height: '2px', marginTop: '4px' }} />
          </Grid>
        )}
       <Grid container direction='row' style={{paddingTop: '20px'}}>
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

const ProjectsList = ({ datas, sectionSelected, windowWidth }) => {

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
    <Grid container direction='row' style={{width: '100%'}}>
      {projectsDatas.map((projectData, index) => (
        <Grid item key={index}
          onMouseEnter={() => setProjectSelected(projectData.title)}
          onMouseLeave={() => setProjectSelected("")}
          style={{paddingRight: index === projectsDatas.length ? '0px' : '36px', paddingBottom: '40px'}}>
          <Project data={projectData} projectSelected={projectSelected} windowWidth={windowWidth}/>
        </Grid>
      ))}
    </Grid>
  );
}

const WorkPage = ({ datas }) => {

  const [sectionSelected, setSectionSelected] = useState('all');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Grid container
      direction='column'
      style={{
        width: '100%',
        maxWidth: '1250px',
        margin: '0 auto'
      }}>
      <Grid item id='work' style={{width: '100%', paddingTop: '40px'}}>
        <Grid>
          <Title title1='My' title2='Works' windowWidth={windowWidth}/>
        </Grid>
      </Grid>

      <Grid item style={{paddingBottom: '40px', width: '100%'}}>
        <FilterProjects datas={datas} sectionSelected={sectionSelected} setSectionSelected={setSectionSelected} />
      </Grid>
      <Grid item style={{width: '100%'}}>
        <ProjectsList datas={datas} sectionSelected={sectionSelected} windowWidth={windowWidth}/>
      </Grid>
    </Grid>
  );
}

export default WorkPage;
