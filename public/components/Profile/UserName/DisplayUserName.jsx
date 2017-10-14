import React, {Component} from 'react';

const DisplayUserName = ({ handleNameClick, userName }) => {

  return (
    <div>
      <span onClick={() => { handleNameClick() }}>{ userName }</span>
    </div>
  )
}

export default DisplayUserName;
