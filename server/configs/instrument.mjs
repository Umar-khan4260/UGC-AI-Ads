// Import with `import * as Sentry from "@sentry/node"` if you are using ESM


import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://2d216f60ee1fe2a49aabd3538ddbf02b@o4512038299172864.ingest.de.sentry.io/4512038321586256",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});