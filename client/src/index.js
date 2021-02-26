import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './redux/store/index'
import { ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3b6277',
    } ,
    secondary:{
      main: '#b00e5b',
    },
  },
  status: {
    danger: 'orange',
  },
})


ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
