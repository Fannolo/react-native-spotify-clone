# Libraries used

These are the following libraries added to the project

## React Native

**Why**: We use React Native to develop cross-platform application with Javascript. It's the core component. **Where**: It's the core component, so basically everywhere.

## React Navigation

**Why**: Recommended way to handle application navigation. **Where**: Mostly in `./navigation` folder

## Redux Toolkit and React Redux

**Why:** We use redux toolkit to latest version to enforce an unopinionated pattern over how to handle the api requests and create store object from the response, which is slowly becoming the standard over react native applications. **Where:** inside the `./api` folder and then the exported hooks in the different screens `./HomeScreen` and `./PlaylistDetailsScreen`.

## React Native Track Player

**Why:** To play the sound retrieved from the backend service and to allow us to handle different actions over the played sound. **Where:** Inside `./component` in the `./PlayButton` and `./Player`.

## Axios

**Why:** A common HTTP client used widely a list of feature that it provides:

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make [http](http://nodejs.org/api/http.html) requests from node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

**Where:** inside the `./api`

## React Native Linear Gradient

**Why:** A UI Library to create `View` with a gradient, required by a component

**Where:** inside `./PlaylistCover` .

# Dev dependencies

## React Testing Library

**Why:** to add test for rendering react native component

**Where:** whenever there is a `*.test.*` file.

## Jest

**Why:** Library recommended to write tests

**Where:** Everywhere

## Eslint & 🔌

**Why:** Used to format and control errors such as types or hook deps used only during development.

**Where:** Everywhere and the config is under `eslintrc.json`
