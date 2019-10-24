import React from 'react';
import Debug from './Debug';
import IFrame from './IFrame';
import Redirect from './Redirect';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';

const reduxStore = configureStore({
  log: ['Init log']
});

function App() {
  const pathname = window.location.pathname || '/';

  const matchPath = test => {
    if (pathname === test) {
      return true;
    } else {
      return false;
    }
  };

  const sendMessage = () => {
    const str = new Date().toLocaleString('en-US');
    window.parent.postMessage(`LOG:${str}`, 'http://localhost:3000');
    return 'SENT';
  };

  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        {matchPath('/') && <Debug />}
        {matchPath('/iframe') && <IFrame />}
        {matchPath('/redirect') && <Redirect />}
        {matchPath('/sent') && <>{sendMessage()}</>}
      </div>
    </ReduxProvider>
  );
}

export default App;
