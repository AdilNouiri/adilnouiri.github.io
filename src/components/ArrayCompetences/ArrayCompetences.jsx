import { Grid } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import LanguageIcon from '@mui/icons-material/Language';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { competenceLogos } from '../../Datas/Datas';

const TitleField = ({ icon, title1, title2, bandColor, bandSize }) => {
  const titleStyle = {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: '26px',
    fontWeight: '600',
    lineHeight: '1.2em',
    margin: '1px',
    letterSpacing: '-0.1em',
    position: 'relative',
    zIndex: '1',
  };

  const Band = ({ bandSize }) => {
    return (
      <Grid item style={{
        border: `2px solid ${bandColor}`,
        width: bandSize,
        borderRadius: '50px',
        height: '7px',
        backgroundColor: bandColor,
        zIndex: '0',
        marginTop: '-10px',
      }} />
    );
  };

  return (
    <Grid container direction='row' alignItems='center' spacing={2}>
      <Grid item>
        {icon}
      </Grid>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <h5 style={titleStyle}>
              {title1}
            </h5>
          </Grid>
          <Grid item>
            <Band bandSize={bandSize} />
          </Grid>
          <Grid item>
            <h5 style={titleStyle}>
              {title2}
            </h5>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const DescriptionField = ({ description }) => {
  const descriptionStyle = {
    color: 'white',
    fontWeight: '400',
    lineHeight: '1.4em',
    fontFamily: 'Roboto',
    wordWrap: 'break-word',
    fontSize: '17px'
  };

  const h3Style = {
    color: 'grey',
    fontSize: '14px'
  };

  return (
    <Grid container direction='row' alignItems='center'>
      <Grid item>
        <Grid container direction='column' style={{ borderWidth: '3px 1.5px 3px 3px', borderColor: '#a3a3a3', alignItems: 'center' }}>
          <Grid item style={{ paddingBottom: '10px' }}>
            <span style={h3Style}>
              {'<h3>'}
            </span>
          </Grid>
          <Grid item style={{ height: '80px', border: '1px solid grey', marginBottom: '10px' }} />
          <Grid item>
            <span style={h3Style}>
              {'<h3>'}
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ flex: 1, paddingLeft: '7px' }}>
        <span style={descriptionStyle}>
          {description}
        </span>
      </Grid>
    </Grid>
  );
};

const Icon = ({ type }) => {
  const iconStyle = {
    width: '50px',
    height: '50px',
    color: 'white',
  };

  return (
    <Grid item>
      {type === 'computer' ?
        <ComputerIcon style={iconStyle} /> :
        type === 'web' ? <LanguageIcon style={iconStyle} /> :
          type === 'mobile' ? <DeveloperModeIcon style={iconStyle} /> :
            type === 'back' ? <SettingsSystemDaydreamIcon style={iconStyle} /> :
            <DeleteIcon style={iconStyle} />}
    </Grid>
  );
};

const CompetenceLogos = ({ type }) => {
  const logos = competenceLogos[type] || [];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          zIndex: 2
        }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img 
              src={logo.src} 
              alt={logo.name}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const CompetenceBox = ({ dataBox, isLittle, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{
        rotateX: 10,
        rotateY: 15,
        scale: 1.05,
        x: -20,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Grid container direction='column'
        style={{
          border: '1px solid white',
          paddingTop: '40px',
          paddingBottom: '40px',
          paddingLeft: '30px',
          paddingRight: '30px',
          maxWidth: isLittle ? '362px' : '650px',
          minWidth: '260px',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          borderRadius: '10px',
          transform: 'translateZ(0)'
        }}>
        <Grid item>
          <TitleField icon={<Icon type={dataBox.type} />} title1={dataBox.title1} title2={dataBox.title2} bandColor={dataBox.bandColor} bandSize={dataBox.bandSize} />
        </Grid>
        <Grid item>
          <DescriptionField description={dataBox.description} />
        </Grid>
      </Grid>
      {isHovered && <CompetenceLogos type={dataBox.type} />}
    </motion.div>
  );
}
const QuoteBox = ({ quote, credits, isLittle }) => {

  const quoteStyle = {
    color: 'white',
    fontSize: '25px',
    lineHeight: '1.2em',
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    wordWrap: 'break-word',
  };

  const creditsStyle = {
    color: '#e1e1e1',
    fontSize: '15px',
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    wordWrap: 'break-word',
  };

  return (
    <Grid container direction='row'
      style={{
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '30px',
        maxWidth: '362px',
        minWidth: '200px',
        boxSizing: 'border-box'
      }}>
      <Grid item style={{ height: '195px', width: '10px', backgroundColor: '#b7f', border: '1px solid #b7f', marginBottom: '10px', marginRight: '20px' }} />
      <Grid container direction='column' style={{ display: 'flex', flex: 1 }}>
        <Grid item style={{ paddingBottom: '50px' }}>
          <span style={quoteStyle}>
            {quote}
          </span>
        </Grid>
        <Grid item>
          <span style={creditsStyle}>
            {credits}
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
}

const ArrayCompetences = ({ data }) => {
  // eslint-disable-next-line
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isWrapped, setIsWrapped] = useState(false);
  const [isLittle, setIsLittle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWrapped(window.innerWidth <= 1114 && window.innerWidth >= 760);
      setIsLittle(window.innerWidth >= 760);
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item>
        <CompetenceBox dataBox={data[0]} isLittle={isLittle} index={0} />
      </Grid>
      <Grid item>
        <CompetenceBox dataBox={data[1]} isLittle={isLittle} index={1} />
      </Grid>
      <Grid item>
        <CompetenceBox dataBox={data[2]} isLittle={isLittle} index={2} />
      </Grid>
      <Grid item>
        <CompetenceBox dataBox={data[3]} isLittle={isLittle} index={3} />
      </Grid>
      {isWrapped && (
        <Grid item>
          <QuoteBox quote='Sometimes the best way to solve a problem is to help others.' credits="- Uncle Iroh, 'Avatar: The Last Airbender'" />
        </Grid>
      )}
    </Grid>
  );
};

export default ArrayCompetences;
