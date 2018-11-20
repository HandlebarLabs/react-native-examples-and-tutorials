import React from 'react';
import {
  AppTabs,
  // AuthStack
} from './router';
import * as Auth from './api/auth';

class App extends React.Component {
  render() {
    return (
      <Auth.Provider>
        <AppTabs />
        {/* <AuthStack /> */}
      </Auth.Provider>
    );
  }
}

export default App;
