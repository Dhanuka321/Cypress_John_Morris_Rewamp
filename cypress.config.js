const { defineConfig } = require("cypress");

const sqlServer = require("cypress-sql-server");

const dbSettings = {
  userName: "sa",
  password: "EastTower56#$",
  server: "lf-test-db.southeastasia.cloudapp.azure.com",
  options: {
    database: "JMDB_dev",
    encrypt: true,
    rowCollectionOnRequestCompletion: true,
    trusted_connection: true,
    multipleActiveResultSets: true,
    trustServerCertificate: true,
  },
};

module.exports = defineConfig({
  projectId: "h68k6i",
  projectId: "iauyf5",
  e2e: {
    watchForFileChanges: true,
    video: true,
    videoCompression: 32,
    baseUrl: "https://au.jm-dev.store",
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/reports",
    },
    setupNodeEvents(on, config) {
      // config.db = {
      //   "userName": "sa",
      //   "password": "EastTower56#$",
      //   "server": "lf-test-db.southeastasia.cloudapp.azure.com",
      //   "options": {
      //     "database": "JMDB_dev",
      //     "encrypt": true,
      //     "rowCollectionOnRequestCompletion": true
      //   }
      // }

      // code from /plugins/index.js

      const tasks = sqlServer.loadDBPlugin(dbSettings);
      //const tasks = sqlServer.loadDBPlugin(config.db);
      on("task", tasks);

      return config;
      // allows db data to be accessed in tests
      //  const tasks = sqlServer.loadDBPlugin(dbSettings);
      //  on('task', tasks);

      //  return config;
    },
  },
  video: true,
  videoCompression: 32,
});
