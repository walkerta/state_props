

import React from 'react';
import PlayListItem from './PlayListItem.js'

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>MyComponent</div>
    );
  }
}

fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }


  //Inside of a componentDidMount function on the PlayList component
  //You should have the following fetch call to retrieve the playlists
  //from the server. Don't worry as much about how these function for now, as much placing
  //them in the right locations and getting them to work/sync up properly with the component.

  //******************************************************************************
  //******************************************************************************
  //copy and paste into componentDidMount in your PlayList component.
  componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
        console.log("state", this.state.songs);
      })
