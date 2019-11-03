const NavigationBarStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return NavigationBarLightStyle;
    }
    case 'darkTheme': {
      return NavigationBarBlackStyle;
    }
    default: {
      return NavigationBarLightStyle;
    }
  }
};

const NavigationBarLightStyle = () => ({
  navigationBarContainer: {
    overflow: 'hidden'
  },
  appBarContainer: {
    backgroundColor: '#1976d2',
    color: 'white'
  },
  tabContainer: {
    backgroundColor: 'white'
  }
});

const NavigationBarBlackStyle = () => ({
  navigationBarContainer: {
    overflow: 'hidden'
  },
  appBarContainer: {
    backgroundColor: '#000000db',
    color: 'white'
  },
  tabContainer: {
    backgroundColor: 'white'
  }
});

export default NavigationBarStyle;