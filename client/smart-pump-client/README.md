# Requirements

- At least node version 18 is needed (in case it doesn't work, try with the 20)

# Instructions

- First, you need to install the dependencies with the command: `npm install`. **(Please, make sure you are inside the /client/smart-pump-client folder when running this command.)**

## Starting the project

1. Run the command `npm run dev` to start the project.
2. The default URL for the project is http://localhost:3000. It should be running there.

## Running tests

1. Run the command `npm run test` for the unit tests. In the console, you should see the status of the tests.

# About the Unit tests

For the server side, I decided to test for every endpoint and different possible scenarios for each.
We have two routes with two endpoints each:

### auth route

- POST - /api/auth/login
- GET - /api/auth/logout

### user route

- GET - /api/user
- PUT - /api/user
