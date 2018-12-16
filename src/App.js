import React, { Component } from "react";
import MovieDetails from "./components/MovieDetails";
import SearchBar from "./components/SearchBar";
import PopularMovies from "./components/PopularMovies";
import { Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/1" />} />
          <Route path="/pop" component={PopularMovies} />
          <Route path="/search" component={SearchBar} />
          <Route path="/movies/:movie" component={Details} />
          <Route path="/:page" component={Movies} />
        </Switch>
      </div>
    );
  }
}

function Details({ match }) {
  return <MovieDetails id={match.params.movie} />;
}

function Movies({ match }) {
  return <PopularMovies page={match.params.page} />;
}

export default App;
