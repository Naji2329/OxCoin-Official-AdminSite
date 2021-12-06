import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';

import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';

import News from './components/Home/News';
import AddNews from './components/Home/AddNews';
import Faq from './components/Home/Faq';
import AddFaq from './components/Home/AddFaq';

import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <div className="naji-menu-div">
            <Navbar />
          </div>
          <div className="naji-body-div">
          <Header />
            <Alert />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="news"
                element={<PrivateRoute component={News} />}
              />
              <Route
                path="add-news"
                element={<PrivateRoute component={AddNews} />}
              />
              <Route
                path="faq"
                element={<PrivateRoute component={Faq} />}
              />
              <Route
                path="add-faq"
                element={<PrivateRoute component={AddFaq} />}
              />
              <Route path="/*" element={<NotFound />} />
            </Routes> 
          </div>
        </div>

      </Router>
    </Provider>
  );
};

export default App;
