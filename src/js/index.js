import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './styles/theme';

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme({ type: "light" })}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
