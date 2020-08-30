import React from 'react';
import './App.css';
import Comments from './Comments';

function App() {
  // The url passed in can be accessed through the Comment component's props.
  // Use this to make calls to the backend/API/database
  return (
    <div>
        <img width="800px" src="https://images.unsplash.com/photo-1593789382576-54f489574d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <Comments url='https://kaaro-intern-challenge.firebaseio.com/comments.json'/>
    </div>
  );
}

export default App;
