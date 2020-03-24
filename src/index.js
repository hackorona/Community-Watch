import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UpdatePassword from './components/auth/UpdatePassword';

import Books from './components/Books/BooksIndex';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './reducers';

import './App.css';

const Root = () => (
  <Provider store={store}>
  	 <Router>
      	<div className="App">
        	<Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route path="/update-password" component={UpdatePassword} />
              <Route path="/map" component={App} />
              <Route path="/books" component={App} />
            </div>
            <Footer />
	  	</div>
     </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
