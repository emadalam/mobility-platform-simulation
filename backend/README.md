# Mobility Platform Simulation - Backend

## Development

#### Starting the app

```shell
npm install     # install dependencies
npm run dev     # start the dev server and monitor changes

# or start the app in production mode
npm start       # start the app
```

By default the backend app is available on `PORT 4000` http://localhost:4000.

#### Configurations

Create the `.env` file in the root with configurations as specified in the [`./src/configs/env.js`](./src/configs/env.js) file. Eg. The `PORT` and `NODE_ENV` configurations would determine the node server's port and app behavior respectively.
