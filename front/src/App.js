import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './App.css';
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
    <div>
      <MuiThemeProvider>
      <div>
        <Menu />
        {this.props.children}
      </div>
      </MuiThemeProvider>
    </div>
    );
  }
}

export default App;
