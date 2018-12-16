import React, { Component } from "react";
import APIService from "../apiService";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

const styles = {
  textField: {
    width: 200
  },
  margin: {
    margin: 8
  },
  results: {
    backgroundColor: "white",
    width: "calc(200px - 0.5rem)",
    position: "relative",
    left: "40px",
    bottom: "11px"
  },
  result: {
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: "#eee",
      cursor: "pointer"
    }
  },
  link: {
    color: "black"
  }
};
const API_KEY = `${process.env.REACT_APP_MOIVE_API_KEY}`;

class SearchBar extends Component {
  api = new APIService();
  state = {
    searchTxt: "",
    results: []
  };

  handleChange = name => event => {
    this.setState(
      {
        [name]: event.target.value
      },
      this.search
    );
  };

  search = () => {
    if (this.state.searchTxt) {
      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${
          this.state.searchTxt
        }&page=1&include_adult=true`,
        {
          headers
        }
      )
        .then(response => response.json())
        .then(res => {
          this.setState({
            results: res.results
          });

          return Promise.resolve(res);
        });
    }
  };

  handleChange;
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper style={{ width: 300, paddingBottom: "1rem" }}>
          <div className={classes.margin}>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item>
                <Search style={{ position: "relative", bottom: "5px" }} />
              </Grid>
              <Grid item>
                <TextField
                  autoComplete="off"
                  id="search-field"
                  label="Search..."
                  value={this.state.searchTxt}
                  onChange={this.handleChange("searchTxt")}
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        {this.state.searchTxt.length ? (
          <Paper className={classes.results}>
            {this.state.results.map(result => {
              return (
                <a
                  className={classes.link}
                  key={result.id}
                  href={`/movies/${result.id}`}
                >
                  <div className={classes.result}>{result.title}</div>
                </a>
              );
            })}
          </Paper>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
