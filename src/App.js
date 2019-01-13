import React, { Component } from 'react';
import Note from './components/notes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: []
    }

  }
  updateNoteText(noteText) {
    this.setState({noteText: noteText.target.value});
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      let newNotes = this.state.notes;
      newNotes.push(this.state.noteText);
      this.setState({noteText: ''});
    }
  }

  deleteNote(index) {
    let newNotes = this.state.notes;
    newNotes.splice(index, 1);
    this.setState({notes: newNotes});
  }

  addNote() {
    if (this.state.noteText === '') {return;}
    let newNotes = this.state.notes;
    newNotes.push(this.state.noteText);
    this.setState({noteText: ''});
    this.textInput.focus();
  }

  render() {
    let notes = this.state.notes.map((value, key) => {
        return <Note key={key} text={value} deleteMethod={() => this.deleteNote(key)}/>
    })
    return (
      <div className="Container">
          <div className="header">React To-Do application</div>
          {notes}
          <div className="btn" onClick={this.addNote.bind(this)}>+</div>
          <input type="text"
            ref={((input) => {this.textInput = input})}
            className="textInput"
            value={this.state.noteText}
            onChange={noteText => this.updateNoteText(noteText)}
            onKeyPress={this.handleKeyPress.bind(this)}
            />
          
      </div>
      
    );
  }
}

export default App;
