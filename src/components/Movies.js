import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Filter from "./Filter";

import Movie from "./Movie";
import MiniAddMovie from "./MiniAddMovie";
import {
  setFilmovi,
  setFiltered,
  setPassword,
  fetchSuccess,
  fetchMovies
} from "../store/actions";
import "./Movies.css";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    const filmoviJsx = this.props.filtered.map(film => (
      <Link
        key={film._id}
        to={{
          pathname: `/singlemovie/${film._id}`,
          state: film
        }}
      >
        <Movie podaci={film} />
      </Link>
    ));

    return (
      <div>
        <MiniAddMovie />
        <Filter />

        <div className="movies-wrapper">
          {!this.props.isLoaded ? "Učitava se..." : null}
          {filmoviJsx}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filtered: state.get("filtered"),
    isLoaded: state.get("isLoaded")
  };
}

const mapDispatchToProps = {
  setFilmovi,
  setFiltered,
  setPassword,
  fetchSuccess,
  fetchMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
