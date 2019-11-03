const SiteColorPickerStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return SiteColorPickerLightStyle;
    }
    case 'darkTheme': {
      return SiteColorPickerBlackStyle;
    }
    default: {
      return SiteColorPickerLightStyle;
    }
  }
};

const SiteColorPickerLightStyle = () => ({
  siteColorPickerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1'
  },
  root: {
    height: '16px',
    width: '40px',
    padding: '0 0 0 8px'
  },
  switchBase: {
    paddingTop: '0'
  },
  thumb: {
    width: '15px',
    height: '15px'
  }
});

const SiteColorPickerBlackStyle = () => ({
  siteColorPickerContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flex: '1'
  },
  root: {
    height: '16px',
    width: '40px',
    padding: '0 0 0 8px'
  },
  switchBase: {
    paddingTop: '0'
  },
  thumb: {
    width: '15px',
    height: '15px'
  }
});

// Exports
export default SiteColorPickerStyle;