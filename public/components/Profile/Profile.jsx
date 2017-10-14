import React, {Component} from 'react';
import axios from 'axios';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
render() {
  return (
    <div>
      <li>username component goes here</li>
      <li>email component goes here</li>
      <li>photo component goes here</li>
      <li>itinerary component goes here</li>
      <button>save</button>
      <button>cancel</button>
    </div>
  )
}


}