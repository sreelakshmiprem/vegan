import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import PaymentPage from './Pages/Payment';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/payment" component={PaymentPage} />
      </div>
    </Router>
  );
};

export default App;
