// Library Imports
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Custom Imports
import NavigationBarStyle from './NavigationBarStyle';

const NavigationBar = props => {
  const classes = makeStyles(NavigationBarStyle(props.themeName))();

  return (
    <Grid item container className={classes.navigationBarContainer}>
      <AppBar position="static" color="default" className={classes.appBarContainer}>
        <Tabs value={props.currentTabIndex} variant="fullWidth">
          <Tab value={0} label="News" component={Link} to="/"/>
          <Tab value={1} label="About" component={Link} to="/about"/>
        </Tabs>
      </AppBar>
    </Grid>
    );
};

const mapStateToProps = state => ({
  currentTabIndex: state.navigationBar.currentTabIndex,
  themeName: state.selectedTheme.name
});

// Exports
export default connect(mapStateToProps)(NavigationBar);