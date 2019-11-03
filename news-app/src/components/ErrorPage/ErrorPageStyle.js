const ErrorPageStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return ErrorPageLightStyle;
    }
    case 'darkTheme': {
      return ErrorPageBlackStyle;
    }
    default: {
      return ErrorPageLightStyle;
    }
  }
};

const ErrorPageLightStyle = () => ({
  errorPageContainer: {
    overflow: 'hidden',
    flex: '1'
  },
  linkContainer: {
    color: 'black'
  }
});

const ErrorPageBlackStyle = () => ({
  errorPageContainer: {
    overflow: 'hidden',
    flex: '1',
    backgroundColor: 'black',
    color: 'white'
  },
  linkContainer: {
    color: 'white'
  }
});

// Exports
export default ErrorPageStyle;