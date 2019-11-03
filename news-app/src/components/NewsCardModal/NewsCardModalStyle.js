const NewsCardModalStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return NewsCardModalLightStyle;
    }
    case 'darkTheme': {
      return NewsCardModalBlackStyle;
    }
    default: {
      return NewsCardModalLightStyle;
    }
  }
};

const NewsCardModalLightStyle = theme => ({
  cardModalImageContainer: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '289px',
    width: '500px',
    margin: '20px 0 0'
  },
  dialogContainer: {
    height: '95%',
    width: '95%',
    margin: '0',
    maxHeight: '100%',
    maxWidth: '100%',
    backgroundColor: '#e8eef5',
    color: 'black'
  },
  cardModalContentContainer: {
    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto'
    }
  },
  cardModalHeadingContainer: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0 0'
  },
  externalLinkContainer: {
    textDecoration: 'none',
    color: 'red'
  },
  cardModalImageOuterContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  crossIconContainer: {
    height: '25px',
    width: '25px',
    border: '2px solid black',
    margin: '10px',
    borderRadius: '7px',
    cursor: 'pointer'
  },
  root: {
    color: '#000000de'
  }
});

const NewsCardModalBlackStyle = theme => ({
  cardModalImageContainer: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '289px',
    width: '500px',
    margin: '20px 0 0'
  },
  dialogContainer: {
    height: '95%',
    width: '95%',
    margin: '0',
    maxHeight: '100%',
    maxWidth: '100%',
    backgroundColor: '#868686',
    color: 'white'
  },
  cardModalContentContainer: {
    [theme.breakpoints.up('sm')]: {
      overflowY: 'auto'
    }
  },
  cardModalHeadingContainer: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0 0'
  },
  externalLinkContainer: {
    textDecoration: 'none',
    color: 'red'
  },
  cardModalImageOuterContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  crossIconContainer: {
    height: '25px',
    width: '25px',
    border: '2px solid black',
    margin: '10px',
    borderRadius: '7px',
    cursor: 'pointer'
  },
  root: {
    color: '#cecbcb'
  }
});

// Exports
export default NewsCardModalStyle;