const NewsPanelStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return NewsPanelLightStyle;
    }
    case 'darkTheme': {
      return NewsPanelBlackStyle;
    }
    default: {
      return NewsPanelLightStyle;
    }
  }
};

const NewsPanelLightStyle = theme => ({
  newsPanelContainer: {
    overflow: 'hidden',
    flex: '1',
    flexDirection: 'column',
    backgroundColor: 'white',
    color: 'black'
  },
  searchInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '35px'
  },
  searchResultContainer: {
    flexDirection: 'row',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto'
  },
  searchInputBox: {
    [theme.breakpoints.down('xs')]: {
      flex: '1',
      minWidth: '0',
      margin: '0 10px'
    },
    [theme.breakpoints.up('xs')]: {
      width: '347px',
      marginRight: '10px'
    },
    backgroundColor: 'white',
    color: 'black'
  },
  searchButton: {
    backgroundColor: '#3f51b5',
    color: 'white',
    height: '33px',
    width: '33px',
    lineHeight: '1.75',
    borderRadius: '4px',
    textTransform: 'uppercase',
    outline: 'none'
  }
});

const NewsPanelBlackStyle = theme => ({
  newsPanelContainer: {
    overflow: 'hidden',
    flex: '1',
    flexDirection: 'column',
    backgroundColor: 'black',
    color: 'white'
  },
  searchInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '35px'
  },
  searchResultContainer: {
    flexDirection: 'row',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto'
  },
  searchInputBox: {
    [theme.breakpoints.down('xs')]: {
      flex: '1',
      minWidth: '0',
      margin: '0 10px'
    },
    [theme.breakpoints.up('xs')]: {
      width: '347px',
      marginRight: '10px'
    },
    backgroundColor: 'black',
    color: 'white'
  },
  searchButton: {
    backgroundColor: 'white',
    color: 'white',
    height: '34px',
    width: '34px',
    lineHeight: '1.75',
    borderRadius: '4px',
    textTransform: 'uppercase',
    outline: 'none'
  }
});

// Exports
export default NewsPanelStyle;