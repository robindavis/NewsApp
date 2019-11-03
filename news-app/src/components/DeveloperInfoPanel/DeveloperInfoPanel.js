// Library Imports
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

// Custom Imports
import DeveloperInfoPanelStyle from './DeveloperInfoPanelStyle';
import { updateSelectedTabIndex } from '../../redux/NavigationBar/NavigationBarAction';
import DeveloperProfilePic from '../../utils/Images/DeveloperProfilePic.jpg';
import getElapsedYearCount from '../../utils/ElapsedTimeCount/ElapsedTimeCount';
import FirebaseLogo from '../../utils/Images/FirebaseLogo.png';
import MaterialUILogo from '../../utils/Images/MaterialUILogo.png';
import NPMLogo from '../../utils/Images/NPMLogo.png';
import ReactLogo from '../../utils/Images/ReactLogo.png';
import FacebookLogo from '../../utils/Images/FacebookLogo.png';
import GmailLogo from '../../utils/Images/GmailLogo.png';
import LinkedInLogo from '../../utils/Images/LinkedInLogo.png';
import TwitterLogo from '../../utils/Images/TwitterLogo.png';
import ReduxLogo from '../../utils/Images/ReduxLogo.png';
import GithubBlackLogo from '../../utils/Images/GithubBlackLogo.png';
import GithubWhiteLogo from '../../utils/Images/GithubWhiteLogo.png';
import ReduxSagaLogo from '../../utils/Images/ReduxSagaLogo.png';
import ReactRouterDOMLogo from '../../utils/Images/ReactRouterDOMLogo.png';

const DeveloperInfoPanel = props => {
  const onlineConnectURLs = {
    githubRepo: 'https://github.com/robindavis/NewsApp',
    gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=robin.dvs007@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/robin-davis-6b4631131',
    facebook: 'https://www.facebook.com/robin.davis.5496',
    twitter: 'https://twitter.com/RobinDavis007'
  };
  const classes = makeStyles(DeveloperInfoPanelStyle(props.themeName))();
  useEffect(()=>{props.updateSelectedTabIndex(1);}, [props]);
  return (
    <Grid item container className={classes.developerInfoPanelContainer}>
      <Grid direction="column" container justify="flex-start" alignItems="center">
        <Avatar alt="Robin Davis" src={DeveloperProfilePic} className={classes.developerProfilePic} />
        <strong className={classes.developerDescriptionContainer}>
          Robin Davis (Front-End Developer)
        </strong>
        <strong className={classes.developerDescriptionContainer}>
          Work Experience: {getElapsedYearCount('7 Nov 2017')} yrs
        </strong>
        <Grid container item justify="center" alignItems="center" direction="column">
          <Grid container direction="column" alignItems="center" className={classes.techStackContainer}>
            <div  className={classes.techStackHeading}>Technologies Used</div>
            <Grid direction="row" container className={classes.techStackItemContainer}>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
                <img alt="React Logo" src={ReactLogo} className={classes.techStackLogo}/>
                <div>React</div>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
                <img alt="React Logo" src={ReactRouterDOMLogo} className={classes.techStackLogo}/>
                <div>React Router DOM</div>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
                <img alt="Redux Logo" src={ReduxLogo} className={classes.techStackLogo}/>
                <div>Redux</div>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
                <img alt="Redux Logo" src={ReduxSagaLogo} className={classes.techStackLogo}/>
                <div>Redux Saga</div>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
                <img alt="Material UI Logo" src={MaterialUILogo} className={classes.techStackLogo}/>
                <div>Material UI</div>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
                <img alt="NPM Logo" src={NPMLogo} className={classes.techStackLogo}/>
                <div>NPM</div>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.techStackItem}>
                <img alt="Firebase Logo" src={FirebaseLogo} className={classes.techStackLogo}/>
                <div>Firebase</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justify="center" alignItems="center" direction="column">
          <Grid container direction="column" alignItems="center" className={classes.sourceCodeContainer}>
            <div  className={classes.sourceCodeHeading}>Source Code</div>
            <Grid container className={classes.sourceCodeItemContainer}>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.sourceCodeItem}>
                <a href={onlineConnectURLs.githubRepo} rel="noopener noreferrer" target="_blank">
                <Tooltip disableFocusListener title="Github Repo" TransitionComponent={Zoom} placement="bottom">
                <img alt="Github Logo" src={(props.themeName === 'lightTheme') ? GithubBlackLogo : GithubWhiteLogo} className={classes.sourceCodeLogo}/>
                </Tooltip>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item justify="center" alignItems="center" direction="column">
          <Grid container direction="column" alignItems="center" className={classes.onlineConnectContainer}>
            <div  className={classes.onlineConnectHeading}>Contact Me</div>
            <Grid container className={classes.onlineConnnectItemContainer}>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
                <a href={onlineConnectURLs.gmail} rel="noopener noreferrer" target="_blank">
                <Tooltip disableFocusListener title="Gmail" TransitionComponent={Zoom} placement="bottom">
                <img alt="Gmail Logo" src={GmailLogo} className={classes.onlineConnectLogo}/>
                </Tooltip>
                </a>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
                <a href={onlineConnectURLs.linkedIn} target="_blank" rel="noopener noreferrer">
                <Tooltip disableFocusListener title="Linked In" TransitionComponent={Zoom} placement="bottom">
                <img alt="LinkedIn Logo" src={LinkedInLogo} className={classes.onlineConnectLogo}/>
                </Tooltip>
                </a>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
                <a href={onlineConnectURLs.facebook} target="_blank" rel="noopener noreferrer">
                <Tooltip disableFocusListener title="Facebook" TransitionComponent={Zoom} placement="bottom">
                <img alt="Facebook Logo" src={FacebookLogo} className={classes.onlineConnectLogo}/>
                </Tooltip>
                </a>
              </Grid>
              <Grid container item direction="column" justify="center" alignItems="center" className={classes.onlineConnectItem}>
                <a href={onlineConnectURLs.twitter} target="_blank" rel="noopener noreferrer">
                <Tooltip disableFocusListener title="Twitter" TransitionComponent={Zoom} placement="bottom">
                <img alt="Twitter Logo" src={TwitterLogo} className={classes.onlineConnectLogo}/>
                </Tooltip>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
};

const mapStateToProps = state => ({
  themeName: state.selectedTheme.name
});

const mapDispatchToProps = dispatch => ({
  updateSelectedTabIndex: currentTabIndex => dispatch(updateSelectedTabIndex(currentTabIndex))
});

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(DeveloperInfoPanel);

