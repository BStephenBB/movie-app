## Quick Start

To run the application

1. Clone the repo: `git clone https://github.com/BStephenBB/movie-app.git`
2. Install with npm: `npm install movie-app`
3. Create a .env file with your movie api key in the root of the src folder: `REACT_APP_MOIVE_API_KEY=<<your key here>>` If you don't have a key, you can get one from [The Movie Database](https://www.themoviedb.org/documentation/api).
4. Run `npm start` and the app will run on [http://localhost:3000](http://localhost:3000).

## Libraries and Resources used:

- This app was built with [react](https://reactjs.org/) and bootstrapped with [create react app](https://facebook.github.io/create-react-app/).
- Most of the UI was built with [Material-UI](https://material-ui.com/).
- [react-router](https://github.com/ReactTraining/react-router) was used for routing.

## Possible Improvements

These are some improvements that could be made to the app that were left out due to time constraits:

- Implement some type of debounce for the search feature to avoid making excessive requests to the api
- Possibly implementing some tests, although for an app this simple, tests aren't a huge priority. If there were plans to continue expanding it, then adding some tests would be a good idea.
- For the search feature, ideally I would use a library like downshift for a more accessible and fullproof search dropdown.
- Add a lot more comments to make the project easier to understand
- Make it slightly more modular by addnig a few more components for certain parts.
- Styling improvements, and more elegent and responsive positioning solutions
- Better error handling for invalid searches. Also implement the search api call in the same way the rest were made.
- Have a placeholder image for movies that don't have an image in the database.
- Although it's a small app, code-splitting could be used to further reduce the bundle size. Names, by using dynamic imports and possibly react-suspense.
- Add loading states for images / etc.
- Possibly use the context-api for better state managemtn and to reduc prop-drilling. Not a huge issue on a small app though.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
