// Library Imports
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

// Custom Imports
import NewsCardModalStyle from './NewsCardModalStyle';
import LoadImage from '../../utils/Images/LoadImage.png';
import CrossIcon from '../../utils/Images/CrossIcon.png';
import { closeNewsCardModal } from '../../redux/NewsResult/NewsResultAction';


const NewsCardModal = props => {
  const {
    title='',
    urlToImage='',
    description='',
    content='',
    url= '',
    source={},
    publishedAt=''
  } = props.newsCardModalData;

  const classes = makeStyles(NewsCardModalStyle(props.themeName))();

  return (
    <Dialog
      open={props.isNewsCardModalOpen}
      onClose={props.closeNewsCardModal}
      fullWidth={true}
      maxWidth="md"
      PaperProps={{
        classes: {
          root: classes.dialogContainer,
        }
      }}
    >
      <h1 className={classes.cardModalHeadingContainer}>
        <div>
        {title}
        </div>
        <div onClick={props.closeNewsCardModal}>
          <img src={CrossIcon} alt="Close Icon" className={classes.crossIconContainer}/>
        </div>
      </h1>
      <div className={classes.cardModalContentContainer}>
      <div className={classes.cardModalImageOuterContainer}>
        <div
          className={classes.cardModalImageContainer}
          title={title}
          style={{'backgroundImage':`url('${urlToImage}'),url(${LoadImage})`}}
        >
        </div>
      </div>
      <DialogContent>
      <DialogContentText>
          <Typography 
            classes={{
              root: classes.root
            }}
            gutterBottom variant="h6" component="span" color="textPrimary">{description}</Typography>
          <br/><br/>
          <Typography
            classes={{
              root: classes.root
            }}
            gutterBottom variant="h6" component="span" color="textPrimary">
            {(content || '').replace(/(.*).\s\[[\w\s+]+\]$/g,'$1')}
            <a href={url} target='_blank' rel="noopener noreferrer" className={classes.externalLinkContainer}>
              ...continue reading
            </a>
          </Typography>
      </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Grid container justify="space-between">
        <strong>
          Source: <u>{source.name}</u>
        </strong>
        <strong>
          Published On: <u>{new Date(publishedAt).toDateString().replace(/^([a-zA-Z]+)\s+([a-zA-Z]+)\s+(\d+)\s+(\d+)$/g,'$3, $2 $4')}</u>
        </strong>
        </Grid>
      </DialogActions>
      </div>
    </Dialog>
    );
};

const mapStateToProps = state => ({
  isNewsCardModalOpen: state.newsResults.isNewsCardModalOpen,
  newsCardModalData: state.newsResults.newsCardModalData,
  themeName: state.selectedTheme.name
});

const mapDispatchToProps = dispatch => ({
  closeNewsCardModal: () => dispatch(closeNewsCardModal())
});

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(NewsCardModal);