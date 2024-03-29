# Requirements

- At least node version 18 is needed (in case it doesn't work, try with the 20)

# Instructions

- First, you need to install the dependencies with the command: `npm install`. **(Please, make sure you are inside the /api folder when running this command.)**

## Starting project

1. Run the command `npm run dev` to start the project.
2. The default URL for the project is http://localhost:8001. It should be running there. You don't have to set anything up. The frontend is already taking this URL as the default one. However, if you change the ports or URL of the backend, you will have to also change it in the frontend.

## Running tests

1. Run the command `npm run test` for the unit tests. In the console, you should see the status of the tests.

# About the Unit tests

For the client side, I decided to test for:

- The Settings page, when the "Edit" button is pressed and the form is shown.
- The Settings page, when the "Balance" button is pressed and the modal is displayed.
- The Settings page, for the form to be filled with the information of the user when he/she is authenticated.

I decided these tests would be the ones necessary in a real-life scenario related to UI. The APIs are tested in the backend project.
