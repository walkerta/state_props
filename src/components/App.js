import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';


import NavBar from '../NavBar.js';
import PlayList from '../PlayList.js';
import PlayListForm from '../PlayListForm';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <PlayListForm />
        <PlayList />
        <PlayListItem />
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return (
      <nav className="Navbar">

      </nav>
    );
  }
}

class PlayListForm extends Component {
  render() {
    return (
      <div className="PlayListForm">

      </div>
    );
  }
}

class PlayList extends Component {
  render() {
    return (
      <div className="PlayList">

      </div>
    );
  }
}


export default App;


class Greeting extends React.Component {
  render(   ) {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default class PlayListForm extends React.Component {
constructor(props) {
  super(props);

    let userName = userName;
    let songArtist = songArtist;
    let songTitle = songTitle;
    let songNotes = songNotes;

  }
}



c

export default App;
