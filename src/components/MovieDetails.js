import React, { Component } from "react";
import APIService from "../apiService";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Star from "@material-ui/icons/Star";

const styles = {
  root: {
    width: "50vw",
    minWidth: 700,
    margin: "15vh auto",
    padding: "1rem",
    position: "relative"
  },
  rating: {
    position: "absolute",
    top: 25,
    right: 25,
    fontSize: "1rem"
  },
  rateTop: {
    fontSize: "1.5rem",
    fontWeight: "500"
  }
};

class MovieDetails extends Component {
  api = new APIService();
  state = {
    title: "",
    summary: "",
    genres: [],
    rating: "n/a",
    length: "n/a",
    release_date: "",
    homepage: ""
  };
  makeGenresList = () => {
    let genres = this.state.genres;
    let genreStr = "";
    for (let i = 0; i < genres.length; i++) {
      if (i !== genres.length - 1) {
        genreStr += `${genres[i].name}, `;
      } else {
        genreStr += `${genres[i].name} |`;
      }
    }
    return genreStr;
  };
  componentWillMount() {
    this.api.movieDetails(this.props.id).then(details => {
      this.setState({
        title: details.title,
        summary: details.overview,
        rating: details.vote_average,
        length: details.runtime,
        genres: details.genres,
        release_date: details.release_date,
        homepage: details.homepage,
        poster: details.poster_path
      });
    });
  }
  render() {
    const { classes } = this.props;
    const {
      title,
      summary,
      rating,
      length,
      release_date,
      homepage,
      poster
    } = this.state;
    return (
      <div>
        <Paper className={classes.root}>
          <Grid container direction="column">
            <Grid item>
              {title.length < 33 ? (
                <Typography variant="h3">{title}</Typography>
              ) : (
                <Typography variant="h5" style={{ fontWeight: 500 }}>
                  {title}
                </Typography>
              )}
            </Grid>
            <Grid item container spacing={8} style={{ padding: "8px 0" }}>
              <Grid item>
                <Typography variant="subtitle1">{`${length} min |`}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {this.makeGenresList()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{`Released: ${release_date}`}</Typography>
              </Grid>
            </Grid>
            <Grid item container spacing={16}>
              <Grid item>
                <img
                  style={{ borderRadius: "4px" }}
                  src={`http://image.tmdb.org/t/p/w185/${poster}`}
                  alt="movie poster"
                />
              </Grid>
              <Grid
                item
                xs
                container
                direction="column"
                style={{ position: "relative" }}
              >
                <Typography variant="h6">Summary:</Typography>
                <Typography
                  variant="subtitle1"
                  style={{ maxHeight: "200px", overflow: "auto" }}
                >
                  {summary}
                </Typography>
                {homepage ? (
                  <a href={homepage} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "50%",
                        transform: "translateX(-50%)"
                      }}
                    >
                      Visit Movie Website
                    </Button>
                  </a>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.rating}>
            <Star
              color="secondary"
              style={{ position: "relative", top: "1px", right: "1px" }}
            />
            <span className={classes.rateTop}>{rating}</span>/10
          </div>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(MovieDetails);
