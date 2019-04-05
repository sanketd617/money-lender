import React, { Component, Fragment } from 'react';
import '../css/App.css';
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import blue from "@material-ui/core/es/colors/blue";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import {toggleDrawer} from "../actions/AppActions";

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500], light: blue[100] },
  },
  typography: { useNextVariants: true },
});

const styles = theme => createStyles({
    container: {

    }
});

class App extends Component {
  render() {
      const {classes} = this.props;
    return (
        <MuiThemeProvider theme={theme}>
          <Fragment>
            <Grid container className={classes.container}>
              <Hidden mdDown>
                <Grid item xl={4} lg={3}>
                  <LeftSection/>
                </Grid>
              </Hidden>
              <Grid item xs>
                <RightSection isDrawerOpen={this.props.isDrawerOpen} toggleDrawer={this.props.toggleDrawer}/>
              </Grid>
            </Grid>
          </Fragment>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
          return {
            isLoading: state.app.isLoading,
              isDrawerOpen: state.app.isDrawerOpened
          }
};

const mapDispatchToProps = (dispatch) => {
  return {
      toggleDrawer: () => {
          dispatch(toggleDrawer())
      }
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App));
