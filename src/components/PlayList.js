import React from 'react';
import PlayListItem from './PlaylistItem.js'

export default class PlayList extends React.Component {


  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
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
  render() {
      return (

        <div>
          <div className="container"/>
            <button onSubmit={this.handleSubmit}>Submit</button>

          <br></br>


          <section class="container"name="name" placeholder="Name or User Name">
                       <p>
                       User:Da Brat
                       </p>
                       <p>
                       Artist Band:Biggie Small
                       </p>
                       <p>
                       Title: I Got a Story to Tell
                       </p>
                       <p>
                       Notes:Sure Enough
                       </p>
            </section>



            <div class="container" placeholder="Name or User Name">
                       <p>
                       User:Johnny B
                       </p>
                       <p>
                       Artist Band: The Grateful Dead
                       </p>
                       <p>
                       Title: Johnny B Goode
                       </p>
                       <p>
                       Notes:Good Cover, sweet name.
                       </p>
            </div>

            <div class="container3">
                       <p>
                       User:BlueGrassin
                       </p>
                       <p>
                       Artist Band:The Dead South
                       </p>
                       <p>
                       Title: In Good Company
                       </p>
                       <p>
                       Notes: In Good Company
                       </p>

            </div>

          </div>


      )
    }
  }
