import React, {Component} from 'react';
import axios from 'axios';

import UserName from './UserName/UserName.jsx'; 

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    }
  }

  componentWillMount() {
    axios.get('/users/' + this.props.user_id)
      .then((data) => {
        console.log('*** data ***', data.data.user);
        this.setState({ userInfo: data.data.user })
      })

  }

render() {
  return (
    <div>
      <UserName 
        user_id={ this.state.userInfo._id }
        userName={ this.state.userInfo.userName }/>
      <li>email component goes here</li>
      <li>photo component goes here</li>
      <li>itinerary component goes here</li>
    </div>
  )
}


}