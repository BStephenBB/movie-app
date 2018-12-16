export default class APIService {
  // Initializing important variables
  constructor() {
    this.domain = "https://api.themoviedb.org/3";
    this.API_KEY = `${process.env.REACT_APP_MOIVE_API_KEY}`;
  }

  /* --- Movie API Calls --- */
  popularMovies(page) {
    // get the 1st page of popular movies
    return this.fetch(
      `${this.domain}/movie/popular?page=${page}&language=en-US&api_key=${
        this.API_KEY
      }`,
      {
        method: "GET"
      }
    ).then(res => {
      return Promise.resolve(res);
    });
  }
  movieDetails(id) {
    // get details about a specific movie by ID
    return this.fetch(
      `${this.domain}/movie/${id}?api_key=${this.API_KEY}&language=en-US`,
      {
        method: "GET"
      }
    ).then(res => {
      return Promise.resolve(res);
    });
  }

  /* --- Custom Fetch function with headers & error handling --- */
  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    // Setting Authorization header

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }
  _checkStatus(response) {
    // raises an error in case response status is not a success

    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      console.log(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
