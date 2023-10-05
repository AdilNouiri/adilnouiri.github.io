import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { dataExperience } from '../Datas/Datas.js';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const textTitle = {
  fontSize: '65px',
  textShadow: '1px 3px 11px rgba(0,0,0,.3)',
  letterSpacing: '-0.2px',
  fontFamily: 'Poppins-Medium',
  fontWeight: '600',
  color: 'white',
  margin: '0',
  boxSizing: 'border-box',
  lineHeight: '1.4',
};

const responsiveTextTitle = {
  ...textTitle,
  fontSize: '12.3vw',
};

const Title = ({ title1, title2, windowWidth  }) => {

  const titleStyle = windowWidth <= 529 ? responsiveTextTitle : textTitle;

  return (
    <Grid container direction='column' style={{ alignItems: 'center' }}>
      <Grid item>
        <span style={titleStyle}>{title1}</span>
      </Grid>
      <Grid item style={{ paddingBottom: '20px', marginTop: '-20px' }}>
        <span style={titleStyle}>{title2}</span>
      </Grid>
    </Grid>
  );
};

const WindowInformation = ({data, windowWidth, isPopupOpen, setIsPopupOpen}) => {

  const textStyle = {
    color: 'white',
    fontSize: '18px',
    fontFamily: 'ArabotoMedium',
    lineHeight: '1.3',
    letterSpacing: '0',
  };

  const buttonStyle = {
    color: 'white',
    fontSize: '20px',
  };
  
  const clickPopup = () => {
    setIsPopupOpen(data.post);
  };

  const unClickPopup = () => {
    setIsPopupOpen("");
  };

  return (
    <Grid
      container
      direction='row'
      style={{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#420d78',
        borderRadius: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      <Grid item style={{ flex: 1 }}>
        <span style={textStyle}>
          {data.post} @ {data.company}
        </span>
      </Grid>

      <Grid item>
        <Grid container direction='row'>
          {windowWidth >= 529 && (
            <Grid item style={{ paddingRight: '25px', marginTop: '0.5px' }}>
              <span style={textStyle}>{data.date}</span>
            </Grid>
          )}
          <Grid item
            style={{
              marginTop: '3.5px',
              flex: 1,
              cursor:'pointer'
              }}>
                { isPopupOpen === data.post ? (
                  <RemoveIcon style={buttonStyle} onClick={unClickPopup} />
                ) : (
                  <AddIcon style={buttonStyle} onClick={clickPopup} />
                )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const FirstLineInformation = ({data}) => {
  
  const [isMouseOnLink, setIsMouseOnLink] = useState(false);

  const mouseOnAction = () => {
    setIsMouseOnLink(true);
  };

  const mouseOutAction = () => {
    setIsMouseOnLink(false);
  };

  const openLink = () => {
    window.open(data.companyLink, '_blank')
  }

  const iconStyle = {
    color: '#bb77ff',
    fontSize: '24px',
    justifyContent: 'space-between',
    backgroundColor: '#241d41',
    marginTop: '1px'
  };

  const LocationStyle = {
    color: '#c8c6cf',
    fontSize: '17px',
    fontWeight: 400,
    fontFamily: 'ArabotoLight',
    wordBreak: 'break-word',
    textAlign: 'left',
  };

  const LinkStyle = {
    color: isMouseOnLink ?  '#66d9ed' : '#c8c6cf',
    fontSize: '17px',
    fontWeight: 400,
    fontFamily: 'ArabotoLight',
    wordBreak: 'break-word',
    textAlign: 'left',
  };

  return (
    <Grid container direction='row'>
      <Grid item style={{paddingRight: '10px'}}>
        <LocationOnIcon style={iconStyle}/>
      </Grid>
      <Grid item style={{paddingRight: '10px'}}>
        <span style={LocationStyle}>
          {data.localisation}
        </span>
      </Grid>
      <Grid item>
        <Grid container
          onMouseEnter={mouseOnAction}
          onMouseLeave={mouseOutAction}
          direction='row'
          style={{
            cursor: 'pointer'
          }}>
          <Grid item style={{paddingRight: '10px'}}>
            <OpenInNewIcon style={iconStyle}/>
          </Grid>
          <Grid item onClick={openLink}>
            <span style={LinkStyle}>
              {data.companyLinkText}
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const LangageBox = ({name}) => {

  const langageText = {
    color: '#b2b5da',
    margin: '30px',
    fontSize: '18px'
  };

  return (
    <Grid item
      style={{
        backgroundColor: '#2c3599',
        borderRadius: '10px'
      }}>
      <span style={langageText}>
        {name}
      </span>
    </Grid>
  );
}

const ListLangages = ({data}) => {
  return (
    <Grid container direction='row'>
      { data.langages.map((langage, index) => {
        return (
          <Grid item style={{paddingRight: '10px', paddingBottom: '10px'}}>
            <LangageBox name={langage} key={index}/>
          </Grid>
        );
      })}
    </Grid>
  );
}

const WindowOpenInformation = ({data, windowWidth}) => {

  const descriptionText = {
    color: 'white',
    fontSize: '18px'
  };

  return (
    <Grid container direction='row'
      style={{
        paddingTop: '30px',
        paddingBottom: '30px',
        paddingLeft: '20px',
        paddingRight: '20px',
        justifyContent: 'space-between',
        borderRadius: '10px',
        backgroundColor: '#241d41',
    }}>
      <Grid item style={{width: windowWidth >= 789 ? '80%' : '100%'}}>
        { windowWidth <= 789 && (
          <Grid item style={{paddingBottom: '20px'}}>
            <img
              src={data.logoImage}
              style={{ borderRadius: '50%', width: "90px", height: '90px' }}
              alt="ImageCompany"
            />
          </Grid>
        )}
        <Grid container direction='column'>
          <Grid item style={{marginLeft: '-7px', paddingBottom: '10px'}}>
            <FirstLineInformation data={data} />
          </Grid>
          <Grid item style={{paddingBottom: '20px'}}>
            <span style={descriptionText}>
              {data.description}
            </span>
          </Grid>
          <Grid item>
            <ListLangages data={data} />
          </Grid>
        </Grid>
      </Grid>
      { windowWidth >= 789 && (
        <Grid item>
          <img
            src={data.logoImage}
            style={{ borderRadius: '50%', width: "90px", height: '90px' }}
            alt="ImageCompany"
          />
        </Grid>
      )}
    </Grid>
  );
}

const ExperienceWindow = ({ data, windowWidth, isPopupOpen, setIsPopupOpen }) => {

  return (
    <Grid container direction='column'>
      <Grid item>
        <WindowInformation data={data} windowWidth={windowWidth} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
      </Grid>
      { isPopupOpen === data.post && (
        <Grid item style={{paddingTop: '20px'}}>
          <WindowOpenInformation data={data} windowWidth={windowWidth}/>
        </Grid>
      )}
    </Grid>
  );
};



const ExperiencePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPopupOpen, setIsPopupOpen] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxWidth = windowWidth > 700 ? 700 : (windowWidth - 30);

  return (
    <Grid
      container
      direction='column'
      id='experience'
      style={{
        alignItems: 'center',
        width: '100%'
      }}
    >
      <Grid item style={{paddingBottom: '20px' }}>
        <Grid>
          <Title title1='Professional' title2='Experience' windowWidth={windowWidth} />
        </Grid>
      </Grid>
      <Grid item style={{ width: `${maxWidth}px` }}>
        <Grid container direction='column'>
          {dataExperience.map((experience, index) => (
            <Grid item key={index} style={{paddingBottom: index === dataExperience.length - 1 ? '0px' : '15px'}}>
              <ExperienceWindow data={experience} windowWidth={windowWidth} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperiencePage;
