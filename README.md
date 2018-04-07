# nodejs-rest-template
A template project for a REST API built with node.js, relying on a MongoDB database for persistance.

# Prerequisites:  

## Environment variables:
* `MONGODB_DEV_URI`, `MONGODB_PROD_URI` : URI pointing to a running MongoDB service, for example `localhost:27017`. For production this is more likely to point to a remote server;
* `MONGODB_DEV_NAME`, `MONGODB_PROD_NAME`: The name of the database, for example `example-db`;
* `MONGODB_DEV_USER`, `MONGODB_DEV_USER`: The database username associated with the app;
* `MONGODB_DEV_PASSWD`, `MONGODB_DEV_PASSWD`: The database password associated with the user.

# How-To:

## Set up the project:
* Clone this project;
* In the `config` folder, include the following files:

```javascript
// config/app.js

function config(environment) {

    switch (environment) {
    case 'development':
        return {
            port: 8081, // Default port number
            logLevel: 'debug', // error, warn, info, verbose, debug, silly
        };
    case 'production':
        return {
            port: 8081, // Default port number
            logLevel: 'info', // error, warn, info, verbose, debug, silly
        };
    },
    case 'other':
        return {
            port: xxxxx, // Default port number
            logLevel: 'silly', // error, warn, info, verbose, debug, silly
        };
    }
}

module.exports = config;

```

```javascript
// config/db.js

function config(environment) {

    switch (environment) {
        
    case 'development':
        return {
            uri: process.env.MONGODB_DEV_URI, // host address
            name: process.env.MONGODB_DEV_NAME, // name of the database
            password: process.env.MONGODB_DEV_PASSWD, // database password
            user: process.env.MONGODB_DEV_USER // database user associated with the app
        };

    case 'production':
        return {
            uri: process.env.MONGODB_PROD_URI, // host address
            name: process.env.MONGODB_PROD_NAME, // name of the database
            password: process.env.MONGODB_PROD_PASSWD, // database password
            user: process.env.MONGODB_PROD_USER // database user associated with the app
        };
    },
    case 'other':
        return {
            uri: 'whateveryouwant:9999', // host address
            name: 'database', // name of the database
            password: '123', // database password
            user: 'foo' // database user associated with the app
        };
    }
}

module.exports = config;

```

Those two files should not be checked into version control as they are likely to hold sensitive data such as database passwords.

## Run the app:
* Navigate to the root folder;
* Run `npm install`;
* Run `npm start`;
* remember to edit `package.json` to include your own personal information.

## Run unit tests:
To run unit tests, use `npm test ./test/path/to/module`.

## Switch between development and production environments:
Simply edit the `environment` field in `config/index.js`.

# Modules used in this project:
## Dependencies:
* nodemon
* assert
* express
* body-parser
* mongoose
* winston

## Dev dependencies:
* mocha
* chai
* eslint