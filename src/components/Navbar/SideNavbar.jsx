import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useEffect } from 'react';
import ScrollToComponent from '../../Utils/ScrollToComponent';
import { motion } from 'framer-motion';

const LeftSide = ({ closeSideNavbar}) => {

  const [isMouseOn, setIsMouseOn] = useState(false);

  const sectionNames = [
    '// home',
    // '// about me',
    '// expertise',
    '// work',
    '// experience',
    '// contact',
  ];

  const sectionNameStyle = {
    fontSize: '1.0rem',
    fontFamily: 'ArabotoBold',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    color: 'black',
    letterSpacing: '1.5px',
  };

  const creditText = {
    fontSize: '0.9rem',
    fontFamily: 'ArabotoNormal',
    whiteSpace: 'normal',
    color: 'black',
  };

  const navigateOnClick = (section) => {
    const sectionName = "#" + section.replace(/\//g, "").trim();

      closeSideNavbar();
      setTimeout(() => {
        ScrollToComponent(sectionName);
      }, 500);
  };
  

  return (
      <Grid
        container
        item
        xs={9}
        direction='column'
        spacing={3}
        style={{
          paddingLeft: '4.4vh',
          paddingRight: '4.4vh',
          paddingTop: '45px',
          backgroundColor: 'white',
          height: '',
        }}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
        <Grid item
          onClick={closeSideNavbar}
          onMouseEnter={() => setIsMouseOn(true)}
          onMouseLeave={() => setIsMouseOn(false)}
          style={{
            cursor: 'pointer',
            backgroundColor: isMouseOn ? '#80808040' : '#80808010',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            position: 'absolute',
            marginTop: '7px',
            marginLeft: '-5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
        >
          <CloseIcon style={{ color: 'black' }} />
        </Grid>
        <Grid item style={{ width: '70px', height: '56px' }} />
        <Grid item style={{ paddingTop: '20px' }}>
        {
          sectionNames.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Grid item onClick={() => navigateOnClick(section)} style={{ marginTop: '15px' }}>
                <span style={sectionNameStyle}>{section}</span>
              </Grid>
            </motion.div>
          ))
        }
        </Grid>
        </motion.div>
        <Grid item style={{ flexGrow: 1 }} />
        <Grid item style={{ paddingBottom: '0px' }}>
          <span style={creditText}>
            © 2023. Made with passion by Nouiri Adil.
          </span>
        </Grid>
        <Grid item style={{ marginTop: '-20px', paddingBottom: '20px' }}>
          <span style={creditText}>All right reserved.</span>
        </Grid>
      </Grid >
  );
}

const RightClickableSide = ({ closeSideNavbar }) => {
  return (
    <Grid
      container
      item
      xs={3}
      onClick={closeSideNavbar}
      style={{
        height: '100vh',
        cursor: 'pointer',
      }}
    />
  );
}

const SideNavbar = ({ setIsOpenMenu }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const closeSideNavbar = () => {
    setTimeout(() => {
      setIsOpenMenu(false);
    }, 300);
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          zIndex: 499,
        }}
        onClick={closeSideNavbar}
      ></div>
      <Grid container direction='row' style={{ position: 'fixed', zIndex: 500 }}>
        <LeftSide closeSideNavbar={closeSideNavbar} />
        <RightClickableSide closeSideNavbar={closeSideNavbar} />
      </Grid>
    </div>
  );
};

export default SideNavbar;