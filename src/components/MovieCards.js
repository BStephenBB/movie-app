import React from "react";
import { Link } from "react-router-dom";
import APIService from "../apiService";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 250
  },
  media: {
    height: 350
  },
  title: {
    textAlign: "center",
    height: 42,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    display: "flex",
    justifyContent: "center"
  }
};

class MovieCards extends React.Component {
  api = new APIService();
  state = {
    movies: []
  };

  componentWillMount() {
    this.api.popularMovies(this.props.page).then(data => {
      this.setState({
        movies: data.results
      });
    });
  }
  render() {
    const { classes } = this.props;
    const { movies } = this.state;

    return (
      <div>
        <Grid container spacing={16}>
          {movies.map(movie => {
            let imgURL = `http://image.tmdb.org/t/p/w342/${movie.poster_path}`;
            return (
              <Grid item key={movie.id}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="subtitle2" className={classes.title}>
                        {movie.title}
                      </Typography>
                    </CardContent>
                    <CardMedia className={classes.media} image={imgURL} />
                  </CardActionArea>
                  <CardActions className={classes.btn}>
                    <Button
                      size="small"
                      color="primary"
                      component={Link}
                      to={`/movies/${movie.id}`}
                    >
                      More Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MovieCards);
