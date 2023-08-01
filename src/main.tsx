import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Router} from './router/router';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Router />
    <ToastContainer />
  </BrowserRouter>,
);
