import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { INSTRUCTIONS_LIST, RECIPES_LIST } from "../../store";

class Instructions extends Component {
  constructor(props) {
    super(props);
    const redState = store.getState();
    this.state = {
      instructions: redState.instructions,
      input: ""
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const redState = store.getState();
      this.setState({
        instructions: redState.instructions
      });
    });
  }

  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addInstruction() {
    store.dispatch({
      type: INSTRUCTIONS_LIST,
      payload: this.state.input
    });
    // Send data to Redux state
    this.setState({
      input: ""
    });
  }
  create() {
    store.dispatch({
      type: RECIPES_LIST
    });
    // Create new recipe in Redux state
  }
  render() {
    const instructions = this.state.instructions.map((instruction, i) => {
      return <li key={i}>{instruction}</li>;
    });
    return (
      <div className="List forms">
        <h2>Instructions:</h2>
        <div className="form_items_container">
          <ol className='list'>{instructions}</ol>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button className="add_button" onClick={() => this.addInstruction()}>
            Add Instruction
          </button>
        </div>
        <Link to="/add/ingredients">
          <button className='left_button'>Previous</button>
        </Link>
        <Link to="/">
          <button className='right_button' onClick={() => this.create()}>Create</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
