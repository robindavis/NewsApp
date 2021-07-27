// Library Imports
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Custom Imports
import SiteDescriptionStyle from './SiteDescriptionStyle';

const SiteDescription = props => {
  const classes = makeStyles(SiteDescriptionStyle(props.themeName))();
  return (
    <Grid item container className={classes.siteDescriptionContainer}>
      <div className={classes.attributionLinkContainer}>
        Powered by
        {/* Changed for testing mediaStack API */}
        {/* <a className={classes.attributionLink} href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
          &nbsp;NewsAPI.org&nbsp;
        </a> */}
        <a className={classes.attributionLink} href="https://gnews.io/" target="_blank" rel="noopener noreferrer">
          &nbsp;GNews&nbsp;
        </a>
      </div>
      <div className={classes.devNameContainer}>
        <span className={classes.articleCountContainer}>Articles Found: {props.resultCount}</span>
        <span className={classes.darkModeTextContainer}>Dark Mode</span>
      </div>
    </Grid>
    );
};

const mapStateToProps = state => ({
  resultCount: state.newsResults.articles.length,
  themeName: state.selectedTheme.name
});

// Exports
export default connect(mapStateToProps)(SiteDescription);