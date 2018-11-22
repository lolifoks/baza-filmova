import React, { Component } from "react";

import addMovie from "../shared/addMovie";
import "./Movies.css";

class MiniAddMovie extends Component {
  state = {
    movieName: "",
    movieImg: "",
    movieYear: "",
    visible: false
  };

  togle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handleInput = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
    console.log("STATE", this.state);
  };

  addMovie = e => {
    e.preventDefault();
    addMovie(this.state.movieName, this.state.movieYear, this.state.movieImg);
  };

  render() {
    let { visible } = this.state;
    return (
      <div>
        <button onClick={this.togle}>Quick Add</button>
        <form
          onSubmit={this.addMovie}
          style={visible ? { display: "block" } : { display: "none" }}
        >
          <input
            name="movieName"
            className="input"
            onChange={this.handleInput}
            placeholder="Add title"
            required
          />
          <input
            name="movieYear"
            className="input"
            onChange={this.handleInput}
            placeholder="Add year"
            required
          />
          <input
            name="movieImg"
            className="input"
            onChange={this.handleInput}
            placeholder="Add img url"
            required
          />
          <input type="submit" value="Confirm" />
        </form>
      </div>
    );
  }
}

export default MiniAddMovie;
