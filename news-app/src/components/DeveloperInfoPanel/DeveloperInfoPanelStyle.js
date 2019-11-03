const DeveloperInfoPanelStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return DeveloperInfoPanelLightStyle;
    }
    case 'darkTheme': {
      return DeveloperInfoPanelDarkStyle;
    }
    default: {
      return DeveloperInfoPanelLightStyle;
    }
  }
};

const DeveloperInfoPanelLightStyle = theme => ({
  developerInfoPanelContainer: {
    overflowY: 'auto',
    flex: '1'
  },
  developerProfilePic: {
    margin: '10px',
    width: '150px',
    height: '150px',
  },
  developerDescriptionContainer: {
    textAlign: 'center'
  },
  techStackContainer: {
    marginTop: '60px',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%'
    }
  },
  techStackHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '20px'
  },
  techStackItemContainer: {
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  techStackItem: {
    flexGrow: '1',
    width: 'auto'
  },
  techStackLogo: {
    height: '106px'
  },
  sourceCodeContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '20%'
    },
    marginTop: '60px',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  sourceCodeHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '30px'
  },
  sourceCodeItemContainer: {
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  sourceCodeItem: {
    flexGrow: '1',
    width: 'auto'
  },
  sourceCodeLogo: {
    height: '50px',
    margin: '3px'
  },
  onlineConnectContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '30%'
    },
     marginTop: '60px',
     marginBottom: '20px',
     overflow: 'hidden'
  },
  onlineConnectHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '5px'
  },
  onlineConnnectItemContainer: {
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  onlineConnectItem: {
    flexGrow: '1',
    width: 'auto'
  },
  onlineConnectLogo: {
    height: '50px',
    margin: '3px'
  }
});

const DeveloperInfoPanelDarkStyle = theme => ({
  developerInfoPanelContainer: {
    overflowY: 'auto',
    flex: '1',
    backgroundColor: 'black',
    color: 'white'
  },
  developerProfilePic: {
    margin: '10px',
    width: '150px',
    height: '150px',
  },
  developerDescriptionContainer: {
    textAlign: 'center'
  },
  techStackContainer: {
    marginTop: '60px',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%'
    }
  },
  techStackHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '20px'
  },
  techStackItemContainer: {
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  techStackItem: {
    flexGrow: '1',
    width: 'auto'
  },
  techStackLogo: {
    height: '106px'
  },
  sourceCodeContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '20%'
    },
    marginTop: '60px',
    marginBottom: '20px',
    overflow: 'hidden'
  },
  sourceCodeHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '30px'
  },
  sourceCodeItemContainer: {
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  sourceCodeItem: {
    flexGrow: '1',
    width: 'auto'
  },
  sourceCodeLogo: {
    height: '50px',
    margin: '3px'
  },
  onlineConnectContainer: {
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '30%'
    },
     marginTop: '60px',
     marginBottom: '20px',
     overflow: 'hidden'
  },
  onlineConnectHeading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '30px',
    marginBottom: '5px'
  },
  onlineConnnectItemContainer: {
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },
  onlineConnectItem: {
    flexGrow: '1',
    width: 'auto'
  },
  onlineConnectLogo: {
    height: '50px',
    margin: '3px'
  }
});
// Exports
export default DeveloperInfoPanelStyle;