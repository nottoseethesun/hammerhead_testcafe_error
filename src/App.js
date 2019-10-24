import React from 'react';
import Debug from './Debug';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';
const reduxStore = configureStore({
  log: ['Init log']
});

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <Debug />
      </div>
    </ReduxProvider>
  );
}

export default App;
