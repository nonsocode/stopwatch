import React, { Component, } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from './components/HeaderBar'
import Navigatable from './components/Navigatable'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <HeaderBar title="Clock App"></HeaderBar>
          <Navigatable />
        </div>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  flex :{
    display : 'flex',
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
}
export default App;
