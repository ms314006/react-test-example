import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Main from './component/Main';

ReactDom.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById('root'),
);
