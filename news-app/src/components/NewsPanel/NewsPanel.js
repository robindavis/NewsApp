// Library Imports
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

// Custom Imports
import NewsPanelStyle from './NewsPanelStyle';
import { updateSelectedTabIndex } from '../../redux/NavigationBar/NavigationBarAction';
import { fetchNewsResult } from '../../redux/NewsResult/NewsResultAction';
import NewsCard from '../NewsCard/NewsCard';
import SearchIconWhite from '../../utils/Images/SearchIconWhite.jpg';
import SearchIconBlack from '../../utils/Images/SearchIconBlack.png';
import NewsCardModal from '../NewsCardModal/NewsCardModal';

const NewsPanel = props => {
  const classes = makeStyles(NewsPanelStyle(props.themeName))();
  const [ searchParam, setSearchParam ] = useState('');
  useEffect(()=>{
    props.updateSelectedTabIndex(0);
    props.fetchNewsResult('', 'top-headlines');
    setSearchParam('');
  }, [props]);
  const handleSearchQueryChange = (event) => {
    if (event.key === 'Enter') {
      props.fetchNewsResult(event.target.value, 'everything');
      return;
    }
    setSearchParam(event.target.value);
  };
  const handleSearchButtonClick = () => {
    props.fetchNewsResult(searchParam, 'everything');
  }
  return (
    <Grid item container className={classes.newsPanelContainer}>
      <Grid item container className={classes.searchInputContainer}>
        <input
          type='text'
          id="searchKey"
          placeholder="Type Here"
          name="searchKey"
          margin="normal"
          variant="outlined"
          value={searchParam}
          onChange={handleSearchQueryChange}
          onKeyDown={handleSearchQueryChange}
          className={classes.searchInputBox}
        />
        <button
          className={classes.searchButton}
          onClick={handleSearchButtonClick}
          style={{'backgroundImage':`url(${
            (props.themeName === 'lightTheme') ? SearchIconWhite : SearchIconBlack
          })`}}
        >
        </button>
      </Grid>
      <Grid item container className={classes.searchResultContainer}>
        <NewsCard />
        <NewsCardModal />
      </Grid>
    </Grid>
    );
};

const mapStateToProps = state => ({
  themeName: state.selectedTheme.name
});

const mapDispatchToProps = dispatch => ({
  updateSelectedTabIndex: currentTabIndex => dispatch(updateSelectedTabIndex(currentTabIndex)),
  fetchNewsResult: (searchParam, category) => dispatch(fetchNewsResult(searchParam, category))
});

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(NewsPanel);
