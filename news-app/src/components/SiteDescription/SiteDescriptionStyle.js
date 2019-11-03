const SiteDescriptionStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return SiteDescriptionLightStyle;
    }
    case 'darkTheme': {
      return SiteDescriptionBlackStyle;
    }
    default: {
      return SiteDescriptionLightStyle;
    }
  }
};

const SiteDescriptionLightStyle = theme => ({
  siteDescriptionContainer: {
    overflow: 'hidden',
    height: 'fit-content',
    flexBasis: '87%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  attributionLinkContainer: {
    fontWeight: 'bold',
    fontSize: '13px',
  },
  attributionLink: {
    color: 'black',
    textDecoration: 'none'
  },
  devNameContainer: {
    fontWeight: 'bold',
    display: 'flex',
    flex: '1',
    marginLeft: '3px',
    justifyContent: 'center',
    color: 'black',
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '17px'
    }
  },
  articleCountContainer: {
    flex: '1',
    textAlign: 'center'
  },
  darkModeTextContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
});

const SiteDescriptionBlackStyle = theme => ({
  siteDescriptionContainer: {
    overflow: 'hidden',
    height: 'fit-content',
    flexBasis: '87%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  attributionLinkContainer: {
    fontWeight: 'bold',
    fontSize: '13px',
  },
  attributionLink: {
    color: 'white',
    textDecoration: 'none'
  },
  devNameContainer: {
    fontWeight: 'bold',
    display: 'flex',
    flex: '1',
    marginLeft: '3px',
    justifyContent: 'center',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '17px'
    }
  },
  articleCountContainer: {
    flex: '1',
    textAlign: 'center'
  },
  darkModeTextContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
});

// Exports 
export default SiteDescriptionStyle;