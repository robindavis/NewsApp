const NewsCardStyle = selectedTheme => {
  switch(selectedTheme) {
    case 'lightTheme': {
      return NewsCardLightStyle;
    }
    case 'darkTheme': {
      return NewsCardBlackStyle;
    }
    default: {
      return NewsCardLightStyle;
    }
  }
};

const NewsCardLightStyle = () => ({
  cardContainer: {
    maxWidth: 345,
    margin: '10px',
    alignSelf: 'flex-end',
    backgroundColor: '#e8eef5',
    color: 'black'
  },
  noResultfoundCardContainer: {
    maxWidth: 345,
    margin: '10px',
    alignSelf: 'center',
    backgroundColor: '#e8eef5',
    color: 'black'
  },
  descriptionContainer: {
    lineHeight: '25px',
    height: '125px',
    overflow: 'hidden',
  },
  sourceLink: {
    height: '2em',
    width: '2em',
    marginRight: '5px'
  },
  cardActionsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    'flex': 1
  },
  sourcesContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  loadingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImageContainer: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '200px'
  },
  root: {
    color: '#0000008a'
  }
});

const NewsCardBlackStyle = () => ({
  cardContainer: {
    maxWidth: 345,
    margin: '10px',
    alignSelf: 'flex-end',
    backgroundColor: '#6f7071',
    color: 'white'
  },
  noResultfoundCardContainer: {
    maxWidth: 345,
    margin: '10px',
    alignSelf: 'center',
    backgroundColor: '#6f7071',
    color: 'white'
  },
  descriptionContainer: {
    lineHeight: '25px',
    height: '125px',
    overflow: 'hidden',
  },
  sourceLink: {
    height: '2em',
    width: '2em',
    marginRight: '5px'
  },
  cardActionsContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    'flex': 1
  },
  sourcesContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  loadingContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImageContainer: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '200px'
  },
  root: {
    color: '#cecbcb'
  }
});

// Exports
export default NewsCardStyle;