# This project recreates an error in hammerhead.js

> "TypeError: window.location.toString is not a function"

## Description of the problem

A Iframe is opened where the user enters some data and clicks on `submit`, then the iframe is redirected with 307 to where some javascript sends a `postMessage` to our host window which closes the iframe.
After the iframe is closed and this error occurs something in the redux `dispatch` or in the react core breaks and the state is not updated/the app is not re-rendered.

After some debugging we found that it might have something to do with hammerhead.js internals and some `focus` method.

Important things to note here are that this happens if the iframe has a src (like in this example) or has no src attribute (like in our application)

## Setup

> npm i

## Steps to recreate

### Prerequisite

1. Pretty-print `./node_modules/testcafe-hammerhead/lib/client/hammerhead.min.js`
At line `254` (from Chrome DevTools PrettyPrint) of the same file, replace function `re` with:

```javascript
        function re() {
            if ($l)
                return $l;
            var e = ft(Wa.global);
            return e && Rt(e) ? Xl.get().referer : (() => {
                if (typeof Wa.global.location.toString !== 'function') {
                    debugger;
                    return '';
                }
                return Wa.global.location.toString();
            })();
        }
```

### Run

1. run `npm start` to start the local server on port 3000.
1. run `npm run repro-issue` to start testcafe.
1. when the test stops for debugging, open the console in the browser, there you will see the error.
