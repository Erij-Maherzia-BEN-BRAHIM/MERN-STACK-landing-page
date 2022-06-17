/* import React from 'react'; */
/* import ReactDOM from 'react-dom'; */
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom'
/* ReactDOM.render(
<BrowserRouter>
<App></App>
</BrowserRouter>
  ,
  document.getElementById('root')); */


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<BrowserRouter>
    <App></App>
    </BrowserRouter>);
