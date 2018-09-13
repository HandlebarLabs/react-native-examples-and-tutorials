import React from 'react';
import Router from './router';
import * as Auth from './api/auth';

class App extends React.Component {
  render() {
    return (
      <Auth.Provider>
        <Router />
      </Auth.Provider>
    );
  }
}

export default App;
