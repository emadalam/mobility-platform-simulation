# Mobility Platform Simulation

The implementation consists of two parts, [`backend`](./backend/) and [`frontend`](./frontend/), both of which have been written in `JavaScript`.

## Quick Start

Start the backend on default http://localhost:4000

```shell
cd backend    # backend folder
npm install   # install dependencies
npm run dev   # start the app
```

Start the frontend on default http://localhost:3000

```shell
cd frontend   # frontend folder
npm install   # install dependencies
npm start     # start the app
```

- Make sure `nodejs` and `npm` is installed and available globally.
- You would need to run the `backend` app separately before starting the `frontend` app.

## Further Docs

#### [Backend App](./backend/README.md)

Documentation is available in the [`backend`](./backend) folder. Refer to the respective [`README`](./backend/README.md) file from the folder for further details about the app.

#### [Frontend App](./frontend/README.md)

- The frontend app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). As such the readme docs point to the CRA docs. Refer to the [`README`](./frontend/README.md) docs from CRA for starting the app or the tests and/or debugging/testing the app itself.

- The app is using [`React Hooks`](https://reactjs.org/docs/hooks-intro.html) for most part.

- The app is making use of an [external UI library](https://material-ui.com/) for simplicity.
