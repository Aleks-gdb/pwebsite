import * as React from 'react';
import NavBar from './components/NavBar';
import Routes from './components/Routes';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    );
  }
}
