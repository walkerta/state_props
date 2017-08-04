import React from 'react';

export default class PlayListForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }

}

render() {
  return (

    <form onSubmit={this.handleSubmit}>
      <label>
        User Name:
        <input onChange={this.handleNameChange} name="name" type="text" value=Name>
          <br>
            <label>
              Artist Band:
              <input onChange={this.handleNameChange} name="name" type="text" value=Artist>

                <br>
                  <label>
                    Song Title:
                    <input onChange={this.handleNameChange} name="name" type="text" value=Song Title>

                      <br>
                        <label>
                          Notes About Song:
                          <input onChange={this.handleNameChange} name="name" type="text" value=>

                            <br>
                              <input type="submit" value="Submit"/>
                              <br>
