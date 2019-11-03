// Library Imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux';

// Custom Imports
import SiteColorPickerStyle from './SiteColorPickerStyle';
import { changeSelectedTheme } from '../../redux/SelectedTheme/SelectedThemeAction';

const SiteColorPicker = props => {
  const colorTheme = localStorage.getItem('colorTheme') || 'lightTheme';
  const classes = makeStyles(SiteColorPickerStyle(props.themeName))();
  const [checked, setChecked] = React.useState(colorTheme === 'darkTheme');

  const toggleChecked = () => {
    setChecked(prev => {
      localStorage.setItem('colorTheme', !prev ? 'darkTheme' : 'lightTheme');
      props.changeSelectedTheme(!prev ? 'darkTheme' : 'lightTheme');
      return !prev;
    });
  };

  return (
    <div className={classes.siteColorPickerContainer}>
      <Switch
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb
        }}
        size="small" checked={checked} color="primary" onChange={toggleChecked} />
    </div>
    );
};

const mapStateToProps = state => ({
  themeName: state.selectedTheme.name
});

const mapDispatchToProps = dispatch => ({
  changeSelectedTheme: themeName => dispatch(changeSelectedTheme(themeName))
});

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SiteColorPicker);