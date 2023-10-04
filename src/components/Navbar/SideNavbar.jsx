import { Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import ScrollToComponent from '../../Utils/ScrollToComponent';

const LeftSide = ({ closeSideNavbar}) => {

  const [isMouseOn, setIsMouseOn] = useState(false);

  const sectionNames = [
    '// home',
    '// about me',
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
      xs={10}
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
          marginLeft: '8px',
          marginTop: '7px'
        }} />
      <Grid item style={{ width: '70px' }}>
        <CloseIcon />
      </Grid>
      {
        sectionNames.map((section, index) => (
          <Grid item key={index} onClick={() => navigateOnClick(section)}>
            <span style={sectionNameStyle}>{section}</span>
          </Grid>
        ))
      }
      <Grid item style={{ paddingTop: '50px' }}>
        <span style={creditText}>
          © 2023. Made with passion by Nouiri Adil.
        </span>
      </Grid>
      <Grid item style={{ marginTop: '-20px' }}>
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
      xs={2}
      onClick={closeSideNavbar}
      style={{
        height: '100vh',
        cursor: 'pointer',
      }}
    />
  );
}

const SideNavbar = ({ setIsOpenMenu }) => {

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
          background: 'rgba(0, 0, 0, 0.8)',
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
