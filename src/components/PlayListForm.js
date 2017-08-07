import React from 'react';

export default class PlayListForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }




      render() {
          return (

            <div>
              <div className="container"/>
                <button onSubmit={this.handleSubmit}>Updated</button>

              <br></br>

              <label>
                User Name:
                <input onChange={this.handleNameChange} name="name" placeholder="Name or User Name"/>
              </label>

                <label>
                  Artist Band:
                  <input onChange={this.handleNameChange} name="name" placeholder="Artist Band"/>
                </label>

                  <label>
                    Song Title:
                    <input onChange={this.handleNameChange} name="name" placeholder="Song Title"/>
                  </label>

                    <label>
                      Notes about Song:
                      <input onChange={this.handleNameChange} name="name" placeholder=""/>
                    </label>
                    <br></br>
                  
            </div>
          )
        }
      }
