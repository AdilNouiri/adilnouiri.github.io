import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { dataExperience } from '../Datas/Datas.js';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { motion, AnimatePresence } from 'framer-motion';

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center' }}
      >
        <Grid item>
          <span style={titleStyle}>{title1}</span>
        </Grid>
        <Grid item style={{ paddingBottom: '20px', marginTop: '-20px' }}>
          <span style={titleStyle}>{title2}</span>
        </Grid>
      </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Grid
        container
        direction='row'
        style={{
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#420d78',
          borderRadius: '10px',
          paddingTop: '20px',
          paddingBottom: '15px',
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
                marginTop: '0.5px',
                flex: 1,
                cursor:'pointer'
              }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                { isPopupOpen === data.post ? (
                  <RemoveIcon style={buttonStyle} onClick={unClickPopup} />
                ) : (
                  <AddIcon style={buttonStyle} onClick={clickPopup} />
                )}
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </motion.div>
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
          <Grid item onClick={openLink} style={{paddingRight: '10px'}}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <OpenInNewIcon style={iconStyle}/>
            </motion.div>
          </Grid>
          <Grid item onClick={openLink}>
            <motion.span
              style={LinkStyle}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {data.companyLinkText}
            </motion.span>
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
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Grid item
        style={{
          backgroundColor: '#2c3599',
          borderRadius: '10px'
        }}>
        <span style={langageText}>
          {name}
        </span>
      </Grid>
    </motion.div>
  );
}

const ListLangages = ({data}) => {
  return (
    <Grid container direction='row'>
      { data.langages.map((langage, index) => {
        return (
          <Grid item style={{paddingRight: '10px', paddingBottom: '10px'}} key={index}>
            <LangageBox name={langage} />
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
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
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
              <motion.img
                src={data.logoImage}
                style={{ borderRadius: '50%', width: "90px", height: '90px' }}
                alt="ImageCompany"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </Grid>
          )}
          <Grid container direction='column'>
            <Grid item style={{marginLeft: '-7px', paddingBottom: '10px'}}>
              <FirstLineInformation data={data} />
            </Grid>
            <Grid item style={{paddingBottom: '20px'}}>
              <motion.span
                style={descriptionText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {data.description}
              </motion.span>
            </Grid>
            <Grid item>
              <ListLangages data={data} />
            </Grid>
          </Grid>
        </Grid>
        { windowWidth >= 789 && (
          <Grid item>
            <motion.img
              src={data.logoImage}
              style={{ borderRadius: '50%', width: "90px", height: '90px' }}
              alt="ImageCompany"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 17 }}
            />
          </Grid>
        )}
      </Grid>
    </motion.div>
  );
}

const ExperienceWindow = ({ data, windowWidth, isPopupOpen, setIsPopupOpen }) => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <WindowInformation data={data} windowWidth={windowWidth} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
      </Grid>
      <AnimatePresence>
        { isPopupOpen === data.post && (
          <Grid item style={{paddingTop: '20px'}}>
            <WindowOpenInformation data={data} windowWidth={windowWidth}/>
          </Grid>
        )}
      </AnimatePresence>
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

  const maxWidth = windowWidth > 800 ? 800 : (windowWidth - 30);

  return (
    <Grid
      container
      direction='column'
      style={{
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Grid item id='experience' style={{ paddingTop: '60px', paddingBottom: '20px'}}>
        <Grid>
          <Title title1='Professional' title2='Experience' windowWidth={windowWidth} />
        </Grid>
      </Grid>
      <Grid item style={{ width: `${maxWidth}px` }}>
        <Grid container direction='column'>
          {dataExperience.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.2) }}
              style={{ width: '100%' }}
            >
              <Grid item style={{paddingBottom: index === dataExperience.length - 1 ? '0px' : '15px'}}>
                <ExperienceWindow data={experience} windowWidth={windowWidth} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
              </Grid>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperiencePage;
