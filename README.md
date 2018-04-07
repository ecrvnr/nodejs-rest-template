# nodejs-rest-template
A template project for a REST API built with node.js, relying on a MongoDB database for persistance.

# Prerequisites:  

## Environment variables:
* `MONGODB_DEV_URI`: URI pointing to a running MongoDB service, for example `mongodb://localhost:27017`;
* `MONGODB_PROD_URI`: URI pointing to a running MongoDB service, for example `mongodb://localhost:27017`, although this is more likely to point to a service hosted remotely;
* `MONGODB_NAME`: The name of the database, for example `example-db`.

# How-To:

## Run this project
* Clone this project;
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