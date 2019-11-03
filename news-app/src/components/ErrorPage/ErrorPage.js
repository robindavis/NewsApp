// Library Imports
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Custom Imports
import ErrorPageStyle from './ErrorPageStyle';

const ErrorPage = props => {
  const classes = makeStyles(ErrorPageStyle(props.themeName))();
  return (
    <Grid item direction="column" container justify="center" alignItems="center" className={classes.errorPageContainer}>
      <h2>
        Sorry, this navigation link is not available.<br/><br/>
        Don't worry, you can below links to get back:
        <ol>
          <li>
            <Link to="/about" className={classes.linkContainer}>News</Link>
          </li>
          <li>
            <Link to="/about" className={classes.linkContainer}>About</Link>
          </li>
        </ol>
      </h2>
    </Grid>
    );
};

const mapStateToProps = state => ({
  themeName: state.selectedTheme.name
});

// Exports
export default connect(mapStateToProps)(ErrorPage);