import { Grid } from '@mui/material';
import '../Styles/ScrollDownIndicator.css'
import { motion } from 'framer-motion';

const Description = () => {

  const textTitle = {
    fontSize: '9vw',
    textShadow: window.innerWidth <= 768 ? '2px 2px 2px rgba(255,255,255,0.3)' : '5px 5px 3px rgba(255,255,255,0.5)',
    letterSpacing: '2.2px',
    textTransform: 'uppercase',
    fontFamily: 'Poppins-Medium',
    fontWeight: '600',
    color: 'white',
    margin: '0',
    boxSizing: 'border-box',
    lineHeight: '1',
  };

  const descriptionTitle = {
    fontSize: '22px',
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Poppins-Medium',
    wordWrap: 'break',
    textAlign: 'center',
    marginTop: '10px',
  };

  const CVTitle = {
    fontSize: '18px',
    color: 'white',
    fontFamily: 'Poppins-Medium',
    wordWrap: 'break',
    textAlign: 'center',
    margin: '20px'
  };

  const openCV = () => {
    const pdfLink = 'https://drive.google.com/file/d/1BkEe2rSloaZ7-4qLz5ExCWcQ7Uh1mbMo/view?usp=sharing';
  
    window.open(pdfLink, '_blank');
  };

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      style={{
        height: '100%'
      }}
    >
      <Grid item>
        <motion.h1 
          style={textTitle}
          initial={{ opacity: 0, y: -70, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          nouiri adil
        </motion.h1>
      </Grid>
      <Grid item>
        <motion.h5 
          style={descriptionTitle}
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Computer science, Full-Stack & App Developer.
        </motion.h5>
      </Grid>
      <Grid item>
        <motion.div
          style={{
            backgroundColor: '#66d9ed',
            borderRadius: '15px',
            paddingTop: '5px',
            paddingBottom: '5px',
            cursor: 'pointer',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            boxShadow: [
              '0 0 0 0 rgba(102, 217, 237, 0.4)',
              '0 0 0 15px rgba(102, 217, 237, 0)',
              '0 0 0 0 rgba(102, 217, 237, 0)'
            ]
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#4ac4d8',
            transition: { duration: 0.2 }
          }}
          onClick={openCV}
          transition={{
            opacity: { duration: 1.2, delay: 1 },
            scale: { duration: 1.2, delay: 1 },
            y: { duration: 1.2, delay: 1, ease: "easeOut" },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
              times: [0, 0.6, 1]
            }
          }}>
          <span style={CVTitle}>
            Download CV
          </span>
        </motion.div>
      </Grid>
      <Grid item
        onClick={() => {
          const element = document.getElementById('expertise');
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start'
            });
          }
        }}
        style={{ position: 'absolute', bottom: '40px', cursor: 'pointer' }}>
        <motion.div 
          className="button scroll"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
        >
          <span className="scroll-down-arrow"></span>
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default Description;
