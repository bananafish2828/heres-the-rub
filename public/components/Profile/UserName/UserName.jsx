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
    };
    this.handleEdit=this.handleEdit.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  };

  componentWillReceiveProps(NextProps) {
    this.setState({ displayUserName: true, userName: NextProps.userName });
  };

  handleEdit() {
    this.setState({ displayUserName: false });
  }

  handleSubmit(nameSubmission) {
    console.log('userNameSubmitted', nameSubmission)
    if (nameSubmission !== undefined && nameSubmission !== '') {
      axios.put('/users/' + this.props.user_id, { userName: nameSubmission })
      .then(() => {
        this.setState({ displayUserName: true, userName: nameSubmission });
      })
    } else {
      this.setState({ displayUserName: true, userName: this.state.userName });
    }
  }

  render() {
    return (
      <div>{
        (this.state.displayUserName) ? (
          <DisplayUserName handleNameClick={ this.handleEdit } userName={ this.state.userName }/>
        ) : (
          <QueryUserName handleSubmit={ this.handleSubmit } />
        )
      }</div>
    )
  }

}