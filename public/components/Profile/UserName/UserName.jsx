import React, {Component} from 'react';
import axios from 'axios';

import DisplayUserName from './DisplayUserName.jsx';
import QueryUserName from './QueryUserName.jsx';

export default class UserName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayUserName: true,
      userName: ''
    }
  }

  render() {
    return (
      <div>{
        (this.state.displayUserName) ? (
          <DisplayUserName />
        ) : (
          <QueryUserName />
        )
      }</div>
    )
  }

}