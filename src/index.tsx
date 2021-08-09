import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TasksContextProvider } from './Context/TasksContext';

ReactDOM.render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
