import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import ScrollToComponent from '../../Utils/ScrollToComponent';
import { motion, AnimatePresence } from 'framer-motion';

const LeftSide = ({ closeSideNavbar }) => {
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
    transition: 'all 0.3s ease',
  };

  const linkContainerStyle = {
    position: 'relative',
    marginTop: '15px',
    '&:hover': {
      transform: 'translateX(10px)',
    },
  };

  const creditText = {
    fontSize: '0.9rem',
    fontFamily: 'ArabotoNormal',
    whiteSpace: 'normal',
    color: 'black',
  };

  const navigateOnClick = (section) => {
    const sectionName = '#' + section.replace(/\//g, '').trim();

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
      direction="column"
      spacing={3}
      style={{
        paddingLeft: '4.4vh',
        paddingRight: '4.4vh',
        backgroundColor: 'white',
        height: '105vh',
        marginLeft: '-50px',
      }}
    >
      <Grid item style={{ marginLeft: '-5px', paddingTop: '50px' }}>
        <motion.div
          onClick={closeSideNavbar}
          onMouseEnter={() => setIsMouseOn(true)}
          onMouseLeave={() => setIsMouseOn(false)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
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
            justifyContent: 'center',
          }}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <CloseIcon style={{ color: 'black' }} />
          </motion.div>
        </motion.div>
      </Grid>
      <Grid item style={{ width: '70px', height: '56px' }} />
      <Grid item style={{ paddingTop: '20px' }}>
        {sectionNames.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Grid item onClick={() => navigateOnClick(section)} style={linkContainerStyle}>
                <motion.span
                  style={sectionNameStyle}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {section}
                </motion.span>
              </Grid>
            </motion.div>
          </motion.div>
        ))}
      </Grid>
      <Grid item style={{ flexGrow: 1 }} />
      <Grid item style={{ paddingBottom: '0px' }}>
        <span style={creditText}>© 2025. Made with passion by Nouiri Adil.</span>
      </Grid>
      <Grid item style={{ marginTop: '-20px', paddingBottom: '40px' }}>
        <span style={creditText}>All right reserved.</span>
      </Grid>
    </Grid>
  );
};

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
};

const SideNavbar = ({ setIsOpenMenu }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  const closeSideNavbar = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpenMenu(false);
    }, 200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
            }}
            onClick={closeSideNavbar}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
            style={{
              position: 'fixed',
              zIndex: 9999,
              display: 'flex',
              width: '100%',
              height: '100vh',
            }}
          >
            <LeftSide closeSideNavbar={closeSideNavbar} />
            <RightClickableSide closeSideNavbar={closeSideNavbar} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNavbar;
