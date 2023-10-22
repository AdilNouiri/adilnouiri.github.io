import { Grid } from '@mui/material';
import { useState } from 'react';
import ScrollToComponent from '../../Utils/ScrollToComponent';

const NavbarSection = ({ id, text, num, hovered, setHovered, isDown }) => {

  const sectionContainerStyle = {
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingBottom: '10px',
  };

  const sectionNameStyle = {
    fontSize: '1.0rem',
    fontFamily: 'ArabotoBold',
    color: isDown ? '#66d9ed' : (hovered === 'all' ? 'white' : (hovered === num ? 'white' : 'grey')),
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    letterSpacing: '2px',
    lineHeight: '0.5',
    transition: 'color 0.4s'
  };

  const sectionNumberContainerStyle = {
    fontSize: '0.55rem',
    fontFamily: 'ArabotoNormal',
    textAlign: 'right',
    cursor: 'pointer',
    transition: 'color 0.4s',
    color: isDown ? '#66d9ed' : (hovered === 'all' ? 'white' : (hovered === num ? 'white' : 'grey')),
    paddingBottom: '0.4rem'
  }

  return (
    <Grid container
      direction='column'
      onMouseOver={() => { setHovered(num) }}
      onMouseOut={() => { setHovered("all") }}
      onClick={() => { ScrollToComponent(id) }}
      style={sectionContainerStyle}>
      <span style={sectionNumberContainerStyle}>
        {num}
      </span>
      <span style={sectionNameStyle}>
        {text}
      </span>
    </Grid>
  )
};

const NavbarRight = ({isDown}) => {
  const [hovered, setHovered] = useState("all");

  return (
    <Grid container direction='row' >
      <Grid item>
        <NavbarSection id='#home' text='// home' num='01' hovered={hovered} setHovered={setHovered} isDown={isDown} />
      </Grid>
      {/* <Grid item>
        <NavbarSection id='#about me' text='// about me' num='02' hovered={hovered} setHovered={setHovered} isDown={isDown} />
      </Grid> */}
      <Grid item>
        <NavbarSection id='#expertise' text='// expertise' num='02' hovered={hovered} setHovered={setHovered} isDown={isDown} />
      </Grid>
      <Grid item>
        <NavbarSection id='#work' text='// work' num='03' hovered={hovered} setHovered={setHovered} isDown={isDown} />
      </Grid>
      <Grid item>
        <NavbarSection id='#experience' text='// experience' num='04' hovered={hovered} setHovered={setHovered} isDown={isDown} />
      </Grid>
      <Grid item>
        <NavbarSection id='#contact' text='// contact' num='05' hovered={hovered} setHovered={setHovered} isDown={isDown} />
      </Grid>
    </Grid>
  );
}

export default NavbarRight;
