// Library Imports
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

// Custom Imports
import NewsCardStyle from './NewsCardStyle';
import NewsLink from '../../utils/Images/NewsLink.png';
import LoadImage from '../../utils/Images/LoadImage.png';
import { openNewsCardModal } from '../../redux/NewsResult/NewsResultAction';

const NewsCard = props => {
  const classes = makeStyles(NewsCardStyle(props.themeName))();

  const handleNewsCardModal = (newsCardModalData) => {
    props.openNewsCardModal(newsCardModalData);
  }

  let newsCardsList;
  if (props.fetchStatus === 'progress') {
    newsCardsList = (
      <Grid item container className={classes.loadingContainer}>
        <CircularProgress />
        <Grid item>
          Loading Results...
        </Grid>
      </Grid>
      );
  } else {
    if (props.articles.length === 0) {
      newsCardsList = (
        <Card className={classes.noResultfoundCardContainer}>
        <CardActionArea>
          <CardContent>
            <Typography 
              gutterBottom variant="h5" component="h2">
              No Search Result Found !!
            </Typography>
            <Typography
              classes={{
                root: classes.root
              }}
              variant="body2" color="textSecondary" component="p">
              {props.failureMessage}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
        );
    } else {
      newsCardsList = props.articles.map(({
        author,
        content,
        description,
        publishedAt,
        source,
        title,
        url,
        urlToImage
      }, index) => (
        <Card key={index} className={classes.cardContainer}>
          <CardActionArea
            onClick={event => handleNewsCardModal({
              author,
              content,
              description,
              publishedAt,
              source,
              title,
              url,
              urlToImage
            }, event)}
          >
            <div
              className={classes.cardImageContainer}
              title={title}
              style={{'backgroundImage':`url('${urlToImage}'),url(${LoadImage})`}}
            >
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography
                classes={{
                  root: classes.root
                }}
                className={classes.descriptionContainer} variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid item container className={classes.cardActionsContainer}>
              <div className={classes.sourcesContainer}>
                <a className={classes.sourceLink} href={url} target="_blank" rel="noopener noreferrer">
                  <img src={NewsLink} alt='Source Link' className={classes.sourceLink}/>
                </a>
                <span>{source.name}</span>
              </div>
              <span>{new Date(publishedAt).toDateString().replace(/^([a-zA-Z]+)\s+([a-zA-Z]+)\s+(\d+)\s+(\d+)$/g,'$3, $2 $4')}</span>
            </Grid>
          </CardActions>
        </Card>
      ));
    }
  }
  return newsCardsList;
};

const mapStateToProps = state => ({
  articles: state.newsResults.articles,
  failureMessage: state.newsResults.failureMessage,
  fetchStatus: state.newsResults.fetchStatus,
  themeName: state.selectedTheme.name
});

const mapDispatchToProps = dispatch => ({
  openNewsCardModal: newsCardModalData => dispatch(openNewsCardModal(newsCardModalData))
});

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);