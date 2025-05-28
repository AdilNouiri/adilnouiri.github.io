import { Grid } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

const MenuNavbar = () => {

  const [isMouseOn, setIsMouseOn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container
        direction='column'
        onMouseEnter={() => setIsMouseOn(true)}
        onMouseLeave={() => setIsMouseOn(false)}
        style={{
          height: '100%',
          justifyContent: 'center'
        }} >
        <motion.div 
          style={{ 
            backgroundColor: isMouseOn ? '#80808030' : '#80808005', 
            borderRadius: '50%', 
            width: '56px', 
            height: '56px', 
            position: 'absolute', 
            zIndex: '0', 
            marginLeft: '-17px' 
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <motion.div 
          style={{ 
            width: '20px', 
            height: '2px', 
            backgroundColor: isMouseOn ? '#66d9ed' : 'white', 
            marginBottom: '7px', 
            borderRadius: '20px', 
            zIndex: '1' 
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <motion.div 
          style={{ 
            width: '20px', 
            height: '2px', 
            backgroundColor: isMouseOn ? '#66d9ed' : 'white', 
            borderRadius: '90px', 
            zIndex: '1' 
          }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
      </Grid>
    </motion.div>
  );
}

export default MenuNavbar;
