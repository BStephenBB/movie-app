import React from "react";
import MovieCards from "./MovieCards";
import SearchBar from "./SearchBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function PopularMovies(props) {
  return (
    <div>
      <Grid
        container
        justify="flex-start"
        style={{ width: "80%", margin: "3rem auto" }}
      >
        <Grid item xs={9}>
          <Typography variant="h3" align="center">
            Movies
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h3" align="center">
            Search
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justify="flex-start"
        style={{ width: "80%", margin: "0 auto" }}
      >
        <Grid item xs={9}>
          <MovieCards page={props.page} />
        </Grid>
        <Grid item xs={3}>
          <SearchBar />
        </Grid>
      </Grid>
    </div>
  );
}
