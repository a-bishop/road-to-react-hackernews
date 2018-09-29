import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = "Welcome to the Road to Learn React, ";
		let user = {
			first: "Andrew",
			last: "Bishop"
    };
    function formatName (user) {
      return user.first + ' ' + user.last;
    }
    const list = [
      {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
      },
      {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
      },
    ];
    return (
      <div className="App">
        <img src={logo} height="100" width="100" alt="react logo"/>
        <h2>{helloWorld} {formatName(user)}</h2>
        {list.map(item =>
            <div key={item.objectID}>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                  
            </div>
        )}
      </div>
    );
  }
}

export default App;
