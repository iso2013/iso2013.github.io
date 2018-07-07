import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import * as colors from '@material-ui/core/colors';

const fontOverride = {
  fontFamily: [
    'Josefin Sans',
    'Roboto'
  ].join(','),
  marginBottom: "-0.15em"
}

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      display1: fontOverride,
      display2: fontOverride,
      display3: fontOverride,
      display4: fontOverride,
      gutterBottom: {
        marginBottom: "0.35em"
      },
      title: fontOverride,
      headline: fontOverride
    }
  },
  palette: {
    primary: colors["blue"],
    secondary: colors["orange"],
    error: colors["red"]
  }
});

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
