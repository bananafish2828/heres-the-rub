import React, {Component} from 'react';

import Profile from './Profile/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Profile />
      </div>
    )
  }
}

export default App;
