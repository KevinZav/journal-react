import React from 'react';
import ReactDOM from 'react-dom/client';
import JournalApp from './JournalApp';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import 'animate.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
