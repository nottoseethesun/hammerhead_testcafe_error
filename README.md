# This project recreates an error in hammerhead.js

> "TypeError: window.location.toString is not a function"

### Description of the problem

A Iframe is opened where the user enters some data and clicks on `submit`, then the iframe is redirected with 307 to where some javascript sends a `postMessage` to our host window which closes the iframe.
After the iframe is closed and this error occurs something in the redux `dispatch` or in the react core breaks and the state is not updated/the app is not re-rendered.

After some debugging we found that it might have something to do with hammerhead.js internals and some `focus` method.

Important things to note here are that this happens if the iframe has a src (like in this example) or has no src attribute (like in our application)

# Setup

> npm i

# Steps to recreate

1. run `npm start` to start the local server on port 3000.
2. run `testcafe -c 1 chrome tests/Sample.ts --skip-js-errors` to start testcafe.
3. when the test stops for debugging, open the console in the browser, there you will see the error.
