import React, { Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={styles.flex}>
        <h1>Stop-Watch</h1>
      </div>
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
