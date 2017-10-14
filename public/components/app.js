import React, {Component} from 'react';

import Profile from './Profile/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '59e08ba08a8ffe1d40c73d84' // hard coded for testing purposes
    }
  }

  render() {
    return (
      <div>
        <Profile
          user_id={ this.state.user_id }/>
      </div>
    )
  }
}

export default App;
