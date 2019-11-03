// Library Imports
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Custom Components
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import MainStyle from './MainStyle';
import NewsPanel from '../NewsPanel/NewsPanel';
import DeveloperInfoPanel from '../DeveloperInfoPanel/DeveloperInfoPanel';
import ErrorPage from '../ErrorPage/ErrorPage';
import store from '../../redux/store';

const Main = () => {
  const classes = makeStyles(MainStyle)();
  return (
    <Provider store={store}>
      <Grid container direction="column" className={classes.mainContainer}>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <NewsPanel />
            </Route>
            <Route exact path="/about">
              <DeveloperInfoPanel />
            </Route>
            <Route path="*">
              <ErrorPage /> 
            </Route>
          </Switch>
        </Router>
        <Footer />
      </Grid>
    </Provider>
    );
}

// Exports
export default Main;