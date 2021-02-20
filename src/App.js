import React, { Component } from 'react';
// import logo from './components/images/logo.jpg';
// import {Button, Typography} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider, Grid } from '@material-ui/core';
import theme from './components/utils/theme';
import Jumbotron from './components/Jumbotron/Jumbotron';
class App extends Component {
  render() {
    return (
      <div>
      <Grid container direction="column">
        <Grid item>
            <ThemeProvider theme={theme}>
            <Navbar/>
          </ThemeProvider>
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2}/>
            <Jumbotron/>
          <Grid item xs={0} sm={2}/>
        </Grid>
        
      </Grid>
      
      
     
      </div>
    );
  }
}
export default App;