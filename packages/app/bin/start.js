const createApp = require('scripts/create-app');
const attachClientToDevApp = require('scripts/attach-client-to-dev-app');
const clientBuild = require('./build');

const app = createApp();

attachClientToDevApp({
  app,
  build: clientBuild,
});

const port = 8080;
const start = () => {
  app.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Listening at localhost:${port}`);
  });
};

start();
