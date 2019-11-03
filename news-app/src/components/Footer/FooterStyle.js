const FooterStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return FooterLightStyle;
    }
    case 'darkTheme': {
      return FooterBlackStyle;
    }
    default: {
      return FooterLightStyle;
    }
  }
};

const FooterLightStyle = () => ({
  footerContainer: {
    overflow: 'hidden',
    flexBasis: '5%',
    alignItems: 'flex-start',
    backgroundColor: '#d8d7ff',
    color: 'black'
  }
});

const FooterBlackStyle = () => ({
  footerContainer: {
    overflow: 'hidden',
    flexBasis: '5%',
    alignItems: 'flex-start',
    backgroundColor: '#000000d4',
    color: 'white'
  }
});


export default FooterStyle;