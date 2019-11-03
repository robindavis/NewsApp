// Library Imports
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Custom Imports
import FooterStyle from './FooterStyle';
import SiteDescription from '../SiteDescription/SiteDescription';
import SiteColorPicker from '../SiteColorPicker/SiteColorPicker';

const Footer = props => {
  const classes = makeStyles(FooterStyle(props.themeName))();
  return (
    <Grid item container className={classes.footerContainer}>
      <SiteDescription />
      <SiteColorPicker />
    </Grid>
    );
};

const mapStateToProps = state => ({
  themeName: state.selectedTheme.name
});

// Exports
export default connect(mapStateToProps)(Footer);