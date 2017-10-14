import React, {Component} from 'react';

const QueryUserName = ({ handleSubmit }) => {
  let text;
  return (
    <div>
      <span>
        Name: <input type='text' onChange={(e) => text = e.target.value }/>
        <button onClick={() => { handleSubmit(text) }}>Submit</button>
        <button onClick={() => { handleSubmit() }}>Cancel</button>
      </span>
    </div>
  )
}

export default QueryUserName;
