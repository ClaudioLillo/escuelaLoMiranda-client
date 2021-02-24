import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { green, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3b6277',
    } ,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
})


ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
