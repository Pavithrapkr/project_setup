import React, { Component } from 'react';
import {Fab, Button} from '@material-ui/core';
import './App.css';

class App extends Component {

  state = {
    enableTextArea : false,
    notes  : [""],
    inputValue : ""
  }

  showTextArea = () => {
    var state = {enableTextArea : !this.state.enableTextArea};
    this.setState(state);
  };

  saveNotes = () => {
    var notes = this.state.notes;
    notes.push(this.state.inputValue);
    var inputValue = "";
    var state = {notes,inputValue};
    this.setState(state);
  }

  handleChange = (event : any) => {
    this.setState({inputValue : event.target.value});
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <label>Notes App</label>
      </header>
      <br/>
      <br/>
      <div>
        <Button onClick={this.saveNotes} variant="contained" color="primary">Save</Button>
      </div>
      <div>
        {this.state.enableTextArea ? <textarea style={{margin: "20px",padding: "10px", width: "50%", height: "100px"}} placeholder="Enter notes here" value={this.state.inputValue} onChange={this.handleChange}></textarea> : null}
      </div>
      <div>
        {
          this.state.notes.map(note => <p>{note}</p>)
        }
      </div>
      <footer>
        <Fab color="primary" style={{position : "fixed", bottom : "10px"}} aria-label="add" onClick={this.showTextArea}>
            { this.state.enableTextArea ? <label>X</label> : <label>+</label> }
        </Fab>   
      </footer>   
    </div>
  }

}

export default App;
