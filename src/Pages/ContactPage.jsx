import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import {datasMedia} from '../Datas/Datas.js'

const Title = ({ title1, title2, title3, windowWidth }) => {

	const textTitle = {
		fontSize: '90px',
		textShadow: '1px 3px 11px rgba(0,0,0,.3)',
		fontFamily: 'Poppins-Medium',
		fontWeight: '600',
		color: 'white',
		margin: '0',
		letterSpacing: '-4.5px',
		boxSizing: 'border-box',
		lineHeight: '0.9',
	};

	const responsiveTextTitle = {
		...textTitle,
		fontSize: '14vw',
	};

	const titleStyle = windowWidth <= 628 ? responsiveTextTitle : textTitle;

  return (
    <Grid item>
      <Grid item>
        <span style={titleStyle}>
          {title1}
        </span>
      </Grid>
      <Grid item>
        <span style={titleStyle}>
          {title2}
        </span>
      </Grid>
			<Grid item>
        <span style={titleStyle}>
          {title3}
        </span>
      </Grid>
    </Grid>
  );
};

const SocialMedia = () => {
	return (
		<Grid container direction='row' style={{alignItems: 'center'}}>
			{ datasMedia.map((media, index) => {
				return (
					<Grid item
					key={index}
					style={{paddingRight: '10px'}}
					onClick={() => window.open(media.link, '_blank')}>
						<img
              src={media.logo}
              style={{ width: media.width, height: media.height, cursor: 'pointer' }}
							title={media.name}
              alt="ImageLogo"
            />
					</Grid>
				)
			})}
		</Grid>
	);
}

const Band = ({ bandSize }) => {
	return (
		<Grid item style={{
			border: `2px solid #9440e8`,
			width: bandSize,
			borderRadius: '50px',
			height: '7px',
			backgroundColor: '#9440e8',
			zIndex: '0',
			marginTop: '-10px',
		}} />
	);
};

const PopupUpOnEmail = ({mouseOn, isClicked}) => {
	return (
    <Grid item
      style={{
        backgroundColor: 'black',
        borderRadius: '10px',
        position: "absolute",
        padding: '8px',
        marginTop: '-50px',
        paddingLeft: '15px',
        paddingRight: '15px',
        opacity: '0.7',
        paddingBottom: '5px',
        opacity: mouseOn ? 1 : 0,
        transition: 'opacity 0.6s ease-in-out',
        textAlign: 'center'}}>
      <span style={{fontSize: '18px', color: 'white'}}>
        {isClicked ? 'Mail is copied !' : 'Copy mail to clipboard ?'}
      </span>
    </Grid>
	);
};

const ContactMe = ({windowWidth}) => {

	const [mouseOn, setMouseOn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const clickOnEmail = () => {
      const emailToCopy = "adil.nouiri@epitech.eu";
      const textArea = document.createElement("textarea");
      textArea.value = emailToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setIsClicked(true);
      return;
  };

	const textStyle = {
    color: 'white',
    fontFamily: 'ArabotoNormal',
    fontSize: '23px',
    fontWeight: 600,
    letterSpacing: '-1px'
};

	const emailStyle = {
		color: 'white',
		fontFamily: 'ArabotoNormal',
		fontSize: '30px',
		fontWeight: 600,
		letterSpacing: '-1px',
    cursor: 'pointer'
	};

	return (
		<Grid container
    direction='row'
    style={{
      width: windowWidth <= 510 ? '100%' : '90%',
      justifyContent: 'space-between',
      marginLeft: 'auto',}}>
    <Grid item style={{paddingBottom: windowWidth <= 956 ? '20px' : '0px'}}>
        <span style={textStyle}>
            Have an exciting project you need help with?
            <br />
            Send me an email or contact me via
            <br />
            instant message!
        </span>
    </Grid>
    <Grid item
		onMouseEnter={() => setMouseOn(true)}
		onMouseLeave={() => setMouseOn(false)}
    onClick={clickOnEmail}
		style={{paddingRight: '100px', paddingBottom: windowWidth <= 956 ? '50px' : '0px'}}>
				<PopupUpOnEmail mouseOn={mouseOn} isClicked={isClicked}/>
			<span style={emailStyle}>
				adil.nouiri@epitech.eu
			</span>
			<Band bandSize='300px'/>
		</Grid>
	</Grid>

	);
}

const MyCredit = ({isWrapped}) => {

	const nameStyle = {
		color: 'white',
		fontSize: '30px',
		fontFamily: 'Poppins-ExtraBoldItalic'
	};

	const jobStyle = {
		color: 'white',
		fontSize: '13px',
		fontFamily: 'Poppins-Medium'
	};

	return (
		<Grid
			container
			style={{
				textAlign: isWrapped ? 'left' : 'right'
			}}
			direction='column'>
			<Grid item>
				<span style={nameStyle}>
					© Adil Nouiri
				</span>
			</Grid>
			<Grid item style={{marginTop: '-15px'}}>
				<span style={jobStyle}>
					WEB & MOBILE FREELANCE DEVELOPER
				</span>
			</Grid>
		</Grid>
	);
}

const Footer = ({windowWidth}) => {

	if (windowWidth >= 860) {
		return (
			<Grid
				container
				direction='row'
				style={{
					justifyContent: 'space-between'
				}}>
					<Grid item>
						<SocialMedia />
					</Grid>
					<Grid item>
						<MyCredit isWrapped={false}/>
					</Grid>
			</Grid>
		);
	} else {
		return (
			<Grid
				container
				direction='column'
				style={{alignItems: 'flex-start'}}>
					<Grid item style={{paddingBottom: '5px'}}>
						<SocialMedia />
					</Grid>
					<Grid item>
						<MyCredit isWrapped={true}/>
					</Grid>
			</Grid>
		);
	}
}

const ContactPage = () => {

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
			id='contact'
			style={{width: '100%', maxWidth: '1250px', margin: '0 auto' }}>
			<Grid item style={{paddingBottom: '100px'}}>
				<Title title1='Wanna' title2='be starting' title3='something ?' windowWidth={windowWidth} />
			</Grid>
			<Grid item style={{paddingBottom: '50px'}}>
			  <ContactMe windowWidth={windowWidth}/>
			</Grid>
			<Grid item>
				<Footer windowWidth={windowWidth}/>
			</Grid>
		</Grid>
	);
}

  export default ContactPage;